/**
 * 错误捕获中间件
 */
module.exports = async (ctx, next) => {
  return next().catch(error => {
    if (error.status === 401) {
      ctx.body = {
        code: 401,
        message: '登录过期，请重新登录！'
      }
    } else {
      ctx.throw(400, error.message)
    }
  })
}
