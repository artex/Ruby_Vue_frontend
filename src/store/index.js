import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
        error: "",
        applicant: null,
        photofile: [],
        error1: "",
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },
        setErrorData(state, userData) {
            state.error = userData
        },
        applicantData(state, userData) {
            state.applicant = userData
        },
        storeFile(state, fileData) {
            state.photofile = fileData
        },
        errorStatus(state, errorData) {
            state.error1 = errorData
        }
    },
    actions: {
        login({ commit }, credentials) {
            return axios.post("/auth/login", credentials)
                .then(data => {
                    commit("setUserData", data);
                })
                .catch(err => {
                    commit("setErrorData", err.response.data.error)
                });
        },
        /**
         * confirm
         * validate user data and set "sendData" to "applicantData" state 
         * @param { object } sendData applicant data from Home Page
         * @returns { object } object is either data or error
         */
        confirm({ commit }, sendData) {
            return axios.post("api/applicant/confirm", sendData)
                .then(() => {
                    commit("applicantData", sendData)
                }).catch(err => {
                    console.log(err.response.data)
                    commit("errorStatus", err.response.data)
                })
        },
        filestore({ commit }, file) {
            commit("storeFile", file)
        },

        /**
         * logout
         * set "setUserData" to null when logout
         */
        logout({ commit }) {
            commit("setUserData", null);
        },

        /**
         * clear
         * set "setUserData" to null when clear Applicant form data
         */
        clear({ commit }) {
            commit("setUserData", null);
        },

        /**
         * createPost
         * Save data to database then set "applicantData" and "storeFile" states to null
         * @param { object } formData Applicant data from Confrim Page
         * @return void
         */
        createPost({ commit }, formData) {
            try {
                return axios.post("/api/applicant/create", formData)
                    .then(data => {
                        console.log(data);
                        commit("applicantData", null);
                        commit("storeFile", null)
                    })
                    .catch(err => {
                        console.log(err)
                    });
            } catch (e) {
                console.error(e);
            }
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        isApplicant: (state) => !!state.applicant,
        userType: (state) => {
            if (state.user && state.user.data.user_type) {
                return state.user.data.user_type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.user && state.user.data.user_id) {
                return state.user.data.user_id;
            }
        },
        userName: (state) => {
            if (state.user && state.user.data.user.email) {
                return state.user.data.user.email;
            }
        },
    },

    plugins: [createPersistedState()],
});