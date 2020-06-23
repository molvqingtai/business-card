import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons/iconfont/material-icons.css'
import '@/assets/styles/tailwind.css'

import IziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.css'

Vue.use(IziToast, {
  pause: true,
  timeout: 2000,
  displayMode: 2,
  position: 'topCenter',
  transitionIn: 'fadeInDown'
})

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
