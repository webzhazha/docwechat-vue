(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e8e1842"],{"6a95":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"diagFilterBar"},[i("van-dropdown-menu",[i("van-dropdown-item",{ref:"area",attrs:{title:e.areaName,max:"1"},on:{open:e.openDrop,close:e.closeDrop}},[i("van-tree-select",{attrs:{items:e.areaList,"active-id":e.areaId,"main-active-index":e.cityIndex},on:{"update:activeId":function(t){e.areaId=t},"update:active-id":function(t){e.areaId=t},"update:mainActiveIndex":function(t){e.cityIndex=t},"update:main-active-index":function(t){e.cityIndex=t},"click-item":e.onClickArea}})],1),i("van-dropdown-item",{ref:"dep",attrs:{title:e.depName,max:"1"},on:{open:e.openDrop,close:e.closeDrop}},[i("van-tree-select",{attrs:{items:e.depList,"active-id":e.depId,"main-active-index":e.maindepIndex},on:{"update:activeId":function(t){e.depId=t},"update:active-id":function(t){e.depId=t},"update:mainActiveIndex":function(t){e.maindepIndex=t},"update:main-active-index":function(t){e.maindepIndex=t},"click-item":e.onClickDep}})],1),i("van-dropdown-item",{attrs:{options:e.sort_type,max:"1"},on:{open:e.openDrop,close:e.closeDrop},model:{value:e.priceId,callback:function(t){e.priceId=t},expression:"priceId"}})],1)],1)},n=[],d=(i("4160"),i("159b"),i("dde5")),c={data:function(){return{areaId:"",areaName:"地区",cityIndex:-1,areaList:[],depId:"",depName:"科室",maindepId:"",maindepIndex:-1,depList:[],priceId:0,sort_type:[]}},mounted:function(){this._getFilterData()},methods:{_getFilterData:function(){var e=this;d["a"].docDiagnoses.getFilterData().then((function(t){console.log(t),t.data.city.forEach((function(t){var i=[];t.children&&t.children.length>0&&t.children.forEach((function(e){i.push({text:e.areaName,id:e.areaId})})),e.areaList.push({text:t.areaName,id:t.areaId,children:i})})),t.data.cat.forEach((function(t){var i=[];t.childList&&t.childList.length>0&&t.childList.forEach((function(e){i.push({text:e.catname,id:e.catNo})})),e.depList.push({text:t.catname,id:t.catNo,children:i})})),e.sort_type=t.data.sort_type}))},onClickArea:function(e){this.$refs.area.toggle(),e.id?this.areaName=e.text:this.areaName=this.areaList[this.cityIndex].text},onClickDep:function(e){this.$refs.dep.toggle(),e.id?this.depName=e.text:this.depName=this.depList[this.maindepIndex].text,this.maindepId=this.depList[this.maindepIndex].id},openDrop:function(){this.$emit("scrollToTop")},closeDrop:function(){var e={city_id:this.areaId,cat_no1:this.maindepId,cat_no2:this.depId,sort_type:this.priceId};this.$emit("update",e)}}},o=c,r=(i("7db3"),i("2877")),s=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=s.exports},"7db3":function(e,t,i){"use strict";var a=i("fd30"),n=i.n(a);n.a},fd30:function(e,t,i){}}]);