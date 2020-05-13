

import { get } from '@/config/request'
import { cube } from '@/config/apiHost'
// 获取广告位数据
const getAdvertData = params => {
  return get(`${cube}/v1/adlist.html`, params)
}


export default {
  getAdvertData,
}