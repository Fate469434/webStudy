const http=require('http')
const server=http.createServer()

server.on('request',(req,res)=>{
    const url=req.url
    // 设置默认响应内容为404 Not Found
    let content='404 Not Fount'
    // 判断用户请求是否为/或/indexedDB.html首页
    // 判断用户请求是否为/about.html关于页面
    if(url==='/'||url==='/index.html'){
        content='<h1>首页</h1>'
    }
    else if(url==='/about.html'){
        content='<h1>关于页面</h1>'
    }
    // 设置发送给客户端的内容的编码格式以防止中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')

    res.end(content)
})

server.listen(80,()=>{
    console.log("server running at http://127.0.0.1");
})

