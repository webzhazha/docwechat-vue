<template>
  <div class="docDiagnoses" v-title data-title="转诊/会诊">
    <!-- 顶部 -->
    <div class="nav textc typo_white">
      <span class="absolute left10" @click="closePage">
        <i class="iconfont fs18 lh45px">&#xe688;</i>
      </span>
      <span class="fs18 typo_bold lh45px">转诊/会诊</span>
    </div>
    <div class="h45px"></div>
    <div class="top_icon">
      <div class="top_icon_inner">
        <div class="textc flex1" @click="goMyCollect">
          <img src="./image/top_icon_1.png" alt="" class="mb20" />
          <div class="fs14 typo_white">我的收藏</div>
        </div>
        <div class="textc flex1" @click="goDiagData">
          <img src="./image/top_icon_2.png" alt="" class="mb20" />
          <div class="fs14 typo_white">会诊数据</div>
        </div>
        <div class="textc flex1" @click="goConfig">
          <img src="./image/top_icon_3.png" alt="" class="mb20" />
          <div class="fs14 typo_white">服务配置</div>
        </div>
        <div class="textc flex1" @click="instructions">
          <img src="./image/top_icon_4.png" alt="" class="mb20" />
          <div class="fs14 typo_white">操作指南</div>
        </div>
      </div>
      <div class="round_bot"></div>
    </div>
    <van-sticky z-index="100" :offset-top="45">
      <Tab ref="tab" :tabs="tabs" @tabChange="tabChange" />
    </van-sticky>
    <template v-if="curtab == 'hall'">
      <ServiceHall ref="ServiceHall"/>
    </template>
    <template v-if="curtab == 'apply'">
      <ApplyOrder ref="ApplyOrder" />
    </template>
    <template v-if="curtab == 'received'">
      <ReceivedOrder ref="ReceivedOrder" />
    </template>
    <template v-if="curtab == 'checkout'">
      <ReceivedOrder />
    </template>
  </div>
</template>
<script>
import {
  pullServiceConf,
  closeWebView,
  titleLucency
} from '@/mixins/pullNativeFunc'
// const Tab = () => import('./components/tab')
import Tab from './components/tab'
// 功能组件
const ServiceHall = () => import('./components/serviceHall')
const ApplyOrder = () => import('./components/apply_order')
const ReceivedOrder = () => import('./components/received_order')
export default {
  mixins: [pullServiceConf, closeWebView, titleLucency],
  components: { Tab, ServiceHall, ApplyOrder, ReceivedOrder },
  data() {
    return {
      curtab: 'hall',
      tabs: [
        {
          id: 'hall',
          name: '服务大厅'
        },
        {
          id: 'apply',
          name: '我发起的'
        },
        {
          id: 'received',
          name: '我接收的'
        },
        // {
        //   id: 'checkout',
        //   name: '检验检查'
        // }
      ]
    }
  },
  async created() {
  },
  mounted() {
    this.titleLucency() // 隐藏导航栏
    this.$nextTick(() => {
      if (this.$route.query.curtab == 'apply') {
        this.curtab = 'apply'
        this.$refs.tab.changeTab(2)
      }
      if (this.$route.query.curtab == 'received') {
        this.curtab = 'received'
        this.$refs.tab.changeTab(3)
      }
    })
    // 赋值刷新
    var that = this
    window.onscroll=function(){
      var a = that.curtab + 1
      console.log(a);
    }
    if(this.curtab == 'hall'){
      window.webViewWillAppear = () => {
        that.$refs.ServiceHall.diagPage = 1
        that.$refs.ServiceHall._getHalldoctor()
      }
    }
  },
  methods: {
    closePage() {
      this.closeWebView()
    },
    instructions() {
      // document.location.href = 'http://www.baidu.com'
    },
    goConfig() {
      this.pullServiceConf()
    },
    goMyCollect() {
      this.$router.push('./collectIndex')
    },
    goDiagData() {
      this.$router.push('./diagnosesData')
    },
    tabChange(index) {
      this.curtab = this.tabs[index].id
      // 赋值刷新
      var that = this
    if(this.curtab == 'hall'){
      window.webViewWillAppear = () => {
        that.$refs.ServiceHall.diagPage = 1
        that.$refs.ServiceHall._getHalldoctor()
      }
    }
    if(this.curtab == 'apply'){
      window.webViewWillAppear = () => {
        that.$refs.ApplyOrder.page = 1
        that.$refs.ApplyOrder._get_apply_order()
      }
    }
    if(this.curtab == 'received'){
      window.webViewWillAppear = () => {
        that.$refs.ReceivedOrder.page = 1
        that.$refs.ReceivedOrder._get_apply_order()
      }
    }
    }
  },
  beforeDestroy(){
    window.webViewWillAppear = () => {}
  }
}
</script>
<style scoped lang="scss">
.docDiagnoses {
  background-color: #fff;
  min-height: 100vh;
  .nav {
    position: fixed;
    top: 0;
    z-index: 9999;
    height: 45px;
    width: 100%;
    background-color: #009ee6;
  }
  .h45px {
    height: 45px;
  }
  .lh45px {
    line-height: 45px;
  }
  .top_icon {
    position: relative;
    background-color: #009ee6;

    .top_icon_inner {
      display: flex;
      padding: 0.8rem 0;

      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }

    .round_bot {
      position: absolute;
      width: 100%;
      height: 0.266667rem;
      background-color: #fff;
      border-top-left-radius: 0.266667rem;
      border-top-right-radius: 0.266667rem;
      bottom: 0;
    }
  }
}
</style>
