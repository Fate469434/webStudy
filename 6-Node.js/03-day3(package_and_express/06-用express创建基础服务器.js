const express = require('express')

const app = express()

app.get('/user', (req, res) => {
    // 向客户端响应一个JSON对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})

app.post('/user', (req, res) => {
    // 向客户端响应一个字符串
    res.send('请求成功')
})

app.get('/',(req,res)=>{
    // 通过req.query可以获取用户发送过来的查询参数
    // 注意: 默认情况下,req.query是一个空对象
    console.log(req.query);
    res.send(req.query)
})

// 注意：这里的 :id和:name 是动态的参数
app.get('/user/:id/:name',(req,res)=>{
    // req.params是动态匹配到的参数，默认为空对象
    console.log(req.params);
    res.send(req.params)
})

app.listen(80, () => {
    console.log('express server running at 127.0.0.1');
})
