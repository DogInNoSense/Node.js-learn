const express = require('express')
const app = express()


// 调用express.static() 方法,快速的提供静态资源
app.use('/files', express.static('./files'))

// 托管多个静态资源目录
app.use(express.static('./clock'))
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})