import axios from "axios";
const BASE_URL = "https://bbea-103-240-35-190.in.ngrok.io/";

const state = {
    userData: {
        education: {
            school_name: null,
            degree: null,
            field_of_study: null,
            start_date: null,
            end_date: null,
            description: null,
            grade: null,
        },
        experience: {
            title: null,
            employment_type: "Please select an employment type",
            company_name: null,
            location: null,
            start_date: null,
            end_date: null,
            description: null,
        }, 
    }
}

const getters = {
    getUserData(state){
        return state.userData
    },
}

const actions = {
    addUserEducationData({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}educations`, payload)
            .then((response) => {
                if(response.status === 200){
                    commit("setUserEducationData", response.data)
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((error) => reject(error))
        })
    },
    addUserExperienceData({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}experiences`, payload)
            .then((response) => {
                if(response.status === 200){
                    commit("setUserExperienceData", response.data)
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((error) => reject(error))
        })
    },
    async getUserEducationData(_, id){
        const response = await axios.get(`${BASE_URL}educations/${id}`);
        console.log(response)
    },
}

const mutations = {
    setUserEducationData(state, data) {
        state.userData.education = data
    },
    setUserExperienceData(state, data) {
        state.userData.experience = data
    },
    // getUserEducationData(state, data){
    //     state.userData.experience = data
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}