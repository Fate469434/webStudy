// 1.导入fs模块来操作文件
const fs = require('fs')

// 2.调用fs.readFile()方法来读文件
// 参数1：读取的文件路径
// 参数2：读文件采用的编码，一般为utf8
// 参数3：回调函数，拿到读取失败和成功的结果err,dataStr
fs.readFile('./test.txt', 'utf8', function (err, dataStr) {
    // 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err);
    console.log('-------------');
    // 打印成功的结果
    console.log(dataStr);
})