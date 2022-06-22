import axios from "axios";
const BASE_URL = "https://bbea-103-240-35-190.in.ngrok.io/";
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
}

const actions = {
    registerUser({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}users`, payload)
            .then((response) => {
                if(response.status === 200) {
                    commit("setUserInfo", response)
                    // console.log(response);
                    resolve(true)
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
             })
            .catch((err) => reject(err))
        })
    },
    loginUser({commit}, payload){
        return new Promise((resolve, reject) => {
            axios.post(`${BASE_URL}users/sign_in`, payload)
            .then((response) => {
                // console.log(response.data);
                if(response.status === 200) {
                    commit("setUserInfo", response)
                    resolve(true) 
                    this.$toast.success(response.message,{ timeout : 3000 });
                }
            })
            .catch((err) => reject(err))
        })
    },
    // logoutUser({commit}){
    //     const config = {
    //         headers: {
    //             authorization: state.auth_token
    //         }
    //     }
    //     new Promise((resolve, reject) => {
    //         axios.delete(`${BASE_URL}users/sign_out`, config)
    //         .then(() => {
    //             commit("resetUserInfo")
    //             resolve()
    //         })
    //         .catch((err) => {
    //             reject(err);
    //         })
    //     })
    // },
    logoutUser({commit}){
        commit("resetUserInfo")
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
        state.logged = true;
        state.user.id = data.data.user.id
    },
    setUserInfoFromToken(state, data) {
        state.user = data.data.user;
        state.auth_token = localStorage.getItem("auth_token");
        state.logged = true;
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