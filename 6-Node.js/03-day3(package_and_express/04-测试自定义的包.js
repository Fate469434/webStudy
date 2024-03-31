const mp=require('./my-package')

// 格式化时间的功能
const dtStr=mp.dateFormat(new Date())
console.log(dtStr);

const htmlstr='<h1>这是h1标签</h1>'
const str=mp.htmlEscape(htmlstr)
console.log(str);
