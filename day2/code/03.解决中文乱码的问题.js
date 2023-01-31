// 1.导入http模块
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    // 定义一个字符串包含中文内容
    const str = `您请求的url地址是 ${req.url},请求的 method类型为 ${req.method}`
    // 设置 Content-Type响应头,解决乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})
server.listen(88, () => {
    console.log('server running at http://127.0.0.1:88')
})