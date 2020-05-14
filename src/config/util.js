

// 全局导入参数
  window.isAnd = navigator.userAgent.includes('Android')

  window.isIos = navigator.userAgent.includes('iPhone')

  window.cid = isAnd ? '100000001' : '100000002'

  window.user_key = process.env.NODE_ENV == 'production' ? window.TokenNativeActionProxy.getAccessToken() : '0928c131c5db47dd4cbc9ca70f42ff7cw5unp8Xd20200603220353'

// 赋值window刷新方法
window.webViewWillAppear = (params)=>{
  // window.location.reload()
}

// 获取url参数
export const getUrlParam = pname => {
  var index = location.href.indexOf('?')
  var params = location.href.substr(index + 1) // 获取参数 平且去掉？
  var ArrParam = params.split('&')
  // 多个参数参数的情况
  for (var i = 0; i < ArrParam.length; i++) {
    if (ArrParam[i].split('=')[0] == pname) {
      return ArrParam[i].substr(ArrParam[i].indexOf('=') + 1)
    }
  }
}
