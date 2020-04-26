

import { get } from '@/config/request'

// 获取广告位数据
const getAdvertData = params => {
  return get(`/cube-data/v1/adlist.html`, params)
}

// 获取医生端userInfo
const loginByAppToken = params => get('/user/loginByAppToken.html', params)

export default {
  getAdvertData,
  loginByAppToken
}