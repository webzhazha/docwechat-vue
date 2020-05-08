import Qs from 'qs'
import axios from 'axios'

export const get = (url, params) => {
    return axios.get(url, {params}).then((response) => {
        if (response.status === 200) {
            return Promise.resolve(response.data || {})
        }
    }).catch(function (error) {
        return Promise.reject(error)
    })
}

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
