// https://www.jstips.co/zh_cn/javascript/get-file-extension/

const getFileExtension = fileName => {
  return fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2)
}

module.exports = getFileExtension
