import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from "./route/index.js";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory("/"),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

createApp(App)
    .use(router)
    .mount('#app')