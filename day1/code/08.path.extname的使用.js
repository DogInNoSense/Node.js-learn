// 获取路径中的文件后缀名

const path = require('path')
// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext);  // .html