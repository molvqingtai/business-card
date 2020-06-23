const Router = require('@koa/router')
const users = require('./users/router')
const signin = require('./signin/router')

const v1 = new Router({
  prefix: '/api/v1'
})

v1.use(users.routes())
v1.use(signin.routes())

module.exports = v1
