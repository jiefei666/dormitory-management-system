const path = require('path')

const resolve = dir => path.join(__dirname, '.', dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true,
    port: 9000
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '学生宿舍后台管理系统' //设置网页title
      return args
    })

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })

    const addLessResource = rule => {
      rule
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [resolve('src/themes/custom.less')]
        })
    }
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addLessResource(config.module.rule('less').oneOf(type)))
  }
}
