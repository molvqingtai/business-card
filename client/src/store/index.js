import Vue from 'vue'
import Vuex from 'vuex'
import { signIn } from '../api'
import LocalStorage from '@/utils/local-storage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    updateToken (state, token) {
      state.token = token
      LocalStorage.setItem('token', token)
    }
  },
  actions: {
    async login ({ commit }, userInfo) {
      const token = await signIn(userInfo)
      commit('updateToken', token)
      return token
    }
  },
  getters: {
    token ({ token }) {
      return token || LocalStorage.getItem('token')
    }
  }
})
