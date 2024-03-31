const { query } = require('express')
const express=require('express')
const router=express.Router()

// 在这里挂载对应的路由
router.get('/get',(req,res)=>{
    // 获取用户端发送过来的参数
    const query=req.query
    res.send({
        status: 0,
        msg: 'GET请求成功',
        data: query

    })
})

router.post('/post',(req,res)=>{
    // 获取请求体中包含的url-encoded格式的数据
    const body=req.body

    res.send({
        status: 0,
        msg: 'POST',
        data: body
    })
})

module.exports=router