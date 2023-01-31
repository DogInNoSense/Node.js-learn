// 1.导入http模块
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    // req.url是客户端请求的url地址
    const url = req.url
    // req.method 是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${url}, request method is ${method}` // Your request url is /, request method is GET
    console.log(str);
    // 调用 res.end()方法,向客户端响应一些内容
    res.end(str)
})
server.listen(88,() => {
    console.log('server running at http://127.0.0.1:88');
})