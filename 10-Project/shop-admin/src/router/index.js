import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "~/conposables/auth";
import { notify } from "~/conposables/util";
import { myStore } from "../store";

import Admin from '~/layout/admin.vue'
import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'

const routes = [
    {
        path: "/",
        component: Admin,
        // 子路由
        children: [
            {
                path: "index",
                component: Index,
                meta: {
                    title: "后台首页"
                }
            },
        ]
    },
    {
        path: "/login",
        component: Login,
        meta: {
            title: "登录页"
        }
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound',
        component: NotFound,
        meta: {
            title: "出错啦~"
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


// 全局前置守卫
router.beforeEach((to, from, next) => {
    const token = getToken()

    // 没有登录，强制跳转回登录页
    if (!token && to.path != "/login") {
        notify("请先登录", "error")
        return next({ path: "/login" })
    }

    // 如果用户登录了，自动获取用户信息，并存储在pinia中
    if (token) {
        const store = myStore();
        store.get_userinfo()
    }

    // 设置页面标题
    document.title = to.meta.title

    next()
})

export default router