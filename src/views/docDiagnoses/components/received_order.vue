<template>
  <div>
    <div class="diagnoses_doc" :style="'min-height:' + height">
      <van-list v-model="loading" :finished="finished" :finished-text="getNoDataTip" offset="100" @load="onLoad" :immediate-check="false">
        <!-- 会诊中 -->
        <div v-for="(item, index) in orderList" :key="index" class="bg_white mb16 boradius4 box_show hidden" @click="goOrder(item.order_id)">
          <div class="top">
            <img v-if="item.order_state_other==1" src="../image/order_status_1.png" alt="" class="w16 h16 mr5 fl mt12">
            <img v-if="item.order_state_other==2" src="../image/order_status_2.png" alt="" class="w16 h16 mr5 fl mt12">
            <img v-if="item.order_state_other==3" src="../image/order_status_3.png" alt="" class="w16 h16 mr5 fl mt12">
            <img v-if="item.order_state_other==4" src="../image/order_status_4.png" alt="" class="w16 h16 mr5 fl mt12">
            <img v-if="item.order_state_other==5 || item.order_state_other==7" src="../image/order_status_5.png" alt="" class="w16 h16 mr5 fl mt12">
            <img v-if="item.order_state_other==6" src="../image/order_status_6.png" alt="" class="w16 h16 mr5 fl mt12">
            <span class="status " :style="'color:' + colorList[item.order_state_other]">{{ item.order_state_title }}</span>
            <span v-if="item.order_state == 1 && item.pay_state == 1" class="cFE4E4E fs14 fr lh40">还剩{{ item.end_time | filterTime }}关闭服务</span>
            <span v-else class="c999 fs14 fr lh40">{{ item.add_time | formatTime }}发起</span>
          </div>
          <div class="content">
            <div class="left">
              <div class="info">
                <div class="backgroundimg info_img mr15" :style="
                    generateImageUrl(
                      item.pat_icon,
                      '/wechat/img/common/default.png'
                    )
                  "></div>
                <div>
                  <div>
                    <span class="fs18 c333 typo_bold names elli">{{ item.truename }}</span>
                    <span class="fs14 c333 mb1">
                      {{ item.sex == 0 ? "男" : "女" }} {{ item.age }}岁</span>
                  </div>
                  <div class="c999 fs14 elli w150 typo_bold">{{ item.purpose }}</div>
                </div>
              </div>
              <div class="c999 fs14">
                由 {{ item.send_name }} {{ item.send_zc_name }}发起
              </div>
            </div>
            <div class="right">
              <div class="price">￥{{ item.other_doc_amount }}</div>
              <div class="c999 fs14 typo_bold">预计收益</div>
            </div>
          </div>
        </div>
      </van-list>
        <NoData v-if="finished && orderList.length == 0" :height="height" bgColor="#F7F7F7" top="38%" />
    </div>
    
  </div>
</template>
<script>
  import $ from 'jquery'
  import dayjs from 'dayjs'
  import { pullDiagOrder } from '@/mixins/pullNativeFunc'
  import { filterTime } from '../mixins/index'
  import service from '_services/'
  const NoData = () => import('@/components/noData')
  export default {
    mixins: [pullDiagOrder, filterTime],
    components: { NoData },
    data() {
      return {
        page: 1,
        orderList: [],
        loading: false,
        finished: false,
        height: '',
        colorList: [
          '#FF9F4F',
          '#FF9F4F',
          '#FF9F4F',
          '#009EE6',
          '#00D3C2',
          '#999999',
          '#999999',
          '#999999'
        ]
      }
    },
    computed: {
      getNoDataTip() {
        return this.orderList.length > 0 ? '亲，已显示全部了哦~' : ''
      }
    },
    filters: {
      formatTime(time) {
        return dayjs(time).format('YYYY-MM-DD')
      }
    },
    mounted() {
      this._get_received_order();
      this.$nextTick(() => {
        this.height = $('body').height() - 80 + 'px'
      })
    },
    methods: {
      goOrder(order_id) {
        this.pullDiagOrder(order_id)
      },
      _get_received_order() {
        service.docDiagnoses
          .get_received_order({
            page: this.page,
            size: 10
          })
          .then((res) => {
            console.log(res)
            if (!res.data.list) {
              this.loading = false
              this.finished = true
              return
            }
             this.loading = false
            if (res.data.list && res.data.list.length > 0) {
              if(this.page==1){
                this.orderList = res.data.list
              }else {
                this.orderList = this.orderList.concat(res.data.list)
              }
            }
            if (res.data.list && res.data.list.length == 0) {
              this.finished = true
            }
          })
      },
      onLoad() {
        this.page++
        this._get_received_order()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .diagnoses_doc {
    padding: 0.453333rem 0.32rem;
    background-color: #f7f7f7;
    .box_show {
      box-shadow:3px 18px 20px 0px rgba(178,178,178,0.06);
    }
    .top {
      overflow: hidden;
      background-color: #fcfcfc;
      border-bottom: 1px solid #eee;
      padding: 0 0.4rem;

      .status {
        color: #009ee6;
        font-size: 0.426667rem;
        font-weight: bold;
        float: left;
        line-height: 1.066667rem;
      }

      height: 1.066667rem;
    }

    .content {
      display: flex;
      padding: 0.4rem 0 0.4rem 0.4rem;

      .left {
        width: 5.84rem;
        border-right: 1px solid #eeeeee;

        .info {
          display: flex;
          margin-bottom: 0.4rem;
          .names {
            display: inline-block;
            max-width: 2.666667rem;
            vertical-align: sub;
            margin-right: .16rem;
          }
          .info_img {
            width: 1.066667rem;
            height: 1.066667rem;
            border-radius: 1.066667rem;
          }
        }
      }

      .right {
        flex: 1;
        text-align: center;
        padding-top: .346667rem;

        .price {
          color: #ff8100;
          font-size: 0.48rem;
          font-weight: bold;
          margin-bottom: 0.32rem;
        }
      }
    }
  }
</style>