const mongoose = require('mongoose')

const connectDb = async () => {
  try {

    const connection = await mongoose.connect(process.env.DB_URI, {})

    console.log('Database connected!', connection.connection.host)

  } catch (error) {
    console.error('Error connection to database', error.message)
  }
}

module.exports = connectDb
