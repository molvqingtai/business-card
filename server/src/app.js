const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const serve = require('koa-static')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const jwt = require('koa-jwt')
const { responseTime, errorHandler } = require('./middleware')
const { v1 } = require('./services')
const path = require('path')

const app = new Koa()

/**
 * 日志
 */
app.use(logger())

/**
 * 设置响应时间
 */
app.use(responseTime)

/**
 * 解析 body
 */
app.use(bodyparser())

/**
 * 设置静态服务器
 */
app.use(serve(path.resolve(__dirname, './public')))

/**
 * 错误捕获
 */
app.use(errorHandler)

/**
 * 使用 JWT 验证
 */
app.use(jwt({ secret: process.env.JWT_SECRET }).unless({ path: [/\/signin/, /\/signup/, /\/info/, /\/public/] }))

/**
 * 使用路由
 */
app.use(v1.routes())

/**
 * 连接数据库
 */
mongoose.connect(process.env.DB_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', (err) => {
  console.error(err)
})
db.once('connected', () => {
  console.info('Mongo connected')
})
db.on('reconnected', () => {
  console.info('Mongo re-connected')
})
db.on('disconnected', () => {
  console.info('Mongo disconnected')
})

/**
 * 起飞！！！
 */
app.listen(process.env.PORT, e => {
  console.log(`🚀 App starting at http://localhost:${process.env.PORT}`)
})
