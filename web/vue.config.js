// vue.config.js
module.exports = {
//   css: {
//     extract: true,
//   },
  devServer: {
    disableHostCheck: true,
    port: 8081,
    proxy: {
      "/api/v1/web": {
        // target: "http://nevergiveupt.top", // 代理到线上
        target: "http://127.0.0.1:7002", // 代理到后台本地启动
        ws: false,
        changeOrigin: true, //是否跨域
      },
    },
    overlay: {
      warnings: false, //不显示警告
      errors: false, //不显示错误
    },
  },
  lintOnSave: false, //关闭eslint检查
};