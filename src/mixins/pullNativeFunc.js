import { getUrlParam } from '../config/util.js'

const isAnd = getUrlParam('cid') == '100000001'
const isIos = getUrlParam('cid') == '100000002'

// h5设置导航栏透明化
export const titleLucency = {
  methods: {
    titleLucency() {
      if (isIos) {
        window.NativeActionProxy.doJSAction({ "action": "setNavigationBarTransparent", "params": {} })
      } else {
        const jsons = JSON.stringify({ "action": "setNavigationBarTransparent", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      }
    }
  }
}

// 关闭webview
export const closeWebView = {
  methods: {
    closeWebView() {
      if (isIos) {
        window.NativeActionProxy.doJSAction({ "action": "close", "params": {} });
      } else {
        const jsons = JSON.stringify({ "action": "close", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      }
    }
  }
}

// 打开服务配置页
export const pullServiceConf = {
  methods: {
    pullServiceConf() {
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
      if (isIos) {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "storyboard_name": "TransferTreatment",
            "page_clase_name": "DoctorIndexViewController",
            "parameters": [{
                "name": "doctor_cid",
                "value": docId.toString(),
                "type": "string"
              },
              {
                "name": "type",
                "value": 2,
                "type": "number"
              }
            ],
            "show_type": "push"
          }
        })
      } else {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.activity.tab.circle.DocProfileDetailActivity",
            "parameters": [{
                "name": "doctor_cid",
                "value": docId.toString(),
                "type": "String"
              },
              {
                "name": "mode",
                "value": 3,
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
            }]
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      }
    }
  }
}