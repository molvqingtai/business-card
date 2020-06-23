import axios from 'axios'
import config from './config'
import store from '@/store'
import router from '@/router'

const instance = axios.create(config)

/**
 * 请求拦截
 */
instance.interceptors.request.use(config => {
  // 设置 token
  config.headers.authorization = `Bearer ${store.getters.token}`
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
instance.interceptors.response.use(response => {
  const { code, message, data } = response.data
  // 成功
  if (code === 200) {
    return data
  } else if (code === 401) {
    // 未登录跳转到登录页
    router.replace({ name: 'Login', params: { message } })
  } else {
    return Promise.reject(new Error(message))
  }
}, error => {
  return Promise.reject(error)
})

/**
 * get 请求
 * @param {String} url // 请求地址
 * @param {Object} params // 请求参数
 */
export const get = (url, params) => {
  return instance.request({
    method: 'get',
    url,
    params
  })
}

/**
 * post 请求
 * @param {String} url // 请求地址
 * @param {Object} data // 请求参数
 */
export const post = (url, data) => {
  return instance.request({
    method: 'post',
    url,
    data
  })
}

export default {
  get,
  post
}
