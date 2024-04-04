const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages:{
    index:{
      // 程序执行的入口
      entry:'src/main.js'
    }
  },
  // 关闭语法检查
  lintOnSave:false,
}