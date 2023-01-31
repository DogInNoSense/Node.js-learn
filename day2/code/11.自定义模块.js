// 在一个自定义模块中,默认情况下 module.exports = {}
// 向 module 对象上挂载 username 属性
const age = 20


module.exports.username = 'zs'


// 向 module 对象上挂载 sayHello 方法
module.exports.sayHello = {
    function() {
        console.log('Hello');
    }
}

module.exports.age = age

// 导入的结果永远以 module.exports 指向的对象为准
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!');
    }

}