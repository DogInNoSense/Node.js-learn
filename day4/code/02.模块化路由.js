const express = require('express')
const app = express()


// 1.导入路由模块
const router = require('./03.router')
// 2.注册路由模块
// 添加统一访问前缀api
app.use('/api', router)
// app.use()函数的作用就是 来注册全局中间件
app.listen(80, () => {
    console.log('http://127.0.0.1');
})