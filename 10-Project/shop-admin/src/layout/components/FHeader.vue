<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1"><eleme-filled /></el-icon>
            帝莎编程
        </span>
        <el-icon class="icon-btn"><fold /></el-icon>
        <el-icon class="icon-btn"><refresh /></el-icon>
        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn"><full-screen /></el-icon>
            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="store.user.avatar" />
                    {{ store.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>


    

<script setup>
import { myStore } from '~/store';
import { messagebox, notify } from '~/conposables/util';
import { logout } from '~/api/manager';

const store = myStore()

const handleCommand = (c)=>{
    console.log(c);
}

async function handlelogout() {
    await messagebox("是否退出登录页?")
    // 向后端发送请求
    await logout()
    // 清除用户数据
    store.user_logout()
    // 跳转回登录页
    router.push('/login')
    // 提示信息
    notify("退出登录成功")
}


</script>

<style>
.f-header{
    @apply flex items-center bg-indigo-500 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}

.logo{
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin; 
}

.icon-btn{
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover{
    @apply bg-indigo-600;
}

.f-header .dropdown{
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;
}
</style>