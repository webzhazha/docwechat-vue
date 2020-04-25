
import { get, post } from '@/config/request'

const user_key = '7020bbf98d296117fd85ec52401d1070gtewTque20200511153356'

// 获取过滤器数据
const getFilterData = (params) => {
  return get(`/doctor_business/v1/consultation/options?user_key=${user_key}`,params)
}

// 获取服务大厅医生列表
const getHalldoctor = (params) => {
  return get(`/doctor_business/v1/consultation/doctors?user_key=${user_key}`,params)
}

// 获取我接收的列表
const get_received_order = (params) => {
  return get(`/doctor_business/v1/consultation/get_received_service_order_list?user_key=${user_key}`,params)
}

// 获取我发起的列表
const get_apply_order = (params) => {
  return get(`/doctor_business/v1/consultation/get_apply_service_order_list?user_key=${user_key}`,params)
}

// 搜索接口
const get_search = (params) => {
  return get(`/doctor_business/v1/consultation/search?user_key=${user_key}`,params)
}

// 会诊数据
const get_order_data = (params) => {
  return get(`/doctor_business/v1/consultation/order_data?user_key=${user_key}`,params)
}

// 收藏列表
const get_collect_list = (params) => {
  return get(`/doctor_business/v1/consultation/collect_list?user_key=${user_key}`,params)
}
// 取消收藏
const cancel_collect_doctor = (params) => {
  return post(`/doctor_business/v1/consultation/multi_cancel_collect_doctor`,params)
}

export default {
  getFilterData,
  getHalldoctor,
  get_received_order,
  get_apply_order,
  get_search,
  get_order_data,
  get_collect_list,
  cancel_collect_doctor
}