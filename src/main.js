import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import { buildImage } from "./mixins/index"
// 移动端自适应
import './config/rem'
// 全局公共变量
import './config/util'
// global()
// 引入vant
import './config/vant'

// 引入axios配置
import './config/axios'

Vue.config.productionTip = false;

Vue.mixin(buildImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
