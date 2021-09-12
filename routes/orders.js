const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const auth = require('../middlewares/auth')


router.get('/stats', async (req, res) => {
  try {
    const undeliveredOrders = await Order.countDocuments({ isDelivered: false })
    const unpaidOrders = await Order.countDocuments({ isPaid: false })
    const last24HoursOrders = await Order.countDocuments({
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    })

    return res.json({
      undeliveredOrders,
      unpaidOrders,
      last24HoursOrders
    })
  } catch (error) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}

router.get('/', async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10
    const sort = req.query.sort ? req.query.sort : 'createdAt'
    const page = req.query.page ? parseInt(req.query.page) - 1 : 0
    const filters = {}

    if (req.query.query) filters['orderItems.name'] = {
      $in: req.query.query.split(',').map(q => new RegExp(q, 'i')
      )
    }

    console.log(filters)
    const orders = await Order
      .find(filters)
      .sort({ [sort]: 'desc' })
      .skip(page * limit)
      .limit(limit)


    const totalOrders = await Order.countDocuments(filters)
    const totalPages = Math.floor(totalOrders / limit) + 1
    const orderInfo = {
      orders,
      totalOrders,
      totalPages
    }
    return res.json(orderInfo)
  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})


router.get('/my-orders', auth, async (req, res) => {
  try {
    const userId = req.user._id

    const orders = await Order.find({ user: userId }).sort({
      updatedAt: 'desc'
    })

    return res.json(orders)

  } catch (error) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {

    const orderId = req.params.id

    const order = await Order.findById(orderId)

    return res.json(order)

  } catch (error) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})


router.post('/payment/:id', async (req, res) => {
  try {
    await Order.findOneAndUpdate({ _id: req.params.id }, { isPaid: true })
    res.end()
  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.post('/', auth, async (req, res) => {
  try {

    const { orderItems, shippingAddress, paymentMethod } = req.body

    const order = new Order({
      user: req.user._id,
      orderItems: orderItems.map(item => ({ ...item, product: item.id })),
      shippingAddress,
      paymentMethod,
      shippingPrice: 100,
      totalPrice: orderItems.reduce((acc, item) => acc + item.qty * item.price, 0) + 100
    })

    await order.save()

    return res.json(order)

  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})



module.exports = router
