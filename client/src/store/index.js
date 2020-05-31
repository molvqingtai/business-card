import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from '@/utils/local-storage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
      LocalStorage.setItem({ userInfo })
    }
  },
  actions: {
    async fetchUserInfo ({ commit }) {
      const userInfo = await Promise.resolve({
        token: 12345678
      })
      commit('updateUserInfo', userInfo)
    }
  },
  getters: {
    userInfo ({ userInfo }) {
      return userInfo || LocalStorage.getItem('userInfo')
    }
  }
})
