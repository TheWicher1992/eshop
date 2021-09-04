const bcrypt = require('bcryptjs')
const users = [
  {
    name: 'Sameer',
    email: 'sameer.nadeem24@gmail.com',
    isAdmin: true,
    password: bcrypt.hashSync('1234', 10)
  },
  {
    name: 'Test1',
    email: 'test1@gmail.com',
    password: bcrypt.hashSync('1234', 10)
  },
  {
    name: 'Test2',
    email: 'test2@gmail.com',
    password: bcrypt.hashSync('1234', 10)
  }
]

module.exports = users
