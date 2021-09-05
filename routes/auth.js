const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const Product = require('../models/Product')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')
router.get('/', auth, async (req, res) => {
  return res.json(req.user)
})

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(email, password)
    const user = await User.findOne({ email })

    if (!user || !await user.matchPassword(password))
      return res.status(401).json({ error: "INVALID_CREDENTIALS" })

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })

  } catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = await User.findOne({
      email
    })

    if (user) return res.status(400).json({ error: 'USER_EXISTS' })

    const newUser = new User({
      name, email, password
    })

    await newUser.save()

    return res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  }
  catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router
