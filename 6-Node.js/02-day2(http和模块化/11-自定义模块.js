// 在一个自定义模块中，默认情况下，module.exports={}

// 使本模块的成员暴露出来，其他模块也可以访问
module.exports.username='zs'
module.exports.sayHello=function(){
    console.log("Hello, I'm zs");
}
const age=20
module.exports.age=age