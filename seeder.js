const mongoose = require('mongoose')
require('dotenv').config()

const users = require('./data/users')
const products = require('./data/products')

const Product = require('./models/Product')
const User = require('./models/User')
const Order = require('./models/Order')

const connectDb = require('./config/db')

connectDb()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported...')
    process.exit()
  } catch (error) {
    console.error('Error importing data', error.message)
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()


    console.log('Data destroyed....')
    process.exit()
  } catch (error) {
    console.error('Error destroying data', error.message)
    process.exit(1)
  }
}

switch (process.argv[2]) {
  case "-d":
    destroyData()
  default:
    importData()
}
