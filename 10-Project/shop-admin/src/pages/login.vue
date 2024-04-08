<template>
    <div>
        <el-row class="login-container">
            <el-col :lg="16" :md="12" class="left">
                <div>
                    <div>欢迎光临</div>
                    <div>电商后台管理系统</div>
                </div>
            </el-col>
            <el-col :lg="8" :md="12" class="right">
                <h2 class="title">欢迎回来</h2>
                <div>
                    <span class="line"></span>
                    <span>账号密码登录</span>
                    <span class="line"></span>
                </div>
                <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名">
                            <template #prefix>
                                <el-icon>
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" show-password v-model="form.password" placeholder="请输入密码">
                            <template #prefix>
                                <el-icon>
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button round color="#626aef" class="w-[250px]" type="primary"
                            @click="onSubmit"
                            :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { login, getinfo } from '../api/manager';
import { useRouter } from 'vue-router';
import { setToken } from '../conposables/auth';
import { notify } from '../conposables/util';

const router = useRouter()
// 数据
const form = reactive({
    username: "admin",
    password: "admin"
})

const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        },
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        },
    ]
}

const formRef = ref()

const loading = ref(false)

// 方法
function onSubmit() {
    async function fun(valid) {
        if (!valid) { return false }
        loading.value = true
        try {
            const res = await login(form.username, form.password)
            // 提示登录成功
            notify("登陆成功")
            // 存储token
            setToken(form.username, res.token)
            // 获取用户相关信息
            const userdata = await getinfo(form.username)
            console.log(userdata);
            // 跳转到后台首页
            router.push("/")
        }
        catch (err) { }
        loading.value = false
    }

    formRef.value.validate(fun)
}

</script>

<style>
.login-container {
    @apply min-h-screen bg-indigo-500;
}

.login-container .left {
    @apply flex items-center justify-center;
}

.login-container .right {
    @apply flex items-center justify-center flex-col bg-light-50;
}

.left>div>div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}

.left>div>div:last-child {
    @apply text-gray-200 text-sm;
}

.right .title {
    @apply font-bold text-3xl text-gray-800;
}

.right>div {
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.right .line {
    @apply h-[1px] w-16 bg-gray-200;
}
</style>
