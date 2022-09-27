export default defineAppConfig({
  pages: [
    'pages/upload/index', 'pages/echarts/index', 'pages/webview/index', 'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents'
})
