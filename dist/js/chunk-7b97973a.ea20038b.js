(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b97973a"],{5060:function(t,c,o){"use strict";var s=o("f623"),e=o.n(s);e.a},dc03:function(t,c,o){"use strict";o.r(c);var s=function(){var t=this,c=t.$createElement,o=t._self._c||c;return o("div",[o("div",{staticClass:"hallDocItem",on:{click:t.goNativeDoc}},[o("div",{staticClass:"backgroundimg doc_img mr16 mt20",style:t.generateImageUrl(t.docItem.image,"/wechat/img/familyActivity/doctorAvatar.png")}),o("div",{staticClass:"relative flex1 pt20 pb20 bt_gray"},[o("div",{staticClass:"mb3"},[o("span",{staticClass:"fs18 c333 typo_bold mr6 inBlo elli max_w100"},[t._v(t._s(t.docItem.doctor_name))]),o("span",{staticClass:"fs14 c666 typo_bold inBlo elli w90 mb1"},[t._v(t._s(t.docItem.zc_name))])]),o("div",{staticClass:"fs14 c999 typo_bold mb15 "},[t._v(" "+t._s(t.docItem.unit_name)+" ")]),t.docItem.ill_names&&t.docItem.ill_names.length>0?o("div",{staticClass:"illness"},t._l(t.docItem.ill_names,(function(c){return o("span",{key:c},[t._v(t._s(c))])})),0):t._e(),o("div",[o("span",{staticClass:"price typo_bold"},[t._v("￥"+t._s(t.docItem.price))]),t.docItem.city_area?o("span",{staticClass:"c999"},[o("i",{staticClass:"iconfont c_ccc"},[t._v("")]),t._v(" "+t._s(t.docItem.city_area))]):t._e()]),t.isHall?[0==t.docItem.is_followed?o("div",{staticClass:"collect",on:{click:function(c){return c.stopPropagation(),t.collect(t.docItem.doctor_id)}}},[o("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 收藏 ")]):t._e(),1==t.docItem.is_followed?o("div",{staticClass:"collect yet"},[t._v(" 已收藏 ")]):t._e()]:t._e()],2)])])},e=[],i=o("1601"),a=o("dde5"),l={mixins:[i["d"]],props:{isHall:{type:[Boolean],default:!0},docItem:{type:[Object],default:function(){}}},data:function(){return{}},methods:{goNativeDoc:function(){this.pullDocIndex(this.docItem.account_user_id)},collect:function(t){var c=this;a["a"].docDiagnoses.collect_doctor({doctor_id:t}).then((function(t){console.log(t),1==t.result_code?c.docItem.is_followed=1:c.$toast("收藏失败")}))}}},n=l,d=(o("5060"),o("2877")),_=Object(d["a"])(n,s,e,!1,null,"1c161596",null);c["default"]=_.exports},f623:function(t,c,o){}}]);