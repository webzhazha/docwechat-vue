<template>
  <div class="pl15 pr15" v-if="bannerAdList && bannerAdList.length>0">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="90">
      <van-swipe-item v-for="item in bannerAdList" :key="item.ad_id">
        <a :href="item.url ? item.url : 'javascript:;'">
          <img :src="IMAGESDOMAIN + item.image" alt="" class="w345">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import service from '../services/index'
export default {
  data() {
    return {
      bannerAdList: []
    }
  },
  props: {
    id: {
      type: [String, Number],
      default: ''
    }
  },
  mounted() {
    this.getBannerAdList()
  },
  methods: {
    _getAdvertData(params){
      return service.common.getAdvertData(params)
    },
    getBannerAdList(){
      this._getAdvertData({
        location_id: this.id
      }).then(res=>{
        console.log(787967);
        
        console.log(res);
        this.bannerAdList = res.data[this.id]
        console.log(this.bannerAdList);
        
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .my-swipe {
    border-radius: .213333rem;
  }
</style>