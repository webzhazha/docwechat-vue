
// h5设置导航栏透明化
export const titleLucency = {
  methods: {
    titleLucency() {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.doJSAction({ "action": "setNavigationBarHidden", "params": {} })
      } else {
        const jsons = JSON.stringify({ "action": "setNavigationBarHidden", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      }
    }
  }
}

// 关闭webview
export const closeWebView = {
  methods: {
    closeWebView() {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.doJSAction({ "action": "close", "params": {} });
      } else {
        const jsons = JSON.stringify({ "action": "close", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      }
    }
  }
}

// 设置导航栏
export const setStatusBarColor = {
  methods: {
    setStatusBarColor(color) {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      console.log('设置背景');
      console.log(color);
      if (isIos) {
        window.NativeActionProxy.doJSAction({ "action": "setStatusBarColor", "params": {
          "color": color
        } });
      } else {
        const jsons = JSON.stringify({ "action": "setStatusBarColor", "params": {
          "color": color
        } })
        window.NativeActionProxy.doJSAction(jsons)
      }
    }
  }
}

// 打开服务配置页
export const pullServiceConf = {
  methods: {
    pullServiceConf() {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "page_clase_name": "NYConsultationServeListViewController",
            "parameters": [],
            "show_type": "push"
          }
        })
      } else {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.module.consultation.ConsultationServiceSettingListActivity",
            "parameters": []
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      }
    }
  }
}

// 打开医生主页
export const pullDocIndex = {
  methods: {
    pullDocIndex(docId) {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "storyboard_name": "ReferralConsultation_cqw",
            "page_clase_name": "NYRefreralConsultationDoctorDetailVC",
            "parameters": [{
                "name": "select_account_user_id",
                "value": docId.toString(),
                "type": "string"
              }],
            "show_type": "push"
          }
        })
      } else {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.module.consultation.ConsultationServiceExplainActivity",
            "parameters": [{
                "name": "select_account_user_id",
                "value": docId.toString(),
                "type": "String"
              }, {
                "name": "req_js_to_native",
                "value": "1",
                "type": "String"
                }
            ]
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      }
    }
  }
}

// 会诊订单
export const pullDiagOrder = {
  methods: {
    pullDiagOrder(orderId) {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "storyboard_name": "ReferralConsultation_cqw",
            "page_clase_name": "NYRefreralConsultationOrderDetailVC",
            "parameters": [{
              "name": "order_id",
              "value": orderId.toString(),
              "type": "string"
            }],
            "show_type": "push"
          }
        })
      } else {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.module.consultation.ConsultationOrderActivity",
            "parameters": [{
              "name": "order_id",
              "value": orderId.toString(),
              "type": "String"
            }, {
              "name": "req_js_to_native",
              "value": "1",
              "type": "String"
              }]
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      }
    }
  }
}

// 使用webview打开对应地址
export const pullOtherUrl = {
  methods: {
    pullOtherUrl(url) {
      if (process.env.NODE_ENV == 'development') {
        return
      }
      if (isIos) {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "page_clase_name": "NYWebViewController",
            "parameters": [
            {
            "name": "url",
            "value": url,
            "type": "url"
            }
            ],
            "show_type": "push"
          }
        })
      } else {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.activity.base.WebSameImageActivity",
            "parameters": [
              {"name": "url",
              "value": url,
              "type": "String"},
              {"name":"updateTitle",
              "value":"true",
              "type":"java.lang.Boolean"}
            ]
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      }
    }
  }
}