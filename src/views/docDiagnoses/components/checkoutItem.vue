<template>
  <div>
    <div class="checkoutItem bt_gray">
      <div class="backgroundimg doc_img mr16" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
      <div class="relative flex1">
        <div class="mb8 c333 typo_bold fs18">
          女性两癌帅选, 防癌专项普查特惠哒哒哒哒哒哒
        </div>
        <div class="fs14 c999 mb15">
          深圳同人妇科医院
        </div>
        <div>
          <span class="price typo_bold">￥300</span>
          <span class="c_ccc">
            <i class="iconfont">&#xe697;</i>
            深圳 宝安</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    docItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

  .checkoutItem {
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
