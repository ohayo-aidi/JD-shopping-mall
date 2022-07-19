const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,　　//关闭组件语法检查
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false	//不显示错误
    }
  },
  lintOnSave:false //关闭eslint检查
})
