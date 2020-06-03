
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  level: String,
  jobIndex: String,
  phone: String,
  address: String
})
const User = mongoose.model('User', UserSchema)

module.exports = User
