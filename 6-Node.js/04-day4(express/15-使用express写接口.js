const express=require('express')
const app=express()

// 配置解析表单数据的中间件,如果不配置这个，16-apiRouter.js里的post
// 接口的req.body为空
app.use(express.urlencoded({extended:false}))

// 跨域要在路由之前配置,这里使用了中间件解决跨域
const cors = require('cors')
app.use(cors())
// 导入路由模块
const router=require('./16-apiRouter')
// 把路由模块注册到app上
app.use('/api',router)

app.listen(80,()=>{
    console.log('Express server running at 127.0.0.1.');
})