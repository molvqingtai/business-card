const { User } = require('../services')

const getUserInfo = async ctx => {
  const userInfo = await User.findOne({ name: '吴映翰' })
  console.log(userInfo)

  ctx.body = {
    success: true,
    data: userInfo
  }
}

const saveUserInfo = async ctx => {
  const data = await User.create({
    name: '屈警犬',
    level: '摄影师',
    jobIndex: '0005',
    phone: '13551294010',
    email: 'molvqingtai@gmail.com',
    address: '成都市锦江区牛市口通宝街财富中心 1609 号'
  })
  console.log(data)
}

module.exports = {
  getUserInfo,
  saveUserInfo
}
