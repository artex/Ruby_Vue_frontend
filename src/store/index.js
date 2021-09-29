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
        /**
         * Set user data when login pass
         * @param {object} state  
         * @param {object} userData Login user data
         * @return void
         */
        setUserData(state, userData) {
            state.user = userData;
        },

        /**
         * Set error when login fail
         * @param {object} state 
         * @param {object} userData Login error data
         * @return void
         */
        setErrorData(state, userData) {
            state.error = userData
        },

        /**
         * Set applicant data when submit
         * @param {object} state 
         * @param {object} userData Confirm data
         * @return void
         */
        applicantData(state, userData) {
            state.applicant = userData
        },

        /**
         * Set fileData when choosed file in form
         * @param {File} state 
         * @param {File} fileData show image in Confirm Page
         * @return void
         */
        storeFile(state, fileData) {
            state.photofile = fileData
        },

        /**
         * Set error1 when fail validation
         * @param {object} state 
         * @param {object} errorData show error when failed validation in Confirm Page
         * @return void
         */
        errorStatus(state, errorData) {
            state.error1 = errorData
        }
    },
    actions: {
        /**
         * Login validation
         * @param {*} commit mutate user or error data  
         * @param {object} credentials user data from login form
         * @returns {object} error or data
         */
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
         * validate applicant data and set "sendData" to "applicantData" state 
         * @param {*} commit mutate applicant or error data 
         * @param {object} sendData applicant data from Home Page
         * @returns {object} data or error
         */
        confirmApplicantInfo({ commit }, sendData) {
            return axios.post("api/applicant/confirm", sendData)
                .then(() => {
                    commit("applicantData", sendData)
                }).catch(err => {
                    console.log(err.response.data)
                    commit("errorStatus", err.response.data)
                })
        },

        /**
         * Set "file" data to "storeFile"
         * @param {*} commit mutate profile_photo  
         * @param {File} file file data when choose photo
         * @return void
         */
        filestore({ commit }, file) {
            commit("storeFile", file)
        },

        /**
         * set "setUserData" to null when logout
         * @param {*} commit mutate user data 
         * @return void
         */
        logout({ commit }) {
            commit("setUserData", null);
        },

        /**
         * Clear all data when cancle 
         * @param {*} commit mutate applicant data and file
         * @return void
         */
        clearApplicantInfo({ commit }) {
            commit("setUserData", null);
            commit("storeFile", null)
        },

        /**
         * Save data to database then set "applicantData" and "storeFile" states to null
         * @param {*} commit mutate applicant data and file data
         * @param { object } formData Applicant data from Confrim Page
         * @return void
         */
        createApplicantData({ commit }, formData) {
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