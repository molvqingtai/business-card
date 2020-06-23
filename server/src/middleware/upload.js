const multer = require('@koa/multer')
const path = require('path')
const getfileExtension = require('../utils/get-file-extension')

/**
 * 文件上传中间件
 */
module.exports = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // 设置上传地址
      cb(null, path.resolve(__dirname, '../public/upload'))
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.${getfileExtension(file.originalname)}`)
    }
  }),
  limits: {
    files: 1,
    fields: 1,
    fileSize: 2 * 1024 * 1024 // 2MB
  }
})
