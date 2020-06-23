const router = require('@koa/router')()
const controllers = require('../controllers')

const auth = router.post('/login', controllers.admin.signIn)
const user = router.get('/user', controllers.user.getUserInfo)
  .post('/user', controllers.user.saveUserInfo)

router.use('/api', auth.routes(), auth.allowedMethods())
router.use('/api', user.routes(), user.allowedMethods())

module.exports = router
