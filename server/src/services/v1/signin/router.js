const mongoose = require('mongoose')
const Router = require('@koa/router')
const jsonwebtoken = require('jsonwebtoken')
const hash = require('../../../utils/hash')
const Admin = require('./model')

const router = new Router({
  prefix: '/signin'
})

router.post('/', async (ctx) => {
  try {
    const { username, password } = ctx.request.body
    const admin = await Admin.findOne({ username })
    if (admin) {
      const status = admin.password === hash(password)
      if (status) {
        ctx.body = {
          code: 200,
          message: '登录成功！',
          token: jsonwebtoken.sign({ username, password }, 'molvqingtai', { expiresIn: '1h' })
        }
      } else {
        ctx.body = {
          code: 400,
          message: '登录失败，密码错误！'
        }
      }
    } else {
      ctx.body = {
        code: 400,
        message: '登录失败，没有此用户！'
      }
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
})

module.exports = router
