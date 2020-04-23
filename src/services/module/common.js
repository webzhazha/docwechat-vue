

import { get } from '@/config/request'

const getAdvertData = params => {
  return get(`/cube-data/v1/adlist.html`, params)
}

export default {
  getAdvertData
}