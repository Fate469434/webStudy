import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "~/conposables/auth";
import { notify } from "~/conposables/util";
import { myStore } from "../store";

import Admin from '~/layout/admin.vue'
import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
import GoodList from '~/pages/goods/list.vue'
import CategoryList from '~/pages/category/list.vue'

// 默认路由，所有用户共享
const routes = [
    {
        path: "/",
        component: Admin,
        name: "admin",
        meta: {
            title: "admin"
        }
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

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [
    {
        path: "/",
        name: "/",
        component: Index,
        meta: {
            title: "后台首页"
        }
    },
    {
        path: "/goods/list",
        name: "/goods/list",
        component: GoodList,
        meta: {
            title: "商品管理"
        }
    },
    {
        path: "/category/list",
        name: "/category/list",
        component: CategoryList,
        meta: {
            title: "分类列表"
        }
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

function addRoutes(menus) {
    // 是否有新的路由
    let hasNewRoutes = false
    const findAndAddRoutesByMenus = (arr) => {
        arr.forEach(e => {
            let item = asyncRoutes.find(o => o.path == e.frontpath)
            if (item && !router.hasRoute(item.path)) {
                router.addRoute("admin", item)
                hasNewRoutes = true
            }
            if (e.child && e.child.length > 0) {
                findAndAddRoutesByMenus(e.child)
            }
        })
    }
    findAndAddRoutesByMenus(menus)
    return hasNewRoutes
}

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    // console.log("beforeEach",from.path,to.path);
    const token = getToken()

    // 没有登录，强制跳转回登录页
    if (!token && to.path != "/login") {
        notify("请先登录", "error")
        return next({ path: "/login" })
    }

    // 如果用户登录了，自动获取用户信息，并存储在pinia中
    let hasNewRoutes = false
    const store = myStore();
    if (token && !store.isHasUserInfo) {
        let { menus } = await store.get_userinfo()
        // 动态添加路由
        hasNewRoutes = addRoutes(menus)
    }

    // 设置页面标题
    document.title = to.meta.title
    hasNewRoutes ? next(to.fullPath) : next()
})


export default router