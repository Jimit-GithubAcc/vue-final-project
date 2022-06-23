import Vue from 'vue'
import Vuex from 'vuex'
import session_manager from './modules/session__manager'
import company_manager from './modules/company_manager'
import user_data from './modules/user_data'
import job_manager from './modules/job_manager'
import user_job_manager from './modules/user_job_manager'
import company_data from './modules/company_data'

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
    company_manager,
    "userData" :user_data,
    "jobs": job_manager,
    "userjob": user_job_manager,
    "companyData": company_data
  }
})
