// 导入 path 模块
const fs = require('fs')
const path = require('path')

// ../会抵消一级路径
// const pathStr = path.join('/a', '/b/c', '../', './d', '/e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')

fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr);
})
