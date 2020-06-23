import store from '@/store'
import isEmpty from '@/utils/is-empty.js'

const hasLogin = () => {
  return !isEmpty(store.getters.token)
}

const routerAccess = (to, form, next) => {
  if (to.path === '/admin') {
    hasLogin() ? next() : next('/login')
  } else {
    next()
  }
}

export default routerAccess
