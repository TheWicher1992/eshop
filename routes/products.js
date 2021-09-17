const express = require('express')
const router = express.Router()
const Product = require('../models/Product')




router.post('/', async (req, res) => {
  try {
    const {
      name, brand, category, image, description, price, countInStock
    } = req.body

    const product = new Product({
      name,
      brand,
      image,
      category,
      description,
      price,
      countInStock
    })

    await product.save()

    return res.json(product)

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json(
      products
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id
    })
    if (product) return res.status(200).json(product)
    else return res.status(404).json({ message: 'Product not found' })
  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }

})

module.exports = router
