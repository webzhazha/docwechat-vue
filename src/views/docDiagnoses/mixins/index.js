export const filterTime = {
  filters: {
    filterTime(time) {
      if((new Date())>=(new Date(time.replace(/-/g, '/')))){
        return '00:00:00'
      }
      const new_date = new Date()
      const end_date = new Date(time.replace(/-/g, '/'))
      const remain_date = end_date - new_date
      // 计算出小时数
      const hours = Math.floor(remain_date / (3600 * 1000))
      // 计算相差分钟数
      const leave2 = remain_date % (3600 * 1000) // 计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000))
      // 计算相差秒数
      const leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
      const seconds = Math.round(leave3 / 1000)
      return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
    }
  }
}