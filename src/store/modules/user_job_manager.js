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
    },
    getCVS(state){
        return state.cvsArr
    }
}

const mutations = {
    saveJobs(state, jobs){
        state.jobs = jobs
    },
    viewAllJobs(state, jobs){
        state.saveJobs = jobs
    },
    addCVS(state,CVS){
        state.CVS = CVS
    },
    getCVSdata(state,data){
        state.cvsArr = data
    },
    applyJob(state,data){
        state.jobApply = data
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
    },
    addCVS({commit},payload){
        return new Promise((resolve, reject) => {
            axios.patch(`${BASE_URL}user_cv/add_cv`,payload,{
                headers: { 'Content-Type': 'multipart/form-data'}
            })
            .then((response) => {
                if(response.status === 200){
                    console.log(response);
                    commit("addCVS", response.data)
                    resolve(true)
                    this.$toast.success("CV uploaded successfully",{ timeout : 3000 });
                }
            })
            .catch((err) => {
                reject(err)
                this.$toast.error(err.message,{ timeout : 3000 });
            })
        })
    },
    async getCVSdata({commit}){
        //let token = window.localStorage.getItem("auth_token");
        const response = await axios.get(`${BASE_URL}user_cv/show_all_cv`)
        console.log('JobData = ',response.data)
        commit("getCVSdata", response.data.data)
    },
    applyJob({commit},payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}user/job_applications`,payload)
            .then((response) => {
                if(response.status === 200){
                    console.log(response);
                    commit("applyJob", response.data)
                    resolve(true)
                    this.$toast.success("job applied successfully",{ timeout : 3000 });
                }
            })
            .catch((err) => {
                reject(err)
                this.$toast.error(err.message,{ timeout : 3000 });
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