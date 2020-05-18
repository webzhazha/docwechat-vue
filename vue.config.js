module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue'
  : '/',
  productionSourceMap: false, // 生产环境不生成 sourceMap
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 7777,
      https: false,
      proxy: {
        '/cube-data/*': {
          target: 'https://wechatgate.91160.com',
          changeOrigin: true,
          secure: false
        },
        '/doctor_business/*': {
          target: 'http://doctorgate.91160.com',
          changeOrigin: true,
          secure: false
        }
      }
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '_assets': '@/assets',
        '_components': '@/components',
        '_views': '@/views',
        '_services': '@/services',
        '_config': '@/config'
      }
    }
  }
}