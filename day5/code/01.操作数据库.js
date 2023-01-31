// 1.导入 mysql 模块
const { CLIENT_MULTI_RESULTS } = require('mysql/lib/protocol/constants/client')
const mysql = require('mysql2')
// 2.建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',   // 数据库的 ip 地址
    user: 'root', // 登录数据库的账号
    password: '1234', // 登录数据库的密码
    database: 'my_db_01' // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
// db.query('select 1',(err,results) => {
//     // mysql 模块工作期间报错了
//     if(err) return console.log(err.message)
//     // 能够执行sql语句
//     console.log(results);
// })




// // 查询 user 表中所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err,results) => {
//     // 查询数据失败
//     if(err) return console.log(err.message)
//     // 查询数据成功
//     console.log(results);
// })


// // 向 users 表中,新增一条数据,其中username的值为 Spider-Man , password 的值 为 pcc123
// const user = { username: 'Spider-Man', password: 'pcc123' }
// // 定义待执行的sql语句
// const sqlStr = 'insert into users (username, password) values (?, ?)'

// // 执行sql语句
// db.query(sqlStr, [user.username, user.password],(err, results) => {
//     // 执行sql语句失败了
//     if(err) return console.log(err.message)
//     // 成功了
//     // 注意:如果执行的是 insert into 插入语句,则 results 是一个对象
//     // 可以通过affectedRows 属性,来判断是否插入数据成功
//     if(results.affectedRows == 1) {
//         console.log('插入数据成功!');
//     }
// })


// // 演示插入数据的便捷方式
// const user = { username: 'Spider-Man3', password: 'pcc4321' }
// // 定义待执行的sql语句
// const sqlStr = 'insert into users set ?'
// // 执行sql语句
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })


// // 演示如何更新用户的信息
// const user = { id: 6, username: 'xyz', password: '000' }

// // 定义SQL语句
// const sqlStr = 'update users set username=?, password=? where id=?'
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affected === 1) {
//         console.log('更新成功!');
//     }
// })


// // 演示更新数据的便捷方式
// const user = { id: 6, username: 'xyzzz', password: '000' }
// // 定义SQL语句
// const sqlStr = 'update users set ? where id=?'
// // 执行sql语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1) {
//         console.log('更新数据成功!');
//     }
// })



// // 删除 id 为 5 的用户
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 5, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('删除数据成功!');
//     }
// })



// 标记删除

const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log('标记删除成功!');
    }
})


