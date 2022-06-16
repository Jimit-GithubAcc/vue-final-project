import Vue from 'vue'
import Vuex from 'vuex'
import sessionManager from './modules/session__manager'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sessionManager,
  }
})
