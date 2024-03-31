const express=require('express')
const app=express()

// 1.导入路由模块
const router=require('./03-router')
// 2.注册路由模块
app.use(router)

// 添加路径前缀
// app.use('/api',router)

// app.use(express.static('./files'))
// 注意：app.use()的作用是注册全局中间件

app.listen(80,()=>{
    console.log('127.0.0.1');
})