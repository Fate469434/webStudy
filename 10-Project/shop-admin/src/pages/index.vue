<template>
    后台首页
    <el-button @click="set">设置</el-button>
    <el-button @click="get">读取</el-button>
    <el-button @click="del">删除</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCookies } from '@vueuse/integrations/useCookies'
const router = useRouter()
const cookie = useCookies()

function set(){
    cookie.set('admin-token',"123456")
}
function get(){
    console.log(cookie.get('admin-token'));
}
function del(){
    // cookie.set('admin-token',"123456")
    cookie.remove('admin-token')
}


</script>

<style></style>