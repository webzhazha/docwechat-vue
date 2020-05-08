
import { get, post } from '@/config/request'
import { doctorBus } from '@/config/apiHost'


// 获取过滤器数据
const getFilterData = (params) => {
  return get(`${doctorBus}/v1/consultation/options`,params)
}

// 获取服务大厅医生列表
const getHalldoctor = (params) => {
  return get(`${doctorBus}/v1/consultation/doctors`,params)
}

// 获取我接收的列表
const get_received_order = (params) => {
  return get(`${doctorBus}/v1/consultation/get_received_service_order_list`,params)
}

// 获取我发起的列表
const get_apply_order = (params) => {
  return get(`${doctorBus}/v1/consultation/get_apply_service_order_list`,params)
}

// 搜索接口
const get_search = (params) => {
  return get(`${doctorBus}/v1/consultation/search`,params)
}

// 会诊数据
const get_order_data = (params) => {
  return get(`${doctorBus}/v1/consultation/order_data`,params)
}

// 收藏列表
const get_collect_list = (params) => {
  return get(`${doctorBus}/v1/consultation/collect_list`,params)
}
// 取消收藏
const cancel_collect_doctor = (params) => {
  return post(`${doctorBus}/v1/consultation/multi_cancel_collect_doctor`,params)
}
// 收藏医生
const collect_doctor = (params) => {
  return post(`${doctorBus}/v1/consultation/collect_doctor`,params)
}

export default {
  getFilterData,
  getHalldoctor,
  get_received_order,
  get_apply_order,
  get_search,
  get_order_data,
  get_collect_list,
  cancel_collect_doctor,
  collect_doctor
}