const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Order = require('../models/Order')
const User = require('../models/User')


router.get('/recent-products', async (req, res) => {
  try {
    const recentProducts = await Product.find().sort({ createdAt: 'desc' }).limit(4)
    return res.json(recentProducts)
  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.get('/latest-orders', async (req, res) => {
  try {
    const latestOrders = await Order.find().sort({ createdAt: 'desc' }).limit(8)
    return res.json(latestOrders)
  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})


//revenue, out of stock products, total sales, total users
router.get('/stats', async (req, res) => {
  try {
    const revenue = (await Order.find({ isPaid: true }).select('totalPrice')).reduce((total, order) => total + order.totalPrice, 0).toFixed(2)

    const outOfStockProducts = (await Product.find({ countInStock: 0 }).select('_id')).length

    const totalSales = (await Order.find({ isPaid: true }).select('_id')).length

    const totalCustomers = (await User.find({ isAdmin: false }).select('_id')).length

    return res.json({
      totalRevenue: revenue,
      outOfStockProducts,
      totalSales,
      totalCustomers
    })

  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})



module.exports = router
