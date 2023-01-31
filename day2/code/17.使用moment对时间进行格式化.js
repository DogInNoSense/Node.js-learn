// 1.导入需要的包
// 导入名称就是装包时候的名称

const moment = require('moment')


const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt);


// 安装指定版本的包(不用先卸载)
// npm i moment@2.22.2

// 版本号： 第一位数字： 大版本 第二位数字： 功能版本 第三位数字：bug修复版本
// 只要前面的版本号增长了,后面的版本号归0

// package.json 中记录项目中安装了哪些包 从而方便剔除 node_modules目录之后,在团队成员之间共享项目的源代码
// 注意: 今后在开发项目中,一定要把node_modules文件夹,添加到.gitignore忽略文件中