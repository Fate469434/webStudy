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
  // 配置代理服务器解决跨域问题，方式一
  // devServer:{
  //   proxy:'http://localhost:5000'
  // } 
  // 配置代理服务器解决跨域问题，方式二,可以代理多个服务器
  devServer:{
    proxy:{
      '/atguigu':{
        target:'http://localhost:5000',
        pathRewrite:{'^/atguigu':''},
        ws:true, //用于支持websocket
        changeOrigin:false //代理服务器是否向它请求的服务器撒谎，为true时会撒谎说自己是5000而不是8080
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws:true, //用于支持websocket
        changeOrigin:false //代理服务器是否向它请求的服务器撒谎，为true时会撒谎说自己是5001而不是8080
      },
    }
  }
}