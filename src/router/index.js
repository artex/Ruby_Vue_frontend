import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import store from "../store";
import Home from "../pages/Home"
import Confirm from "../pages/Confirm"
import Success from "../pages/Success"
import Details from "../pages/post/Postdetails"

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    // {
    //     path: "/*",
    //     redirect: "/post/list",
    // },
    {
        path: "/confirm",
        name: "confirm",
        component: Confirm
    }, {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/success",
        name: "success",
        component: Success
    },
    {
        path: "/post/list/detail/:id",
        name: "post-details",
        component: Details
    },
    {
        path: "/post/list/destroy/:id",
        name: "post-destroy"
    }
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
    if (!loggedIn && to.name != "login" && to.name != "home" && to.name != "confirm" && to.name != "success" && to.name != "post-details") {
        return next("/login");
    }
    next();
    if (loggedIn && to.name == "home") {
        return next("/post/list")
    }
    if (!loggedIn && to.name == "post-details") {
        return next("/")
    }

});

export default router;