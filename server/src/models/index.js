const { mongoDB } = require('../config')
const mongoose = require('mongoose')
const User = require('./user-info')

mongoose.connect(`mongodb://${mongoDB.host}/${mongoDB.database}`)
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

module.exports = {
  User
}
