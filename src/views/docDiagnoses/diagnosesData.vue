<template>
  <div class="diagnosesData"  v-title data-title="会诊数据">
    <div class="nav textc typo_white">
      <span class="absolute left10" @click="returns">
        <i class="iconfont fs18 lh44">&#xe688;</i>
      </span>
      <span class="fs18 typo_bold lh44">会诊数据</span>
    </div>
    <div class="top">
      <div class="left">
        <div class="typo_white fs14 mb10">累计转诊/会诊收入(元)</div>
        <div class="typo_white fs24 typo_bold">{{ data.total_income }}</div>
      </div>
      <div class="right">
        <div class="typo_white fs14 mb10">本月收入(元)</div>
        <div class="typo_white fs24 typo_bold">+{{ data.month_income }}</div>
      </div>
    </div>
    <div class="bottom mt__15" @click="goIndexReceived">
      <div class="items">
        <div class="item_left">
          <div class="mb5">
            <img src="./image/data_icon_1.png" alt="" class="w30 h30" />
          </div>
          <div class="c333 fs16">接收会诊</div>
        </div>
        <div class="item_right">
          <div class="num">
            <div class="c333 mb10  fs20 typo_bold">
              {{ data.receive_times }}
            </div>
            <div class="c999 fs16">次数</div>
          </div>
          <div class="income">
            <div class="cFF8100 fs20 mb10 typo_bold">{{ data.receive_income }}</div>
            <div class="c999 fs16">收益元</div>
          </div>
          <div class="arrow">
            <i class="iconfont">&#xe6ae;</i>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" @click="goIndexApply">
      <div class="items">
        <div class="item_left">
          <div class="mb5">
            <img src="./image/data_icon_2.png" alt="" class="w30 h30" />
          </div>
          <div class="c333 fs16">发起会诊</div>
        </div>
        <div class="item_right">
          <div class="num">
            <div class="c333 mb10  fs20 typo_bold">
              {{ data.request_times }}
            </div>
            <div class="c999 fs16">次数</div>
          </div>
          <div class="income">
            <div class="cFF8100 fs20 mb10 typo_bold">{{ data.request_income }}</div>
            <div class="c999 fs16">收益元</div>
          </div>
          <div class="arrow">
            <i class="iconfont">&#xe6ae;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { titleLucency, setStatusBarColor } from '@/mixins/pullNativeFunc'
import service from '_services/'
export default {
  mixins: [titleLucency, setStatusBarColor],
  data() {
    return {
      data: {}
    }
  },
  created(){
  },
  mounted() {
    this.titleLucency()
    this.$nextTick(()=>{
      this.setStatusBarColor('#009ee6')
    })
    service.docDiagnoses.get_order_data().then((res) => {
      this.data = res.data
    })
  },
  methods: {
    goIndexReceived() {
      this.$router.push({
        path: './index',
        query: {
          curtab: 'received'
        }
      })
    },
    goIndexApply() {
      this.$router.push({
        path: './index',
        query: {
          curtab: 'apply'
        }
      })
    },
    returns() {
      this.$router.go(-1)
    }
  },
  beforeDestroy(){
    this.setStatusBarColor('#ffffff')
  }
}
</script>
<style lang="scss" scoped>
.cFF8100 {
  color: #ff8100;
}
.mt__15 {
  margin-top: -0.4rem;
}
.nav {
  position: relative;
  height: 1.173333rem;
  background-color: #009ee6;
}
.diagnosesData {
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  .top {
    display: flex;
    margin-top: -0.053333rem;
    height: 3.706667rem;
    // background-color: #009ee6;
    background: url('//wximg.91160.com/wechat/img/common/huiyi_bg.png') no-repeat scroll bottom left/cover;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-top: 0.693333rem;
    .left {
      width: 5.866667rem;
    }
    .right {
      flex: 1;
    }
  }
  .bottom {
    background-color: #fff;
    width: 9.2rem;
    height: 3.093333rem;
    margin-left: 0.4rem;
    overflow: hidden;
    font-size: 18px;
    // box-shadow: 0px 18px 20px 0px rgba(178, 178, 178, 0.06);
    border-radius: 4px;
    border: 1px solid rgba(235, 235, 235, .5);
    margin-bottom: 0.64rem;
    .items {
      display: flex;
      text-align: center;
      height: 100%;
      .item_left {
        width: 2.8rem;
        padding-top: 0.693333rem;
      }
      .item_right {
        flex: 1;
        display: flex;
        padding-top: 0.8rem;
        background-color: #fcfcfc;
        .num {
          flex: 1;
        }
        .income {
          flex: 1;
        }
        .arrow {
          flex: 1;
          padding-top: 0.533333rem;
        }
      }
    }
  }
}
</style>
