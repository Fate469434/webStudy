const http=require('http')
const server=http.createServer()

server.on('request',(req,res)=>{
    // 定义一个字符串，包含中文内容
    const str=`您请求的URL地址是${req.url},请求的method类型为${req.method}`

    // 为了防止发送给客户端的中文显示乱码，需要设置响应头Content-Type的值为text/html; charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 将内容发给客户端
    res.end(str)
})

server.listen(80,()=>{
    console.log("server running at http://127.0.0.1");
})