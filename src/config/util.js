

// 全局导入参数
export const global = ()=>{

  window.isAnd = navigator.userAgent.includes('Android')

  window.isIos = navigator.userAgent.includes('iPhone')

  window.cid = isAnd ? '100000001' : '100000002'

  window.user_key = process.env.NODE_ENV == 'production' ? window.TokenNativeActionProxy.getAccessToken() : '6c00fca0c721512ac10f24cd7060c37bHOqp1gYI20200518143138'
}

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