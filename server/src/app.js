const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const jwt = require('koa-jwt')
const CONFIG = require('./config')
const { responseTime, errorHandler } = require('./middleware')
const { v1 } = require('./services')

const app = new Koa()

app.use(logger())

app.use(bodyparser())

// Set header with API response time
app.use(responseTime)

app.use(errorHandler)
app.use(jwt({ secret: 'molvqingtai' }).unless({ path: [/\/signin/, /\/signup/, /\/users/] }))

app.use(v1.routes())

const DBURL = 'mongodb://business-card:YnVzaW5lc3MtY2FyZA@47.100.199.71:27017/business-card'

mongoose.connect(DBURL, {
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

app.listen(CONFIG.port, e => {
  console.log(`🚀 App starting at http://localhost:${CONFIG.port}`)
})
