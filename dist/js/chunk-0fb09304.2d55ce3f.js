(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fb09304"],{"6a75":function(t,n,e){},"8d14":function(t,n,e){"use strict";var a=e("6a75"),i=e.n(a);i.a},fcbd:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.bannerAdList&&t.bannerAdList.length>0?e("div",{staticClass:"pl15 pr15"},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerAdList,(function(n){return e("van-swipe-item",{key:n.ad_id},[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.goAd(n.url)}}},[e("img",{attrs:{src:t.IMAGESDOMAIN+n.image,alt:""}})])])})),1)],1):t._e()},i=[],r=(e("a9e3"),e("1601")),s=e("dde5"),d={data:function(){return{bannerAdList:[]}},props:{id:{type:[String,Number],default:""}},mixins:[r["d"]],mounted:function(){this.getBannerAdList()},methods:{goAd:function(t){t&&this.pullOtherUrl(t)},_getAdvertData:function(t){return s["a"].common.getAdvertData(t)},getBannerAdList:function(){var t=this;this._getAdvertData({location_id:this.id}).then((function(n){t.bannerAdList=n.data[t.id]}))}}},c=d,o=(e("8d14"),e("2877")),u=Object(o["a"])(c,a,i,!1,null,"a5664e2c",null);n["default"]=u.exports}}]);