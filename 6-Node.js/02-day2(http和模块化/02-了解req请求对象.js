const http = require('http')
const server = http.createServer()

// req是请求对象，它包含了与客户端相关的数据和属性，例如:
// req.url是客户端请求的URL地址
// req.method是客户端的method请求类型
server.on('request', (req,res) => {
  const url = req.url
  const method = req.method
  const str = `Your request url is ${url},and request method is ${method}`
  console.log(str);

  // res.end可以像客户端响应一些内容
  res.end(str)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})