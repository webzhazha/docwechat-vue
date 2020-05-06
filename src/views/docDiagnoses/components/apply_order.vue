<template>
  <div>
    <div class="diagnoses_doc" :style="'min-height:' + height">
      <van-list v-model="loading" :finished="finished" :finished-text="getNoDataTip" @load="onLoad" offset="100">
        <!-- 会诊中 -->
        <div class="bg_white mb15" v-for="(item, index) in orderList" :key="index" @click="goOrder(item.order_id)">
          <div class="top">
            <img src="../image/order_status_1.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==1">
            <img src="../image/order_status_2.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==2">
            <img src="../image/order_status_3.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==3">
            <img src="../image/order_status_4.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==4">
            <img src="../image/order_status_5.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==5 || item.order_state_other==7">
            <img src="../image/order_status_6.png" alt="" class="w16 h16 mr5 fl mt12" v-if="item.order_state_other==6">
            <span class="status" :style="'color:' +colorList[item.order_state_other]">
              {{ item.order_state_title }}</span>
            <span class="c999 fs14 fr lh40" v-if="(item.order_state == 1 && item.pay_state == 1)">还剩{{item.end_time | filterTime}}关闭服务</span>
            <span class="c999 fs14 fr lh40" v-else>{{ item.add_time | formatTime}}发起</span>
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
                    <span class="fs18 c333 typo_bold">{{ item.truename }}</span>
                    <span class="fs14 c333">
                      {{ item.sex == 0 ? "男" : "女" }} {{ item.age }}岁</span>
                  </div>
                  <div class="c999 fs14 elli w150">{{ item.purpose }}</div>
                </div>
              </div>
              <div class="c999 fs14">
                向 {{ item.second_name }} {{ item.second_zc_name }}发起
              </div>
            </div>
            <div class="right">
              <div class="price">￥{{ item.main_doc_amount }}</div>
              <div class="c999 fs14 typo_bold">预计收益</div>
            </div>
          </div>
        </div>
      </van-list>
      <NoData v-if="!loading && orderList.length == 0" :height="height" />
    </div> 
  </div>
</template>
<script>
  import $ from "jquery";
  import dayjs from 'dayjs'
  import { pullDiagOrder } from '@/mixins/pullNativeFunc'
  import service from "_services/";
  const NoData = () => import("@/components/noData");
  export default {
    data() {
      return {
        page: 1,
        orderList: [],
        loading: false,
        finished: false,
        height: "",
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
      };
    },
    mixins: [pullDiagOrder],
    components: { NoData },
    computed: {
      getNoDataTip() {
        return this.orderList.length > 0 ? '亲，已显示全部了哦~' : ''
      }
    },
    filters: {
      filterTime(time) {
        const new_date = new Date();
        const end_date = new Date(time.replace(/-/g, "/"));
        const remain_date = end_date - new_date;
        //计算出小时数
        const hours = Math.floor(remain_date / (3600 * 1000));
        //计算相差分钟数
        const leave2 = remain_date % (3600 * 1000); //计算小时数后剩余的毫秒数
        const minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        const seconds = Math.round(leave3 / 1000);
        return hours + ":" + (minutes>9?minutes:'0'+ minutes) + ":" + (seconds>9?seconds:'0'+seconds);
      },
      formatTime(time){
        return dayjs(time).format("YYYY-MM-DD")
      }
    },
    mounted() {
      this._get_apply_order();
      this.$nextTick(() => {
        this.height = $("body").height() - 40 + "px";
      });
    },
    methods: {
      goOrder(order_id) {
        this.pullDiagOrder(order_id)
      },
      _get_apply_order() {
        service.docDiagnoses
          .get_apply_order({
            page: this.page,
            size: 10,
          })
          .then((res) => {
            console.log(res);
            if (!res.data.list) {
              this.loading = false;
              this.finished = true;
              return
            }
            if (res.data.list && res.data.list.length > 0) {
              this.orderList = this.orderList.concat(res.data.list);
            }
            this.loading = false;
            if (res.data.list && res.data.list.length < 10) {
              this.finished = true;
            }
          });
      },
      onLoad() {
        this.page++;
        this._get_apply_order();
      },
    },
  };
</script>
<style lang="scss" scoped>
  .diagnoses_doc {
    padding: 0.453333rem 0.32rem;
    background-color: #f7f7f7;

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
      padding: 0.4rem;

      .left {
        width: 5.84rem;
        border-right: 1px solid #eeeeee;

        .info {
          display: flex;
          margin-bottom: 0.4rem;

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
        padding-top: 0.266667rem;

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