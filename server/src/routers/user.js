const router = require('@koa/router')()
const controllers = require('../controllers')

const user = router.get('/user', controllers.getUserInfo)
  .post('/user')

module.exports = user
