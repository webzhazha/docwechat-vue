module.exports = {
  productionSourceMap: false, // 生产环境不生成 sourceMap
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 7777,
      https: false,
      proxy: {
        '/cube-data/*': {
          target: 'https://wechatgate.91160.com'
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