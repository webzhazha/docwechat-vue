<template>
  <div>
    <div class="hallDocItem" @click="goNativeDoc">
      <div class="backgroundimg doc_img mr16 mt20" :style="generateImageUrl(docItem.image,'/wechat/img/familyActivity/doctorAvatar.png')"></div>
      <div class="relative flex1 pt20 pb20 bt_gray">
        <div class="mb2">
          <span class="fs18 c333 typo_bold mr6 inBlo elli max_w100">{{docItem.doctor_name}}</span>
          <span class="fs14 c666 typo_bold inBlo elli w90">{{docItem.zc_name}}</span>
        </div>
        <div class="fs14 c999 typo_bold mb15">
          {{docItem.unit_name}}
        </div>
        <div v-if="docItem.ill_names && docItem.ill_names.length>0" class="illness">
          <span v-for="item in docItem.ill_names" :key="item">{{item}}</span>
        </div>
        <div>
          <span class="price typo_bold">￥{{docItem.price}}</span>
          <span v-if="docItem.city_area" class="c_ccc">
            <i class="iconfont">&#xe697;</i>
            {{docItem.city_area }}</span>
        </div>
        <template v-if="isHall">
          <div v-if="docItem.is_followed==0" class="collect" @click.stop="collect(docItem.doctor_id)">
            <i class="iconfont">&#xe736;</i> 收藏
          </div>
          <div v-if="docItem.is_followed==1" class="collect yet">
            已收藏
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { pullDocIndex } from '@/mixins/pullNativeFunc'
import service from '_services/'
export default {
  mixins: [pullDocIndex],
  props: {
    isHall: {
      type: [Boolean],
      default: true
    },
    docItem: {
      type: [Object],
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goNativeDoc() {
      this.pullDocIndex(this.docItem.account_user_id)
    },
    collect(id) {
      service.docDiagnoses.collect_doctor({
        doctor_id: id
      }).then(res => {
        console.log(res)
        if (res.result_code == 1) {
          this.docItem.is_followed = 1
        } else {
          this.$toast('收藏失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .hallDocItem {
    display: flex;
    padding: 0 0.4rem;
    .max_w100 {
      max-width: 2.666667rem;
    }
    .doc_img {
      width: 1.333333rem;
      height: 1.333333rem;
      border-radius: 1.333333rem;
      margin-right: 0.4rem;
    }

    .price {
      color: #ff8100;
      font-size: 0.426667rem;
      margin-right: 0.933333rem;
    }

    .illness {
      overflow: hidden;
      margin-bottom: .133333rem;

      span {
         float: left;
        // width: 0.96rem;
        font-size: 12px;
        height: 0.48rem;
        border-radius: 0.053333rem;
        text-align: center;
        line-height: 0.426667rem;
        color: #cc7b18;
        border:1px solid rgba(255,185,55,.5);
        margin-right: .213333rem;
        padding: 0 .16rem;
        margin-bottom: .213333rem;
      }
    }

    .collect {
      position: absolute;
      top: .533333rem;
      right: 1px;
      width: 1.866667rem;
      height: 0.853333rem;
      color: #009ee6;
      border: 1px solid #009ee6;
      text-align: center;
      line-height: .906667rem;
      border-radius: 0.853333rem;

      &.yet {
        color: #999;
        background-color: #F7F7F7;
        border: none;
      }
    }
  }
</style>
