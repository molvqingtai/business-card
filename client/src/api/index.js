import { get, post } from './http'

/**
 *  管理员登录
 * @param {Objtct} data // 账号 username 密码 password
 */
export const signIn = data => post('/signin', data)

/**
 * 获取用户信息
 * @param {Object} params // 用户 id
 */
export const getUserInfo = params => get('/users/info', params)

/**
 * 查询用户列表
 * @param {Object} params // 关键词 kewords
 */
export const searchUserList = params => get('/users/search', params)

/**
 * 删除用户
 * @param {Object} data // 用户 id
 */
export const removeUserItem = data => post('/users/remove', data)

/**
 *  编辑用户
 * @param {Object} data // 用户信息
 */
export const updateUserItem = data => post('/users/update', data)

/**
 * 创建用户
 * @param {Object} data // 用户信息
 */
export const createUserItem = data => post('/users/create', data)

/**
 * 图片上传
 * @param {Object} data // 头像 avatar or 微信 wechat
 */
export const uploadUserFile = data => post('/users/upload', data)

export default {
  signIn,
  getUserInfo,
  searchUserList,
  removeUserItem,
  updateUserItem,
  createUserItem,
  uploadUserFile
}
