import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import { buildImage } from "./mixins/index"
// 移动端自适应
import './config/rem'
// 引入vant
import './config/vant'

Vue.config.productionTip = false;

Vue.mixin(buildImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
