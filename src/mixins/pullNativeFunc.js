import { getUrlParam } from '../config/util.js'

const isIos = getUrlParam('cid') == '100000001'
const isAnd = getUrlParam('cid') == '100000002'

// h5设置导航栏透明化
export const titleLucency = {
  methods: {
    titleLucency() {
      if (isAnd) {
        const jsons = JSON.stringify({ "action": "setNavigationBarTransparent", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      } else {
        window.NativeActionProxy.doJSAction({ "action": "setNavigationBarTransparent", "params": {} })
      }
    }
  }
}

// 关闭webview
export const closeWebView = {
  methods: {
    closeWebView() {
      if (isAnd) {
        const jsons = JSON.stringify({ "action": "close", "params": {} })
        window.NativeActionProxy.doJSAction(jsons)
      } else {
        window.NativeActionProxy.doJSAction({ "action": "close", "params": {} });
      }
    }
  }
}

// 打开服务配置页
export const pullServiceConf = {
  methods: {
    pullServiceConf() {
      if (isAnd) {
        const obj = {
          "android": {
            "page_clase_name": "com.ny.jiuyi160_doctor.module.consultation.ConsultationServiceSettingListActivity",
            "parameters": []
          }
        }
        const jsons = JSON.stringify(obj)
        window.NativeActionProxy.callbackNativeFunc(jsons)
      } else {
        window.NativeActionProxy.callbackNative({
          "ios": {
            "page_clase_name": "NYConsultationServeListViewController",
            "parameters": [],
            "show_type": "push"
          }
        })
      }
    }
  }
}

// 打开医生主页
export const pullDocIndex = {
  methods: {
    pullDocIndex(docId) {
      if (isAnd) {
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
      } else {
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
      }

    }
  }
}

// 会诊订单
export const pullDiagOrder = {
  methods: {
    pullDiagOrder(orderId) {
      if (isAnd) {
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
      } else {
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
      }
    }
  }
}