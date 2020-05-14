<template>
  <div>
    <div class="search" @click="goSearch">
      <i class="iconfont mr10">&#xe725;</i>
      <span>搜索医生以及诊疗服务</span>
    </div>
    <div class="mb25">
      <CommonBanner id="25" />
    </div>
    <van-sticky :offset-top="90">
      <div id="bar">
        <div class="hall_tab pl15 bg_white ">
          <div class=" fs16 typo_bold fl mr24" :class="{'typo_black':checkTab=='doc'}" @click="checkTab='doc'">医生会诊</div>
          <!-- <div class=" fs16 typo_bold fl" :class="{'typo_black':checkTab=='check'}" @click="checkTab='check'">检验检查</div> -->
        </div>
        <DiagFilterBar @scrollToTop="scrollToTop" @update="changeFilterDiag" v-if="checkTab=='doc'" />
        <!-- <CheckFilterBar @scrollToTop="scrollToTop" @update="changeFilterCheck" v-if="checkTab=='check'" /> -->
      </div>
    </van-sticky>
    <div :style="'min-height:' + height">
      <div v-if="checkTab=='doc'">
        <van-list
        v-if="docList.length > 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        loading-text="努力加载中..."
        offset="50"
        @load="onDocLoad"
        :immediate-check="false"
      >
        <div v-for="(item, index) in docList" :key="index">
          <HallDocItem :docItem="item" />
        </div>
      </van-list>
      <NoData v-if="finished && docList.length == 0" :height="height" />
      </div>
      <div v-if="checkTab=='check'">
        <van-list
        v-if="checkList.length > 0"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        loading-text="努力加载中..."
        offset="50"
        @load="onCheckLoad"
        :immediate-check="false"
      >
        <div v-for="(item, index) in checkList" :key="index">
          <CheckoutItem :checkItem="item" />
        </div>
      </van-list>
      <NoData v-if="finished && checkList.length == 0" :height="height" />
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import service from '_services/'
const CommonBanner = () => import('@/components/commonBanner')
const DiagFilterBar = () => import('../components/diagFilterBar')
const CheckFilterBar = () => import('../components/checkFilterBar')
const HallDocItem = () => import('../components/hallDocItem')
const CheckoutItem = () => import('../components/checkoutItem')
const NoData = () => import('@/components/noData')
export default {
  components: { CommonBanner, DiagFilterBar, CheckFilterBar, HallDocItem, CheckoutItem, NoData },
  data() {
    return {
      docList: [],
      loading: false,
      finished: false,
      diagPage: 1,
      checkList: [],
      checkPage: 1,
      checkTab: "doc",
      // 筛选器参数
      diagExtraParams: {
        city_id: '',
        cat_no1: '',
        cat_no2: '',
        sort_type: 0
      },
      checkExtraParams: {
        city_id: '',
        sort_type: 0
      },
      height: '100vh',
    }
  },
  mounted() {
    this._getHalldoctor()
    // this._getHallCheck(this.checkExtraParams)
    this.$nextTick(() => {
      setTimeout(() => {
        console.log($('#bar').height())
        this.height = $('body').height() - $('#bar').height() - 80 + 'px'
      }, 500)
    })
  },
  methods: {
    goSearch() {
      this.$router.push('../docDiagnoses/searchIndex')
    },
    onDocLoad() {
      this.diagPage++
      this._getHalldoctor()
    },
    onCheckLoad() {
      this.checkPage++
      this._getHallCheck()
    },
    _getHallCheck() {
      service.docDiagnoses
        .getInspectionList({
          page: this.checkPage,
          size: 10,
          account_user_id: this.account_user_id,
          ...this.checkExtraParams
        })
        .then((res) => {
          console.log(res)
          this.loading = false
          if (!res.data) {
            this.finished = true
            return
          }
          this.checkList = this.checkList.concat(res.data.list)
          if (res.data.length == 0) {
            this.finished = true
          }
        })
    },
    _getHalldoctor() {
      service.docDiagnoses
        .getHalldoctor({
          page: this.diagPage,
          size: 10,
          account_user_id: this.account_user_id,
          ...this.diagExtraParams
        })
        .then((res) => {
          console.log(res)
          this.loading = false
          if (!res.data) {
            this.finished = true
            return
          }
          this.docList = this.docList.concat(res.data)
          if (res.data.length == 0) {
            console.log('哈哈哈');
            
            this.finished = true
          }
        })
    },
    // 检验检查
    changeFilterCheck(){
      this.checkExtraParams = params
      this.checkPage = 1
      this.checkList = []
      this.finished = false
      this._getHallCheck()
    },
    // 医生会诊
    changeFilterDiag(params) {
      this.diagExtraParams = params
      this.diagPage = 1
      this.docList = []
      this.finished = false
      this._getHalldoctor()
    },
    scrollToTop() {
      const offsetTop =
        parseInt(
          $('#bar')
            .parent()
            .parent()
            .offset().top
        ) - 90
      $('html,body').animate({ scrollTop: offsetTop }, 300)
    }
  }
}
</script>
<style lang="scss" scoped>
.hall_tab {
  height: 1.173333rem;
  line-height: 1.173333rem;
}

.search {
  height: 0.906667rem;
  // width: 9.2rem;
  background-color: #eee;
  border-radius: 0.906667rem;
  margin-left: 0.4rem;
  margin-right: .4rem;
  line-height: 0.906667rem;
  margin-top: 0.373333rem;
  margin-bottom: 0.32rem;
  padding-left: 0.4rem;
}
</style>
