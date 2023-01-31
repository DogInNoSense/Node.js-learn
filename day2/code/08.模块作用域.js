const username = 'Zhangsan'

// 模块内定义的成员无法被外界访问
function sayHello() {
    console.log('大家好,我是' + username);
}