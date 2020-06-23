const Admin = require('./model')
const hash = require('../../../utils/hash')
const jsonwebtoken = require('jsonwebtoken')

/**
 * 管理员登录
 * @param {} ctx
 */
const signin = async ctx => {
  try {
    const { username, password } = ctx.request.body
    const admin = await Admin.findOne({ username })
    if (admin) {
      // 校验密码
      const status = admin.password === hash(password)
      if (status) {
        ctx.body = {
          code: 200,
          message: '登录成功！',
          // 签发 JTW token
          data: jsonwebtoken.sign({ username, password }, process.env.JWT_SECRET, { expiresIn: '1 days' }) // https://github.com/vercel/ms
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
}

module.exports = {
  signin
}
