module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        ws: false
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '肆拾伍度'
      return args
    })
  }
}
