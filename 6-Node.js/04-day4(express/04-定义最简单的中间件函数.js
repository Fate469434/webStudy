const express=require('express')
const app=express()

// 定义最简单的中间件函数
const mw=function(req,res,next){
    console.log('这是最简单的中间件函数');
    // 把流转关系转交给下一个中间件或路由
    next()
}

// 注册全局生效的中间件
// 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
// 也就是说，哪怕服务器没写post接口，当用户发起post请求时也会触发全局中间件
app.use(mw)

// 写法二
// app.use(function(req,res,next){
//     console.log('这是最简单的中间件函数');
//     // 把流转关系转交给下一个中间件或路由
//     next()
// })

app.get('/',(req,res)=>{
    console.log('调用了/这个路由');
    res.send('Home page.')
})

app.get('/user',(req,res)=>{
    console.log('调用了/user这个路由');
    res.send('User page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})