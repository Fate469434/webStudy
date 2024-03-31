// 这是包的入口文件
const date=require('./src/dateFormat')
const escape=require('./src/htmlEscape')
console.log(date);
console.log(escape);
module.exports = {
    ...date,
    ...escape
}
console.log(module.exports);