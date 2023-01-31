// 1.1 导入fs模块
const fs = require('fs')
// 1.2 导入pasth模块
const path = require('path')

// 1.3 定义正则表达式,分别匹配<style></style> 和 <script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


// 2.1 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '../素材/index.html'), 'utf-8', function (err, dataStr) {
    if (err) return console.log('读取html文件失败!' + err.message)

    // 2.2读取文件成功后,调用对应的三个方法,分别拆解出 css,js,html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3.1 定义处理css样式的方法resolveCSS
function resolveCSS(htmlStr) {
    // 3.2使用自定义的正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1);
    // 3.3将提取出的样式字符串,进行字符串的replace替换

    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCSS);
    // 3.4调用fs.writeFile() 将提取的样式写入到 clock 目录的index.css
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
        if (err) return console.log('写入CSS样式失败!' + err.message);
        console.log('写入样式文件成功!');
    })

}

// 4.1 定义处理js脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则,提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3 将提取出来的内容做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果写入到clock目录中的index.js文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if (err) return console.log('写入JS失败!' + err.message);
        console.log('写入JS文件成功!');
    })
}


// 5.1 定义处理html结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用replace方法,把内嵌的 style 和 script 标签,替换为外联的link和script标签
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, function(err) {
        if (err) return console.log('写入 html 文件失败!' + err.message);
        console.log('写入html页面成功!');

    })
}


