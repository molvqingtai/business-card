const Router = require('@koa/router')
const controller = require('./controller')

const router = new Router({
  prefix: '/users'
})

router.get('/info', controller.info)
router.get('/search', controller.search)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/remove', controller.remove)

module.exports = router
