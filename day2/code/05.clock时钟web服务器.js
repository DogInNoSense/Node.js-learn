const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer()
server.on('request', (req, res) => {
    // 1.获取请求的url地址
    //  /clock/index.html
    //  /clock/index.css
    //  /clock/index.js
    const url = req.url   // 路径为 /
    // 把请求的url地址映射为具体文件的存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')

    } else {
        // 如果请求路径不是 '/'
        fpath = path.join(__dirname, './clock', url)
    }
    // 根据映射过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 读取失败 响应固定的错误消息
        if (err) return res.end('404 not found');
        // 读取成功
        res.end(dataStr)
    })
})


server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})