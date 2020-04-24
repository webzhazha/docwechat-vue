
import { get } from '@/config/request'

// 获取过滤器数据
const getFilterData = (params) => {
  return get('/doctor_business/v1/consultation/options',params)
}

// 获取服务大厅医生列表
const getHalldoctor = (params) => {
  return get('/doctor_business/v1/consultation/doctors',params)
}

export default {
  getFilterData,
  getHalldoctor
}