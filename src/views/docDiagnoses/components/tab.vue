<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :id="tab.id"
      :key="tab.id"
      class="tab-item"
      :class="{ active: activeIndex == index }"
      @click="selectTab(index)"
    >
      {{ tab.name }}
      <span v-if="tab.redDot" class="red-dot"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    selectTab(index) {
      console.log(index);
      
      if (this.activeIndex != index) {
        this.activeIndex = index
        this.$emit('tabChange', index)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

  $active-color: #009EE6;
  .w100vw {
    width: 100vh;
  }
  .red-dot {
    display: inline-block;
    position: absolute;
    top: .4rem;
    right: -.267rem;
    width: .187rem;
    height: .187rem;
    border-radius: 50%;
    background-color: #F00;
  }
  .tabs {
    display: inline-block;
    min-width: 10rem;
    height: 1.2rem;
    padding: 0 .4rem 0 .586667rem;
    border-bottom: 1px solid #F5F5F5;
    font-size: .373333rem;
    white-space: nowrap;
    color: #666;
    background: #FFF;
    margin-bottom: .026667rem;
    .tab-item {
      display: inline-block;
      position: relative;
      height: 1.2rem;
      margin-right: .8rem;
      line-height: 1.2rem;
      text-align: center;
      &.active {
        // font-size: .533333rem;
        color: $active-color;
        &::after {
          position: absolute;
          // top: 1.28rem;
          bottom: -0.026667rem;
          left: 50%;
          width: 70%;
          height: .08rem;
          margin-left: -35%;
          border-radius: 2px;
          background: $active-color;
          content: ' ';
          z-index: 300;
        }
      }
    }
  }
</style>
