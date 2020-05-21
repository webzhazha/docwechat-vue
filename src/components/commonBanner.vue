<template>
  <div class="pl15 pr15" v-if="bannerAdList && bannerAdList.length>0">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="item in bannerAdList" :key="item.ad_id">
        <a href="javascript:;" @click="goAd(item.url)">
          <img :src="IMAGESDOMAIN + item.image" alt="" class="">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { pullOtherUrl } from '@/mixins/pullNativeFunc'
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
  mixins: [pullOtherUrl],
  mounted() {
    this.getBannerAdList()
  },
  methods: {
    goAd(url){
      if(url){
        this.pullOtherUrl(url)
      }
    },
    _getAdvertData(params){
      return service.common.getAdvertData(params)
    },
    getBannerAdList(){
      this._getAdvertData({
        location_id: this.id
      }).then(res=>{
        this.bannerAdList = res.data[this.id].slice(0,1)
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .my-swipe {
    border-radius: .213333rem;
  }
  .my-swipe /deep/ .van-swipe__track {
      height: 2.4rem;
    }
  .my-swipe {
    img {
      border-radius: .106667rem;
    }
  }
</style>