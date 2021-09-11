require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const connectDb = require('./config/db')
const cors = require('cors')

connectDb()

// Cross Origin
app.use(cors())
// JSON Body Parser
app.use(express.json())

app.use('/api/products', require('./routes/products'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/orders', require('./routes/orders'))
//admin
app.use('/api/admin/dashboard', require('./routes-admin/dashboard'))

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT} in ${process.env.NODE_ENV} mode`)
})
