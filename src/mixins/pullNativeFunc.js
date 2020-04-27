// h5设置导航栏透明化
export const doJSAction = {
  methods: {
    doJSAction(){
      window.NativeActionProxy.doJSAction({"action":"setNavigationBarTransparent","params":{}});
    }
  }
}

// 关闭webview
export const closeWebView = {
  methods: {
    closeWebView(){
      window.NativeActionProxy.doJSAction({"action":"close","params":{}});
    }
  }
}

// 打开服务配置页
export const pullServiceConf = {
  methods: {
    pullServiceConf(){
      window.NativeActionProxy.didNativeCallback({
        android: {
          "page_clase_name":"com.ny.jiuyi160_doctor.module.consultation.ConsultationServiceSettingListActivity",
          "parameters": {}
        },
        ios: {
          "page_clase_name": "NYConsultationServeListViewController",
          "parameters": [],
          "show_type": "push"
        }
      })
    }
  }
}

// 打开医生主页
export const pullDocIndex = {
  methods: {
    pullDocIndex(docId){
      window.NativeActionProxy.didNativeCallback({
        android: {
          "page_clase_name":"com.ny.jiuyi160_doctor.activity.tab.circle.DocProfileDetailActivity",
          "parameters":  {
            "doctor_cid": docId,
            "mode": 3
            }
        },
        ios: {
          "storyboard_name": "TransferTreatment",
          "page_clase_name": "DoctorIndexViewController",
          "parameters": [
            {
            "name": "doctor_cid",
            "value": docId,
            "type": "string"
            },
            {
            "name": "type",
            "value": 2,
            "type": "number"
            }],
          "show_type": "push"
        }
      })
    }
  }
}

// 会诊订单
export const pullDiagOrder = {
  methods: {
    pullDiagOrder(orderId){
      window.NativeActionProxy.didNativeCallback({
        android: {
          "page_clase_name":"com.ny.jiuyi160_doctor.module.consultation.ConsultationOrderActivity",
          "parameters":  {
            "order_id": orderId
            }
        },
        ios: {
          "storyboard_name": "ReferralConsultation_cqw",
          "page_clase_name": "NYRefreralConsultationOrderDetailVC",
          "parameters": [
            {
            "name": "order_id",
            "value": orderId,
            "type": "string"
            }
            ],
          "show_type": "push"
        }
      })
    }
  }
}