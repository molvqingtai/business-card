import Vue from 'vue'
import Router from 'vue-router'
import routerAccess from './router-access.js'

const VLogin = () => import('@/views/login/V-Login.vue')
const VCard = () => import('@/views/card/V-Card.vue')
const VAdmin = () => import('@/views/admin/V-Admin.vue')

Vue.use(Router)

const routes = [
  {
    path: '/card/:id',
    name: 'Card',
    component: VCard,
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
  routes
})

router.beforeEach(routerAccess)

export default router
