const express = require('express')
const router = express.Router()
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const axios = require('axios')
const auth = require('../middlewares/auth')
const Product = require('../models/Product')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')
const { response } = require('express')

const verifyFacebookToken = async (accessToken, userId) => {
  try {

    const fbGraph = `https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${accessToken}`
    const res = await axios.get(fbGraph)

    return {
      profile: res.data,
      status: 'SUCCESS'
    }
  } catch (err) {
    return {
      status: "FAILIURE",
    }
  }
}

const verifyGoogleToken = async (tokenId) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    return {
      status: 'SUCCESS',
      profile: ticket.getPayload()
    }

  } catch (err) {
    return {
      status: 'FAILIURE'
    }
  }
}



router.get('/', auth, async (req, res) => {
  return res.json(req.user)
})
router.post("/google", async (req, res) => {
  try {
    const {
      tokenId
    } = req.body
    const verificationResult = await verifyGoogleToken(tokenId)
    if (verificationResult.status === 'FAILIURE')
      return res.status(401).json({ error: 'GOOGLE_UNVERIFIED' })
    console.log(verificationResult.profile)
    const googleProfile = verificationResult.profile
    let user = await User.findOne({ email: googleProfile.email })
    if (!user) {
      user = await User.create({
        name: googleProfile.name,
        email: googleProfile.email,
        password: ''
      })
    }

    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    }
    console.log(response)

    return res.json(response)

  }
  catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
})


router.post('/facebook', async (req, res) => {
  try {
    const { accessToken, userID } = req.body
    const verificationResult = await verifyFacebookToken(accessToken, userID)
    if (verificationResult.status === 'FAILIURE')
      return res.status(401).json({ error: 'FACEBOOK_UNVERIFIED' })

    const facebookProfile = verificationResult.profile

    console.log(facebookProfile)

    let user = await User.findOne({ email: facebookProfile.email })
    if (!user) {
      user = await User.create({
        name: facebookProfile.name,
        email: facebookProfile.email,
        password: ''
      })
    }

    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    }
    console.log(response)

    return res.json(response)
  }
  catch (err) {
    console.log("error-->", err)
    return res.status(500).json({
      error: err.message
    })
  }
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
