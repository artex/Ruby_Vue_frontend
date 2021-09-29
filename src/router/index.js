import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/user/Login";
import PostList from "../pages/applicant/ApplicantList";
import store from "../store";
import Home from "../pages/Home";
import Confirm from "../pages/Confirm";
import Success from "../pages/Success";
import Details from "../pages/applicant/Applicantdetails";

Vue.use(VueRouter);

const routes = [
    // Login route
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    // Post Lists route
    {
        path: "/applicants",
        name: "applicant-list",
        component: PostList,
    },
    // Confirm route
    {
        path: "/confirm",
        name: "confirm",
        component: Confirm,
    },
    // Home route
    {
        path: "/",
        name: "home",
        component: Home,
    },
    // Confirm route
    {
        path: "/success",
        name: "success",
        component: Success,
    },
    // Details route
    {
        path: "/applicants/:id",
        name: "applicant-details",
        component: Details,
    },
    // Delete route
    {
        path: "/destroy/:id",
        name: "applicant-destroy",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLoggedIn;
    const Applicant = store.getters.isApplicant;
    if (!Applicant && to.name == "confirm") {
        return next("/");
    }
    next();
    if (!loggedIn &&
        to.name != "login" &&
        to.name != "home" &&
        to.name != "confirm" &&
        to.name != "success" &&
        to.name != "applicant-details"
    ) {
        return next("/login");
    }
    next();
    if (loggedIn && (to.name == "home" || to.name == "login")) {
        return next("/applicants");
    }
    if (!loggedIn && to.name == "applicant-details") {
        return next("/");
    }
});

export default router;