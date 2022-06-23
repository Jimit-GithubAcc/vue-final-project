import axios from "axios";
const BASE_URL = "https://b55a-103-240-35-190.in.ngrok.io/";
// const BASE_URL = "https://f129-103-240-35-190.in.ngrok.io/";

const state = {
    jobs: {
        job_description: null,
        year_of_exp: null,
        location: null,
        job_title: null,
        last_date_to_apply: null,
        job_application_link: null
        // skills: null
    },
    jobsArr: [],
    searchTerm : ""
    // singleJob: {}
}

const getters = {
    getJobs(state){
        return state.jobsArr
    },
    getFilteredJobs: (state) => {
        if (!state.searchTerm) return state.jobsArr;
        return state.jobsArr.filter((job) => 
            job.job_title?.includes(state.searchTerm.trim()) ||
            job.location?.includes(state.searchTerm.trim()) ||
            job.job_description?.includes(state.searchTerm.trim())
        );
    },
    // getJob(state){
    //     return state.singleJob
    // }
}

const mutations = {
    setJobData(state, data){
        state.jobs = data
    },
    getJobData(state, data){
        state.jobsArr = data
    },
    // getSingleJobData(state, data){
    //     state.singleJob = data
    // }
}

const actions = {
    addJob({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}jobs`, payload)
            .then((response) => {
                if(response.status === 200){
                    commit("setJobData", response.data)
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((err) => {
                reject(err)
                this.$toast.error(err.message,{ timeout : 3000 });
            })
        })
    },
    async getJob({commit}){
        const response = await axios.get(`${BASE_URL}jobs`)
        console.log('JobData = ',response.data.data)
        commit("getJobData", response.data.data)
    },
    // async getSingleJob({commit}, id){
    //     const response = await axios.get(`${BASE_URL}jobs/${id}`)
    //     console.log("Job = ", response)
    //     commit("getSingleJobData", response.data)
    // }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}