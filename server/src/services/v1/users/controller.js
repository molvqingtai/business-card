const User = require('./model')

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

module.exports = {
  info,
  create,
  update,
  search,
  remove
}
