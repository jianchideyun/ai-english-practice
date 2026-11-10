App({
  globalData: {
    appName: 'AI 界面英文',
    // 结算数据通过全局变量传递，避免超长 query 字符串
    lastResult: null
  },

  onLaunch() {
    // 纯本地应用：不登录、不请求网络、不收集任何信息
  }
});
