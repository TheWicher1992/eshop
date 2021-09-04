const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/Product')

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find()
  return res.status(200).json(
    products
  )
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findOne({
    _id: req.params.id
  })
  if (product) return res.status(200).json(product)
  else return res.status(404).json({ message: 'Product not found' })
}))

module.exports = router
