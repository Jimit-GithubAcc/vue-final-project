import axios from "axios";

const BASE_URL = "https://b55a-103-240-35-190.in.ngrok.io/";
// const BASE_URL = "https://f129-103-240-35-190.in.ngrok.io/";

const state = {
    companyData: {}
}

const getters = {
    getCompanyData(state){
        return state.companyData;
    }
}

const mutations = {
    setCompanyData(state, companyData) {
        state.companyData = companyData;
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}