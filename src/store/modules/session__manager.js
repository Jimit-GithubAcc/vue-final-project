import axios from "axios";


const BASE_URL = "https://cf59-103-240-35-190.in.ngrok.io/";

const state = {
    auth_token: null,
    user: {
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
    getUserEmail(state){
        return state.user?.email;
    },
    getUserID(state){
        return state.user?.id;
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
    registerUser({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}users`, payload)
            .then((response) => {
                commit("setUserInfo", response)
                console.log(response);
                resolve(response)
            })
            .catch((err) => reject(err))
        })
    },
    loginUser({commit}, payload){
        new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}users/sign_in`, payload)
            .then((response) => {
                console.log(response);
                commit("setUserInfo", response)
                resolve(response)
            })
            .catch((err) => reject(err))
        })
    },
    logoutUser({commit}){
        const config = {
            headers: {
                authorization: state.auth_token
            }
        }
        new Promise((resolve, reject) => {
            axios.delete(`${BASE_URL}users/sign_out`, config)
            .then(() => {
                commit("resetUserInfo")
                resolve()
            })
            .catch((err) => {
                reject(err);
            })
        })
    },
    loginUserWithToken({commit}, payload){
        const config = {
            headers: {
                Authorization: payload.auth_token
            }
        }
        new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}member-data`, config)
            .then((response) => {
                console.log(response)
                commit("setUserInfoFromToken", response)
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
    setUserInfo(state, data) {
        state.user = data.data.user;
        state.auth_token = data.headers.authorization;
        axios.defaults.headers.common["Authorization"] = data.headers.authorization;
        localStorage.setItem("auth_token",data.headers.authorization);
    },
    setUserInfoFromToken(state, data) {
        state.user = data.data.user;
        state.auth_token = localStorage.getItem("auth_token");
    },
    resetUserInfo(state){
        state.user = {
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