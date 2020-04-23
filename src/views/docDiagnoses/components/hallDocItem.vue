<template>
  <div>
    <div class="hallDocItem bt_gray">
      <div class="backgroundimg doc_img mr16" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
      <div class="relative flex1">
        <div class="mb8">
          <span class="fs18 c333 typo_bold mr5">文冰冰</span>
          <span class="fs14 c666 typo_bold">主任医师</span>
        </div>
        <div class="fs14 c999 typo_bold mb15">
          深圳第二人民医院
        </div>
        <div class="illness">
          <span>过敏</span>
          <span>湿疹</span>
          <span>皮炎</span>
        </div>
        <div>
          <span class="price typo_bold">￥210</span>
          <span class="c_ccc">
            <i class="iconfont">&#xe697;</i>
            深圳南山</span>
        </div>
        <div class="collect" v-if="isHall">
          收藏
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    isHall: {
      type: [Boolean],
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex1 {
    flex: 1;
  }

  .c_ccc {
    color: #ccc;
  }

  .mb8 {
    margin-bottom: 0.213333rem;
  }

  .hallDocItem {
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
        width: 0.96rem;
        height: 0.48rem;
        border-radius: 0.053333rem;
        text-align: center;
        line-height: 0.426667rem;
        color: #ffb937;
        border: 1px solid #ffb937;
        margin-right: 0.133333rem;
      }
    }

    .collect {
      position: absolute;
      top: 0;
      right: 0.266667rem;
      width: 1.866667rem;
      height: 0.853333rem;
      color: #009ee6;
      border: 1px solid #009ee6;
      text-align: center;
      line-height: 0.8rem;
      border-radius: 0.853333rem;
    }
  }
</style>