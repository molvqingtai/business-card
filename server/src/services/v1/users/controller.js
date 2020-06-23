const User = require('./model')

/**
 * 用户信息查询
 * @param {} ctx
 */
const info = async ctx => {
  try {
    const id = ctx.query.id
    const result = await User.findById(id)
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

/**
 * 用户列表查询
 * @param {*} ctx
 */
const search = async ctx => {
  try {
    const keywords = ctx.query.keywords
    const regex = new RegExp(keywords, 'i')
    const result = await User.find({
      $or: [
        { name: { $regex: regex } },
        { phone: { $regex: regex } },
        { email: { $regex: regex } }
      ]
    })
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

/**
 * 创建用户
 * @param {*} ctx
 */
const create = async ctx => {
  try {
    const body = ctx.request.body
    const result = await User.create(body)
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

/**
 * 编辑用户
 * @param {*} ctx
 */
const update = async ctx => {
  try {
    const body = ctx.request.body
    const result = await User.findByIdAndUpdate(body.id, body)
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

/**
 * 删除用户
 * @param {*} ctx
 */
const remove = async ctx => {
  try {
    const id = ctx.request.body.id
    const result = await User.findByIdAndRemove(id)
    ctx.body = {
      code: 200,
      data: result
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

/**
 * 上传头像、微信
 * @param {*} ctx
 */
const upload = async ctx => {
  try {
    const { files, URL } = ctx.request
    const [image] = files.avatar || files.wechat
    image.url = `${URL.origin}/upload/${image.filename}`
    ctx.body = {
      code: 200,
      data: image
    }
  } catch (error) {
    ctx.throw(400, error.message)
  }
}

module.exports = {
  info,
  create,
  update,
  search,
  remove,
  upload
}
