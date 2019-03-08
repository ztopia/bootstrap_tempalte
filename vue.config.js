const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: "http://devapis.luno.id", //测试服务器
        //target: 'http://10.30.31.222:8088', //本地服务器
        ws: true,
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/mapi': '/'
        // }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: path.join(__dirname, 'src/components'),
      },
    },
  },
}
