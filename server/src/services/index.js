const models = require('../models')

class User {
  static create (data) {
    models.User.create(data, (err, res) => {
      console.log(err, res)
    })
  }

  static findOne (params) {
    return new Promise((resolve, reject) => {
      models.User.findOne(params, (err, res) => err ? reject(err) : resolve(res))
    })
  }
}

module.exports = {
  User
}
