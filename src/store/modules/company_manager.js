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
    loggedIn(state){
        return state.logged || false
    }
}

const actions = {
    registerCompany({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}companies`, payload)
            .then((response) => {
                commit("setCompanyInfo", response)
                console.log(response);
                resolve(response)
            })
            .catch((err) => reject(err))
        })
    },
    loginCompany({commit}, payload){
        new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}companies/sign_in`, payload)
            .then((response) => {
                console.log(response);
                commit("setCompanyInfo", response)
                resolve(response)
            })
            .catch((err) => reject(err))
        })
    },
    logoutCompany({commit}){
        const config = {
            headers: {
                authorization: state.auth_token
            }
        }
        new Promise((resolve, reject) => {
            axios.delete(`${BASE_URL}companies/sign_out`, config)
            .then(() => {
                console.log("Msg---")
                commit("resetCompanyInfo")
                resolve()
            })
            .catch((err) => {
                console.log("Msg");
                reject(err);
            })
        })
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
    },
    setCompanyInfoFromToken(state, data) {
        state.company = data.data.company;
        state.auth_token = localStorage.getItem("auth_token");
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