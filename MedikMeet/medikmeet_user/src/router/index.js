import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/common/LogIn.vue'

Vue.use(VueRouter);


const routes = [
    {
        path: "/",
        name: "LogIn",
        component: Login
    },
    {
        path: '/register',
        name: 'SignUp',
        component: () =>
            import ('../views/common/SignUp.vue')
    },
];

const router = new VueRouter({
    mode: "history",
    base: 'http://localhos8081',
    routes,
});

export default router;