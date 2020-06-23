const mongoose = require('mongoose')
const { mongoDB } = require('../config')

const CONNECT_URL = `mongodb://${mongoDB.username}:${mongoDB.password}@${mongoDB.host}:${mongoDB.port}/${mongoDB.database}`
mongoose.connect(CONNECT_URL)

const db = mongoose.connection

db.once('open', () => {
  console.log('MongoDB open!')
})

db.on('connected', () => {
  console.log('MongoDB connected success!')
})

db.on('error', () => {
  console.log('MongoDB connected fail!')
})

const createModel = (name, types) => mongoose.model(name, new mongoose.Schema(types))

const Admin = createModel('Admin', {
  username: String,
  password: String
})

const User = createModel('User', {
  name: String,
  post: String,
  index: String,
  phone: String,
  address: String
})

module.exports = {
  Admin,
  User
}
