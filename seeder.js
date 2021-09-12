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

const make10000Orders = async () => {
  try {
    await Order.deleteMany()
    const users = await User.find().select('_id')
    const products = await Product.find()

    for (let i = 0; i < 1000; i++) {
      const totalItems = Math.floor(Math.random() * 7) + 1
      const orderItems = []

      for (let i = 0; i < totalItems; i++) {
        let alreadyIn = []
        let item = products[Math.floor(Math.random() * products.length)]
        while (alreadyIn.includes(item._id)) {
          item = products[Math.floor(Math.random() * products.length)]
        }
        alreadyIn.push(item._id)
        orderItems.push({
          name: item.name,
          qty: Math.floor(Math.random() * 5) + 1,
          image: item.image,
          price: item.price,
          product: item._id
        })
      }

      let order = new Order({
        isPaid: [true, false][Math.floor(Math.random() * 2)],
        isDelivered: [true, false][Math.floor(Math.random() * 2)],
        user: users[Math.floor(Math.random() * users.length)]._id,
        orderItems,
        shippingAddress: {
          address: '',
          postal: '',
          city: '',
          country: ''
        },
        paymentMethod: 'PayPal',
        shippingPrice: 100,
        totalPrice: orderItems.reduce((acc, item) => acc + item.price, 0) + 100
      })
      await order.save()
    }

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

switch (process.argv[2]) {
  case "-d":
    destroyData()
    break
  case "-o":
    make10000Orders()
      .then(() => console.log('Done'))
      .then(() => process.exit(0))
      .catch((err) => console.log(err))
    break
  default:
    importData()
}
