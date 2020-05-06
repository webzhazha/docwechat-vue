<template>
  <div>
    <div class="collectDocItem bt_gray" @click="goNativeDoc">
      <div class="backgroundimg doc_img mr16" :style="generateImageUrl(docItem.image,'/wechat/img/common/default.png')"></div>
      <div class="relative flex1">
        <div class="mb8">
          <span class="fs18 c333 typo_bold mr5 inBlo elli w100">{{docItem.doctor_name}}</span>
          <span class="fs14 c666 typo_bold inBlo elli w90">{{docItem.zc_name}}</span>
        </div>
        <div class="fs14 c999 mb15">
          {{docItem.unit_name}} | {{docItem.dep_name}}
        </div>
        <div class="illness" v-if="docItem.ill_tags && docItem.ill_tags.length>0">
          <span v-for="item in docItem.ill_tags" :key="item">{{item}}</span>
        </div>
        <div>
          <span class="price typo_bold">￥{{docItem.min_price}}</span>
          <span class="c_ccc" v-if="docItem.city_area">
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
    data() {
      return {

      }
    },
    mixins: [pullDocIndex],
    props: {
      docItem: {
        type: [Object],
        defalut: () => {}
      }
    },
    methods: {
      goNativeDoc() {
        this.pullDocIndex(this.docItem.account_user_id)
      },
    },
  }
</script>
<style lang="scss" scoped>

  .collectDocItem {
    display: flex;
    padding: 0.533333rem 0.4rem;

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
      margin-bottom: 0.426667rem;

      span {
        float: left;
        // width: 0.96rem;
        height: 0.48rem;
        border-radius: 0.053333rem;
        text-align: center;
        line-height: 0.426667rem;
        color: #ffb937;
        border: 1px solid #ffb937;
        margin-right: 0.133333rem;
        padding: 0 .16rem;
        margin-bottom: .133333rem;
      }
    }

  }
</style>