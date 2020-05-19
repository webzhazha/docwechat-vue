<template>
  <div class="noData" :style="{backgroundColor: bgColor, height: height}">
    <slot name="content">
      <div class="content" :style="{top: top}">
        <div class="image"></div>
        <div class="text">{{text}}</div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: false,
      default: '#FFF'
    },
    height: {
      type: String,
      required: false,
      default: '100vh'
    },
    text: {
      type: String,
      required: false,
      default: '暂无数据~'
    },
    top: {
      type: String,
      default: '50%'
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">
  .noData {
    position: relative;
    background-color: #FFF;
    .content {
      position: absolute;
      // top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .image {
      width: 6.4rem;
      height: 4.773333rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url('//wximg.91160.com/wechat/img/doctor/no-data@2x.png');
    }
    .text {
      font-size: .373333rem;
      line-height: .373333rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
</style>
