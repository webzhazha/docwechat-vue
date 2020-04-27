<template>
  <div class="docDiagnoses">
    <!-- 顶部 -->
    <div class="nav textc typo_white">
      <span class="absolute left10" @click="closeWebView">
        <i class="iconfont fs18 lh44">&#xe688;</i>
      </span>
      <span class="fs18 typo_bold lh44">转诊/会诊</span>
    </div>
    <div class="top_icon">
      <div class="top_icon_inner">
        <div class="textc flex1" @click="goMyCollect">
          <img src="./image/top_icon_1.png" alt="" class="mb20">
          <div class="fs14 typo_white">我的收藏</div>
        </div>
        <div class="textc flex1" @click="goDiagData">
          <img src="./image/top_icon_2.png" alt="" class="mb20">
          <div class="fs14 typo_white">会诊数据</div>
        </div>
        <div class="textc flex1" @click="goConfig">
          <img src="./image/top_icon_3.png" alt="" class="mb20">
          <div class="fs14 typo_white">服务配置</div>
        </div>
        <div class="textc flex1" @click="instructions">
          <img src="./image/top_icon_4.png" alt="" class="mb20">
          <div class="fs14 typo_white">操作指南</div>
        </div>
      </div>
      <div class="round_bot"></div>
    </div>
    <van-sticky z-index='100'>
      <Tab ref="tab" :tabs="tabs" @tabChange="tabChange" />
    </van-sticky>
    <template v-if="curtab=='hall'">
      <ServiceHall />
    </template>
    <template v-if="curtab=='apply'">
      <ApplyOrder />
    </template>
    <template v-if="curtab=='received'">
      <ReceivedOrder />
    </template>
  </div>
</template>
<script>
import { pullServiceConf, closeWebView, titleLucency } from '@/mixins/pullNativeFunc'
  // const Tab = () => import('./components/tab')
  import Tab from './components/tab'
  const CommonBanner = () => import('@/components/commonBanner')
  // 功能组件
  const ServiceHall = () => import('./components/serviceHall')
  const ApplyOrder = () => import('./components/apply_order')
  const ReceivedOrder = () => import('./components/received_order')
  export default {
    data() {
      return {
        curtab: 'hall',
        tabs: [{
            id: 'hall',
            name: "服务大厅"
          },
          {
            id: 'apply',
            name: "我发起的"
          },
          {
            id: 'received',
            name: "我接收的"
          },
        ],
      }
    },
    mixins: [pullServiceConf, closeWebView, titleLucency],
    components: { Tab, ServiceHall, ApplyOrder, ReceivedOrder },
    
    async created() {
    },
    mounted() {
      this.titleLucency()
      this.$nextTick(()=>{
        if(this.$route.query.curtab=='apply'){
          this.curtab = 'apply'
          this.$refs.tab.changeTab(2)
        }
        if(this.$route.query.curtab=='received'){
          this.curtab = 'received'
          this.$refs.tab.changeTab(3)
        }
      })
    },
    methods: {
      closeWebView(){
        this.closeWebView()
      },
      instructions(){
        document.location.href='http://www.baidu.com'
      },
      goConfig(){
        this.pullServiceConf()
      },
      goMyCollect(){
        this.$router.push('./collectIndex')
      },
      goDiagData(){
        this.$router.push('./diagnosesData')
      },
      tabChange(index) {
        this.curtab = this.tabs[index].id
      }
    },
  }
</script>
<style scoped lang="scss">
  .docDiagnoses {
    background-color: #fff;
    min-height: 100vh;
    .nav {
      position: relative;
      height: 1.173333rem;
      background-color: #009EE6;

    }

    .top_icon {
      position: relative;
      background-color: #009EE6;

      .top_icon_inner {
        display: flex;
        padding: .8rem 0;

        img {
          width: .8rem;
          height: .8rem;
        }
      }

      .round_bot {
        position: absolute;
        width: 100%;
        height: .266667rem;
        background-color: #fff;
        border-top-left-radius: .266667rem;
        border-top-right-radius: .266667rem;
        bottom: 0;
      }

    }
  }
</style>