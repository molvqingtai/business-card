const Router = require('@koa/router')
const controller = require('./controller')

const router = new Router({
  prefix: '/signin'
})

router.post('/', controller.signin)

module.exports = router
