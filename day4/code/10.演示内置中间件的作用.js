const express = require('express')
const app = express()


// 注意:除了错误级别的中间件,其他的中间件 必须在路由之前进行配置

// 通过 express.json() 这个中间件 解析表中的 JSON 格式的数据
app.use(express.json())
// 通过express.urlencoded()这个中间件来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {

    // 默认情况下 如果不配置解析表单数据的中间件 则req.body默认等于 undefined
    console.log(req.body);
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务端 可以通过 req,body 来获取 JSON 格式的表单数据和url-encoded格式的数据
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('run at http://127.0.0.1');
})