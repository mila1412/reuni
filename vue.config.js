module.exports = {
  publicPath:'./',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '首頁 | 任由尼甜點'
        return args
      })
  }
}