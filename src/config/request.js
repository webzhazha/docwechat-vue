import Qs from 'qs'
import Vue from 'vue'
import axios from 'axios'

// axios.interceptors.response.use(function(response) { // 配置请求回来的信息
//     return response
// }, function(error) {
//     return Promise.reject(error)
// })
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = axios

export const get = (url, params) => {
    return axios.get(url, { params }).then((response) => {
        if (response.status === 200) {
            return Promise.resolve(response.data || {})
        }
    }).catch(function (error) {
        return Promise.reject(error)
    })
}
// 商户app渠道
export const post = (url, params) => {
    return axios({
        url: url,
        method: 'post',
        transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data)
        }],
        data: params
    }).then((response) => {
        if (response.data.status === 200 || response.data.state === 1) {
            return Promise.resolve(response.data || {})
        } else {
            return Promise.resolve(response.data || {})
        }
    }).catch(function (error) {
        return Promise.reject(error)
    })
}
