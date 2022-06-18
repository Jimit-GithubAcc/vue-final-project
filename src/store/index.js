import Vue from 'vue'
import Vuex from 'vuex'
import session_manager from './modules/session__manager'
import company_manager from './modules/company_manager'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    session_manager,
    company_manager
  }
})
