import axios from "axios";

// const BASE_URL = "https://14fe-103-240-35-190.in.ngrok.io/";
// const BASE_URL = "https://f129-103-240-35-190.in.ngrok.io/";
const BASE_URL = "https://b55a-103-240-35-190.in.ngrok.io/";

const state = {
    jobs: null,
    saveJobs: []
}

const getters = {
    getSaveJobs(state){
        return state.jobs
    },
    viewAllSavedJobs(state){
        return state.saveJobs
    }
}

const mutations = {
    saveJobs(state, jobs){
        state.jobs = jobs
    },
    viewAllJobs(state, jobs){
        state.saveJobs = jobs
    }
}

const actions = {
    saveJob({commit}, id){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}save_jobs/add_or_remove_save_job/${id}`)
            .then((response) => {
                if(response.status === 200){
                    console.log("Save = ", response.data.status);
                    commit("saveJobs", response.data.status)
                    resolve(true)
                    this.$toast.success(response.data.status,{ timeout : 3000 });
                }
            })
            .catch((err) => {
                reject(err)
                // this.$toast.error(err.message,{ timeout : 3000 });
            })
        })
    },
    async getSaveJob({commit}){
        const response = await axios.get(`${BASE_URL}save_jobs`)
        console.log("Saved Jobs = ", response.data.data)
        commit("viewAllJobs", response.data.data)
    }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}