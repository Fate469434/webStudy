import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "~/conposables/auth";
import { notify } from "~/conposables/util";
import { myStore } from "../store";

import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


// 全局前置守卫
router.beforeEach((to, from, next) => {
    const token = getToken("login_token")
    // 没有登录，强制跳转回登录页
    if (!token && to.path != "/login") {
        notify("请先登录", "error")
        return next({ path: "/login" })
    }

    // 如果用户登录了，自动获取用户信息，并存储在pinia中
    if (token){
        const store = myStore();
        store.get_userinfo()
    }
    
    next()
})

export default router