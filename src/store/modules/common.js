
const state = {
  user_info: {} // 医生信息
}

const getters = {
  user_info: state => state.user_info
}

const mutations = {
  SETUSERINFO: (state,data)=>{
    state.user_info = data
  }
}

export default {
  state,
  getters,
  mutations
}