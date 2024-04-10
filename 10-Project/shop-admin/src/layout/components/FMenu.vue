<template>
    <div class="f-menu" :style="{width:store.asideWidth}">
        <el-menu unique-opened :default-active="defaultActive" :collapse="isCollapse" :collapse-transition="false"
         @select="handleSelect" class="border-0" >

            <template v-for="(item,index) in menus" :key="index">
                <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item v-for="(item2,index2) in item.child" :key="index2" :index="item2.frontpath">
                        <el-icon>
                            <component :is="item2.icon"></component>
                        </el-icon>
                        <span>{{ item2.name }}</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="item.frontpath">
                    <el-icon>
                         <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script setup>
import { computed ,ref } from 'vue';
import { useRouter,useRoute} from 'vue-router';
import { myStore } from '~/store';
import {storeToRefs} from 'pinia'
const router = useRouter()
const route = useRoute()
const store = myStore()

// 默认选中
const defaultActive = ref(route.path)

const isCollapse = computed(()=>{return store.asideWidth=="64px"})

const { menus } = storeToRefs(store)


const handleSelect = (path)=>{
    router.push(path)
}
</script>
<style>
.f-menu {
    transition: all 0.4s;
    width: 250px;
    top: 64px;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    @apply shadow-md fixed bg-light-50;
}
.f-menu::-webkit-scrollbar{
    width: 0;
}
</style>