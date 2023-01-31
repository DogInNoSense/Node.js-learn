const fs = require('fs')

// 出现路径错误, 是因为提供了 ./ 或 ../ 开头的相对路径
// 如果解决这个问题, 可以直接提供 一个完整的文件存放路径


// fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败!' + err.message);
//     }
//     console.log('读取文件成功!' + dataStr);
// })

// 移植性非常差,不利于维护
// fs.readFile('E:\\Code\\Node.js-basic\\day1\\code\\files\\1.txt', 'utf-8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败!' + err.message);
//     }
//     console.log('读取文件成功!' + dataStr);
// })

// __dirname 表示当前文件所处的目录

// console.log(__dirname);

fs.readFile(__dirname + '/files/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败!' + err.message);
    }
    console.log('读取文件成功!' + dataStr);
})
