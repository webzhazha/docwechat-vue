<template>
  <div>
    <div class="collectDocItem" @click="goNativeDoc">
      <div class="backgroundimg doc_img mr16 mt20" :style="generateImageUrl(docItem.image,'/wechat/img/familyActivity/doctorAvatar.png')"></div>
      <div class="relative flex1 pt20 pb20 bt_gray">
        <div class="mb3">
          <span class="fs18 c333 typo_bold mr6 inBlo elli max_w100">{{docItem.doctor_name}}</span>
          <span class="fs14 c666 typo_bold inBlo elli w90 mb1">{{docItem.zc_name}}</span>
        </div>
        <div class="fs14 c999 mb15 w220 elli">
          {{docItem.unit_name}} | {{docItem.dep_name}}
        </div>
        <div v-if="docItem.ill_tags && docItem.ill_tags.length>0" class="illness">
          <span v-for="item in docItem.ill_tags" :key="item">{{item}}</span>
        </div>
        <div>
          <span class="price typo_bold">￥{{docItem.min_price}}</span>
          <span v-if="docItem.city_area" class="c_ccc">
            <i class="iconfont">&#xe697;</i>
            {{docItem.city_area}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pullDocIndex } from '@/mixins/pullNativeFunc'
export default {
  mixins: [pullDocIndex],
  props: {
    docItem: {
      type: Object,
      default: () => {}
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    goNativeDoc() {
      this.pullDocIndex(this.docItem.account_user_id)
    }
  }
}
</script>
<style lang="scss" scoped>

  .collectDocItem {
    display: flex;
    padding: 0 0 0 0.4rem;
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
        font-size: .32rem;
        height: 0.48rem;
        border-radius: 0.053333rem;
        text-align: center;
        line-height: .32rem;
        color: #cc7b18;
        border:1px solid rgba(255,185,55,.5);
        margin-right: .213333rem;
        padding: 0 .16rem;
        padding-top: .08rem;
        margin-bottom: .213333rem;
      }
    }

  }
</style>
