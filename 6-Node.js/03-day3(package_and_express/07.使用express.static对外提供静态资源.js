const express=require('express')
const app=express()

// 调用express.static()方法快速对外提供静态资源
// 这样处理之后，只要这个服务器在运行，就可以通过http://127.0.0.1/index.html来访问时钟网页
app.use(express.static('./clock'))
// app.use(express.static('./files'))

// 当托管了多个文件时，根据托管顺序查找文件


// 如果希望用户访问某个页面时必须加上路径前缀，可以这样写
// 此时用户只能通过 http://127.0.0.1/abc/index.html 访问files里的index.html,
// 尽管实际并不存在abc路径
app.use('/abc',express.static('./files'))


app.listen(80,(req,res)=>{
    console.log('express server is running');
})