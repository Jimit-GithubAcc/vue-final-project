import axios from "axios";

const BASE_URL = "https://b55a-103-240-35-190.in.ngrok.io/";
// const BASE_URL = "https://f129-103-240-35-190.in.ngrok.io/";

const state = {

    auth_token: null,
    company: {
        id: null,
        email: null,
        password: null
    },
    logged: false
}

const getters = {
    getAuthToken(state){
        return state.auth_token;
    },
    getCompanyEmail(state){
        return state.company?.email;
    },
    getCompanyID(state){
        return state.company?.id;
    },
    isLoggedIn(state){
        const loggedOut = state.auth_token == null || state.auth_token == JSON.stringify(null);
        return !loggedOut
    },
}

const actions = {
    registerCompany({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}companies`, payload)
            .then((response) => {
                if(response.status === 200) {
                    commit("setCompanyInfo", response)
                    // console.log(response);
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((err) => reject(err))
        })
    },
    loginCompany({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}companies/sign_in`, payload)
            .then((response) => {
                console.log(response);
                commit("setCompanyInfo", response)
                if(response.status === 200) {
                    resolve(true) 
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((err) => reject(err))
        })
    },
    // logoutCompany({commit}){
    //     const config = {
    //         headers: {
    //             authorization: state.auth_token
    //         }
    //     }
    //     new Promise((resolve, reject) => {
    //         axios.delete(`${BASE_URL}companies/sign_out`, config)
    //         .then(() => {
    //             console.log("Msg---")
    //             commit("resetCompanyInfo")
    //             resolve()
    //         })
    //         .catch((err) => {
    //             console.log("Msg");
    //             reject(err);
    //         })
    //     })
    // },
    logoutCompany({commit}){
        commit("resetCompanyInfo")
    },
    loginCompanyWithToken({commit}, payload){
        const config = {
            headers: {
                Authorization: payload.auth_token
            }
        }
        new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}company-data`, config)
            .then((response) => {
                console.log(response)
                commit("setCompanyInfoFromToken", response)
                resolve(response)
            })
            .catch((err) => reject(err))
        })
    },
    setLogin({commit}){
        commit("setLogin")
    }
}

const mutations = {
    setCompanyInfo(state, data) {
        state.company = data.data.company;
        state.auth_token = data.headers.authorization;
        axios.defaults.headers.common["Authorization"] = data.headers.authorization;
        localStorage.setItem("auth_token",data.headers.authorization);
        state.logged = true;
        state.company.id = data.data.company.id
    },
    setCompanyInfoFromToken(state, data) {
        state.company = data.data.company;
        state.auth_token = localStorage.getItem("auth_token");
        state.logged = true;
    },
    resetCompanyInfo(state){
        state.company = {
            id: null,
            email: null,
            password: null
        };
        state.auth_token = null;
        localStorage.removeItem("auth_token");
        axios.defaults.headers.common["Authorization"] = null;
        state.logged = false;
    },
    setLogin(state){
        state.logged = !state.logged
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}