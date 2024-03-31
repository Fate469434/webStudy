// console.log(exports)
// console.log(module.exports)
// console.log(exports === module.exports)结果为true

const username = 'zs'

// module.exports等同于exports
module.exports.username = username
exports.age = 20
exports.sayHello = function() {
  console.log('大家好！')
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
// 另外，最好不要在一个模块中同时使用exports和module.exports，容易发生混乱
module.exports={
  nickname: '小黑',
  sayHi: function(){
    console.log('Hi');
  }
}