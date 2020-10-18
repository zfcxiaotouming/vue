module.exports = {
    publicPath: '/app/static',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          changeOrigin:true
        }
      }
    }
  }