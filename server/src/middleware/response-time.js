/**
 * 响应时间中间件
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  ctx.set('response-time', `${Date.now() - start}ms`)
}
