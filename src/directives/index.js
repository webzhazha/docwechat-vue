import Vue from 'vue'

// 初始化自定义指令 页面头部
Vue.directive('title', (el, binding) => {
  if (el.dataset.title) {
    document.title = el.dataset.title
  }
})
