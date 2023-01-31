// 导入 fs 模块
const fs = require('fs')


// 2.调用fs.readFile() 读取文件的内容
fs.readFile('./成绩.txt', 'utf-8', function (err, dataStr) {
    // 判断是否读取成功
    if (err) {
        return console.log('读取文件失败!' + err.message)
    }

    // console.log('读取文件成功!' + dataStr)

    // 4.1 先把成绩的数据,按照空格分割
    const arrOld = dataStr.split(' ')
    console.log(arrOld);
    // 4.2 循环分割后的数组,对每一项数据进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item => {
        // 把等号替换成 :
        arrNew.push(item.replace('=', ': '))
    })
    console.log(arrNew)
    // 4.3 把新数组的每一项进行合并,得到一个新的字符串
    // 换行
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    // 4.4 fs.writeFile() 写入到新文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败!' + err.message)
        }
        console.log('成绩写入成功');
    })
})