const Koa = require('koa')
const logger = require('koa-logger')
const CONFIG = require('./config')
const router = require('./routers')

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.use(logger())

app.listen(CONFIG.port, e => {
  debugger
  console.log('App starting at http://localhost:3000')
})
