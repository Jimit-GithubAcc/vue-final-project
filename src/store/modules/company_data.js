import axios from "axios";

const BASE_URL = "https://c9de-103-240-35-190.in.ngrok.io/";
// const BASE_URL = "https://f129-103-240-35-190.in.ngrok.io/";

const state = {
    companyData: {},
    allCompanyData: null
}

const getters = {
    getCompanyData(state){
        return state.companyData;
    }
}

const mutations = {
    setCompanyData(state, companyData) {
        state.companyData = companyData;
    },
    fetchCompanyData(state, allCompanyData) {
        state.allCompanyData = allCompanyData;
    }
}

const actions = {
    addCompanyData({commit}, payload){
        return new Promise((resolve, reject) => {
            axios
                .post(`${BASE_URL}company/company_details`, payload, {
                    headers: { 'Content-Type': 'multipart/form-data'}
                })
                .then((response) => {
                    commit("setCompanyData", response.data);
                    console.log(response);
                    resolve(response);
                    this.$toast.success("User profile details added.", { timeout: 3000 });
                })
                .catch((err) => {
                    reject(err);
                    this.$toast.error("Some error occured.", { timeout: 3000 });
                });
        });
    },
    editCompanyData({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.patch(`${BASE_URL}company/company_details`, payload)
            .then((response) => {
                if (response.status === 200) {
                    commit("setCompanyData", response.data);
                    resolve(true);
                    this.$toast.success(response.message, { timeout: 3000 });
                }
            })
            .catch((error) => reject(error));
        })
    },
    fetchCompanyProfileData({commit}){
        new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}company/company_details`)
                .then((response) => {
                    console.log(response.data.data);
                    commit("fetchCompanyData", response.data.data);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}