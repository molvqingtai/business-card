const Services = require('../services')
const models = require('../models')
const hash = require('../utils/hash')

class Admin extends Services {
  constructor () {
    super(models.Admin)
    this.signIn = this.signIn.bind(this)
  }

  async signIn (ctx) {
    console.log(this.findOne)
    const adminInfo = await this.findOne({ username: ctx.request.body.username })

    if (adminInfo) {
      const passwordHash = hash(ctx.request.body.password)
      const status = passwordHash === adminInfo.password
      if (status) {
        ctx.body = {
          code: 200,
          message: '登录成功！',
          data: true
        }
      } else {
        ctx.body = {
          code: 401,
          message: '密码错误，请重试！',
          data: null
        }
      }
    } else {
      ctx.body = {
        code: 400,
        message: '登录失败，没有此用户！',
        data: null
      }
    }
  }
}

class User extends Services {
  constructor () {
    super(models.User)
    this.getUserInfo = this.getUserInfo.bind(this)
  }

  async getUserInfo (ctx) {
    const userInfo = await this.findOne({ name: ctx.query.id })
    ctx.body = {
      data: userInfo
    }
  }

  saveUserInfo (ctx) {

  }
}

module.exports = {
  admin: new Admin(),
  user: new User()
}
