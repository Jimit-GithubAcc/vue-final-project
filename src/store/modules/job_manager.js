import axios from "axios";
const BASE_URL = "https://job-portal-rails.herokuapp.com/";
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
    candidatesArr: [],
    searchTerm : "",
    appliedJobsArr: [],
    // singleJob: {}
}

const getters = {
    getJobs(state){
        return state.jobsArr.reverse()
    },
    getFilteredJobs: (state) => {
        if (!state.searchTerm) return state.jobsArr;
        return state.jobsArr.filter((job) => 
            job.job_title?.includes(state.searchTerm.trim()) ||
            job.location?.includes(state.searchTerm.trim()) ||
            job.job_description?.includes(state.searchTerm.trim())
        );
    },
    getAllCandidates : (state) => {
        return state.candidatesArr
    },
    getAllAppliedJobs : (state) => {
        return state.appliedJobsArr
    }
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
    getCandidatesData(state, data){
        state.candidatesArr = data
    },
    getAppliedJobs(state, data){
        state.appliedJobsArr = data
    },
    deleteAppJob(state, jobId){
        let jobs = state.appliedJobsArr.filter(job => job.id != jobId);
        state.appliedJobsArr = jobs 
    }
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
    async getCandidates({commit}){
        const response = await axios.get(`${BASE_URL}company/all_applications`)
        console.log(response.data)
        commit("getCandidatesData", response.data)
    },
    async getAppliedJobsData({commit}){
        const response = await axios.get(`${BASE_URL}user/job_applications/my_job_application`)
        console.log(response.data)
        commit("getAppliedJobs", response.data)
    },
    async deleteAppliedJob({commit}, payload){
        const response = await axios.delete(`${BASE_URL}user/job_applications/delete_job_application/${payload.id}`)
        console.log(response)
        if(response.status === 200 || response.status == 204){
            commit("deleteAppliedJob", response.data.data)
        }
        
    }
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