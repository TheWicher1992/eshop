const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = async (req, res, next) => {
  try {
    const token = req.header('x-auth-token')
    if (!token) {
      return res.status(401).json({ error: "NO_AUTH_TOKEN" })
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(payload.id).select('-password')
    req.user = user
    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({
      error: "INVALID_AUTH_TOKEN"
    })
  }
}

module.exports = auth
