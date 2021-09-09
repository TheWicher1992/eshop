const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const auth = require('../middlewares/auth')
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
