

// 全局导入参数
  window.isAnd = navigator.userAgent.includes('Android')

  window.isIos = navigator.userAgent.includes('iPhone')

  window.cid = isAnd ? '100000001' : '100000002'

  window.user_key = process.env.NODE_ENV == 'production' ? window.TokenNativeActionProxy.getAccessToken() : '467cf5188e5cf1a62e4cfcc9e830daebrNSVWSOb20200527162514'

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

// 