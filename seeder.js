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
    const users = await User.find().select('_id')
    const products = await Product.find()

    for (let i = 0; i < 10000; i++) {
      const item = products[Math.floor(Math.random() * users.length)]

      let order = new Order({
        user: users[Math.floor(Math.random() * users.length)]._id,
        orderItems: [
          {
            name: item.name,
            qty: 1,
            image: item.image,
            price: item.price,
            product: item._id
          }
        ],
        shippingAddress: {
          address: '',
          postal: '',
          city: '',
          country: ''
        },
        paymentMethod: 'PayPal',
        shippingPrice: 100,
        totalPrice: item.price + 100
      })
      await order.save()
    }

  } catch (error) {
    process.exit(1)
  }
}

switch (process.argv[2]) {
  case "-d":
    destroyData()
    break
  case "-o":
    make10000Orders().then(() => console.log('Done')).catch((err) => console.log(err))
    break
  default:
    importData()
}
