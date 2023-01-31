// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()
// 4.监听客户端的 GET 和 POST 请求,并向客户端响应具体的内容
// http://127.0.0.1:88/user
app.get('/user', (req, res) => {
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    // 调用 express提供的res.send()方法,向客户端响应一个 文本字符串
    res.send('请求成功')
})

// 3.启动web服务器
app.listen(88, () => {
    console.log('express server running at http://127.0.0.1:88');
})


app.get('/', (req, res) => {
    // 通过req.query 可以获取到客户端发送过来的 查询参数
    // 注意:默认情况下 req.query是一个空对象

    // http://127.0.0.1:88/?name=zs&age=20
    console.log(req.query);
    res.send(req.query)
})

// 注意: 这里的 :id 是一个的动态的参数
app.get('/user/:id', (req, res) => {
    // req.params是动态匹配的url参数,默认也是一个空对象
    // http://127.0.0.1:88/user/1
    // { id: '1' }
    console.log(req.params);
    res.send(req.params)
})

app.get('/user/:id/:name', (req, res) => {
    // req.params是动态匹配的url参数,默认也是一个空对象
    // http://127.0.0.1:88/user/1/zs
    // {"id":"1","name":"zs"}
    console.log(req.params);
    res.send(req.params)
})