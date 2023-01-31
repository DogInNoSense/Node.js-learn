// 导入数据库模块
const db = require('../db/index')
// 导入 bcryptjs ：
const bcrypt = require('bcryptjs')
// 导入生成 token 的包
const jwt = require('jsonwebtoken')
// 导入全局的配置文件
const config = require('../config')


// 注册新用户的处理函数
exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    // 接收表单数据
    const userinfo = req.body
    // 判断数据是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({ status: 1, message: '用户名或密码不能为空！' })
    // }

    // 定义sql语句 查询用户名是否被占用(用户名查重操作)
    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            // return res.send({ status: 1, message: err.message })
            return res.cc(err)
        }
        // 用户名被占用
        if (results.length > 0) {
            // return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
            return res.cc('用户名被占用，请更换其他用户名！')
        }
        // TODO: 用户名可用，继续后续流程...
        // console.log(userinfo)
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        // console.log(userinfo)

        // 定义插入用户的 SQL 语句：
        const sql = 'insert into ev_users set ?'
        // 调用 db.query() 执行 SQL 语句，插入新用户：
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
            // 执行 SQL 语句失败
            // if (err) return res.send({ status: 1, message: err.message })
            if (err) return res.cc(err)
            // SQL 语句执行成功，但影响行数不为 1
            // if (results.affectedRows !== 1) {
            //     return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
            // }
            if (results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试！')
            // 注册成功
            // res.send({ status: 0, message: '注册成功！' })
            res.cc('注册成功! ', 0)
        })
    })
}

exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body
    // 定义 sql 语句
    const sql = `select * from ev_users where username=?`
    // 执行 sql 语句,根据用户名查询用户的信息
    db.query(sql, userinfo.username, (err, results) => {
        // 执行 sql 语句失败了
        if (err) return res.cc(err)
        // 执行 sql 语句 成功了,但是获取到的数据条数不等于1
        if (results.length !== 1) return res.cc('登陆失败! ')
        // TODO: 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) return res.cc('登录失败! ')


        //  TODO: 在服务器端生成 token 的字符串
        // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
        const user = { ...results[0], password: '', user_pic: '' }
        // 对用户的信息进行加密,生成 token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn})
        console.log(tokenStr);
        // 调用 res.send 将 token 响应给客户端
        res.send({
            status: 0,
            message: '登录成功 ',
            token: 'Bearer ' + tokenStr,
        })
        // res.send('ok')
    })
}