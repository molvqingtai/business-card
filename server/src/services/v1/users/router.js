const Router = require('@koa/router')
const controller = require('./controller')
const { upload } = require('../../../middleware')

const router = new Router({
  prefix: '/users'
})

router.get('/info', controller.info)
router.get('/search', controller.search)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.post('/remove', controller.remove)
router.post('/upload', upload.fields([{ name: 'avatar' }, { name: 'wechat' }]), controller.upload)

module.exports = router
