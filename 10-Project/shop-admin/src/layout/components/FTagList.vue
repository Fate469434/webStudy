<template>
    <div class="f-tag-list" :style="{ left: store.asideWidth }">

        <el-tabs v-model="activeTab" type="card" class="flex-1" @tab-remove="removeTab" style="min-width:100px;"
            @tab-change="changeTab">
            <el-tab-pane :closable="item.path != '/index'" v-for="item in tabList" :key="item.path" :label="item.title"
                :name="item.path"></el-tab-pane>
        </el-tabs>

        <span class="tag-btn">
            <el-dropdown @command="handleClose">
                <span class="el-dropdown-link">
                    <el-icon>
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="clearOther">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="clearAll">全部关闭</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </span>
    </div>
    <div style="height:44px;"></div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies'
// import router from '../../router';
import { myStore } from '~/store'
const store = myStore()
const router = useRouter()
const route = useRoute()
const cookie = useCookies()

const activeTab = ref(route.path)
const tabList = ref([
    {
        title: '后台首页',
        path: "/index"
    },
    {
        title: '商城管理',
        path: "/goods/list"
    },
])

// 初始化标签导航列表
function initTabList() {
    let tbs = cookie.get("tabList")
    if (tbs) {
        tabList.value = tbs
    }
}

initTabList()

// 添加标签导航
function addTab(tab) {
    let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1
    if (noTab) {
        tabList.value.push(tab)
    }

    cookie.set("tabList", tabList.value)
}

// 路由发生变化时切换选中的标签页
onBeforeRouteUpdate((to, from) => {
    // console.log("onBeforeRouteUpdate",from.path,to.path);
    activeTab.value = to.path
    addTab({
        title: to.meta.title,
        path: to.path
    })
})

// 选中标签页改变时
const changeTab = (t) => {
    activeTab.value = t
    router.push(t)
}

// 关闭某个标签页
const removeTab = (t) => {
    let tabs = tabList.value
    let a = activeTab.value
    if (a == t) {
        tabs.forEach((tab, index) => {
            if (tab.path == t) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    a = nextTab.path
                }
            }
        })
    }

    activeTab.value = a
    router.push(a)
    tabList.value = tabList.value.filter(tab => tab.path != t)

    cookie.set("tabList", tabList.value)
}

// 关闭其他标签、关闭所有标签
const handleClose = (c) => {
    if (c == "clearAll") {
        // 切换回首页
        activeTab.value = "/index"
        // 过滤只剩下首页
        tabList.value = [{
            title: '后台首页',
            path: "/index"
        }]
    } else if (c == "clearOther") {
        // 过滤只剩下首页和当前激活
        tabList.value = tabList.value.filter(tab => tab.path == "/index" || tab.path == activeTab.value)
    }
    cookie.set("tabList", tabList.value)
}
</script>

<style scoped>
.f-tag-list {
    @apply fixed bg-gray-100 flex items-center px-2;
    transition: all 0.2s;
    top: 64px;
    right: 0;
    height: 44px;
    z-index: 100;
}

.tag-btn {
    @apply bg-white rounded ml-auto flex items-center justify-center px-2;
    height: 32px;
}

:deep(.el-tabs__header) {
    @apply mb-0;
}

:deep(.el-tabs__nav) {
    border: 0 !important;
}

:deep(.el-tabs__item) {
    border: 0 !important;
    height: 32px;
    line-height: 32px;
    @apply bg-white mx-1 rounded;
}

:deep(.el-tabs__nav-next),
:deep(.el-tabs__nav-prev) {
    line-height: 32px;
    height: 32px;
}

:deep(.is-disabled) {
    cursor: not-allowed;
    @apply text-gray-300;
}
</style>