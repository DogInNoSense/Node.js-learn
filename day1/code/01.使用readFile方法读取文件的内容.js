// 1.导入 fs 模块
const fs = require('fs')

// 2.调用 fs.readFile()方法读取文件
// 参数1:读取文件的存放路径
// 参数2: 读取文件的编码格式
// 参数3: 回调函数,拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/1.txt','utf-8',function(err, dataStr){
    // 2.1打印失败的结果
    // 如果读取成功那么err的值为null
    console.log(err);

    console.log('-------');
    // 2.2 打印成功的结果(文件内容)
    console.log(dataStr);
})