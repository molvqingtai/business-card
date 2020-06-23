
const mongoose = require('mongoose')
const idPlugin = require('mongoose-id')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  index: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  wechat: {
    type: String,
    required: true
  }
}, { autoCreate: true })

userSchema.plugin(idPlugin)

const User = mongoose.model('User', userSchema)

module.exports = User
