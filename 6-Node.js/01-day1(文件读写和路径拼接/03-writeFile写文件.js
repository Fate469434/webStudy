// 导入fs文件系统模块
const fs=require('fs')

// 参数1 文件的存放路径,如果不存在则创建
// 参数2 要写入的内容
// 参数3 回调函数
fs.writeFile('./test2.txt','abcd',function(err){
    // 文件写入成功则err值为null
    // 文件写入失败则err的值为一个错误对象
    // console.log(err);

    if(err){
        return console.log('文件写入失败');
    }
    console.log('文件写入成功');
})
