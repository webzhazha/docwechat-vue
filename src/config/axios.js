import Vue from 'vue'
import axios from 'axios'

function addParamsToUrl(config, name, value) {
  if (config.url.indexOf('?') > -1) {
    config.url += '&' + name + '=' + value
  } else {
    config.url += '?' + name + '=' + value
  }
  return config
}
// 配置发送信息
axios.interceptors.request.use(function (config) {
  addParamsToUrl(config, 'user_key', user_key)
  addParamsToUrl(config, 'cid', cid)
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = axios