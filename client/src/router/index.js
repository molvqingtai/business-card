import Vue from 'vue'
import Router from 'vue-router'
import routerAccess from './router-access.js'

const VLogin = () => import('@/views/login/V-Login.vue')
const VUser = () => import('@/views/user/V-User.vue')
const VAdmin = () => import('@/views/admin/V-Admin.vue')

Vue.use(Router)

const routes = [
  {
    path: '/user/:id',
    name: 'User',
    component: VUser,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: VAdmin
  },
  {
    path: '/login',
    name: 'Login',
    component: VLogin
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(routerAccess)

export default router
