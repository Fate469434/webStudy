const express=require('express')
const app=express()

// 挂载路由
app.get('/',(req,res)=>{
    res.send('hello world.')
})

app.post('/',(req,res)=>{
    res.send('Post Request.')
})

app.listen(80,()=>{
    console.log('express server is running at 127.0.0.1:80')
})