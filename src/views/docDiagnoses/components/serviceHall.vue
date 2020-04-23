<template>
  <div>
    <div class="search">
      <i class="iconfont mr10">&#xe725;</i>
      <span>搜索医生以及诊疗服务</span>
    </div>
    <div class="mb25">
      <CommonBanner id="25"/>
    </div>
    <van-sticky :offset-top="45">
      <div class="hall_tab pl15 bg_white">
        <div class="typo_black fs16 typo_bold">医生会诊</div>
      </div>
      <DiagFilterBar />
    </van-sticky>
    
    <div v-for="item in docList" :key="item">
      <HallDocItem />
    </div>
  </div>
</template>
<script>
const CommonBanner = () => import('@/components/commonBanner')
const DiagFilterBar = () => import('../components/diagFilterBar')
const HallDocItem = () => import('../components/hallDocItem')
export default {
  data() {
    return {
      active: 0,
      docList: [1,2,3,4,5]
    }
  },
  components: { CommonBanner, DiagFilterBar, HallDocItem }
}
</script>
<style lang="scss" scoped>
.hall_tab {
  height: 1.173333rem;
  line-height: 1.173333rem;
}
  .search {
    height: .906667rem;
    width: 9.2rem;
    background-color: #eee;
    border-radius: .906667rem;
    margin-left: .4rem;
    line-height: .906667rem;
    margin-top: .373333rem;
    margin-bottom: .32rem;
    padding-left: .4rem;
  }
</style>