import axios from "axios";
const BASE_URL = "https://74b1-103-240-35-190.in.ngrok.io/"

const state = {
    skills: [],
    userData: {
        profile: {},
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
    },
};

const getters = {
    getUserData(state) {
        return state.userData;
    },
    getSkills(state) {
        return state.skills;
    },
};

const actions = {
    addProfile({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .patch(`${BASE_URL}user_details/1`, payload)
                .then((response) => {
                    commit("setProfile", response);
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
    addUserEducationData({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${BASE_URL}educations`, payload)
                .then((response) => {
                    if (response.status === 200) {
                        commit("setUserEducationData", response.data);
                        resolve(true);
                        this.$toast.success(response.message, { timeout: 3000 });
                    }
                })
                .catch((error) => reject(error));
        });
    },
    addUserExperienceData({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${BASE_URL}experiences`, payload)
                .then((response) => {
                    if (response.status === 200) {
                        commit("setUserExperienceData", response.data);
                        resolve(true);
                        this.$toast.success(response.message, { timeout: 3000 });
                    }
                })
                .catch((error) => reject(error));
        });
    },
    async getUserEducationData(_, id) {
        const response = await axios.get(`${BASE_URL}educations/${id}`);
        console.log(response);
    },
    fetchSkills({ commit }) {
        new Promise((resolve, reject) => {
            axios
                .get(`${BASE_URL}skills`)
                .then((response) => {
                    console.log(response);
                    commit("fetchUserSkills", response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    },
};

const mutations = {
    fetchUserSkills(state, data) {
        state.skills = data;
    },
    setProfile(state, data) {
        state.userData.profile = data;
    },
    setUserEducationData(state, data) {
        state.userData.education = data;
    },
    setUserExperienceData(state, data) {
        state.userData.experience = data;
    },
    // getUserEducationData(state, data){
    //     state.userData.experience = data
    // }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
