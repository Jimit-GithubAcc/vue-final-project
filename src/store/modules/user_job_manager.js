import axios from "axios";

const BASE_URL = "https://bbea-103-240-35-190.in.ngrok.io/";

const state = {
    jobs: null,
}

const getters = {
    getSaveJobs(state){
        return state.jobs
    }
}

const mutations = {
    saveJobs(state, jobs){
        state.jobs = jobs
    }
}

const actions = {
    saveJob({commit}, id){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}save_jobs/add_or_remove_save_job/${id}`)
            .then((response) => {
                if(response.status === 200){
                    console.log("Save = ", response);
                    commit("saveJobs", response.data)
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((err) => {
                reject(err)
                // this.$toast.error(err.message,{ timeout : 3000 });
            })
        })
    },
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}