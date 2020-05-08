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
    changeTab(index) {
      this.activeIndex = index
    },
    selectTab(index) {
      if (this.activeIndex != index) {
        this.activeIndex = index
        this.$emit('tabChange', index)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$active-color: #009ee6;
.w100vw {
  width: 100vh;
}
.red-dot {
  display: inline-block;
  position: absolute;
  top: 0.4rem;
  right: -0.267rem;
  width: 0.187rem;
  height: 0.187rem;
  border-radius: 50%;
  background-color: #f00;
}
.tabs {
  display: flex;
  min-width: 10rem;
  height: 45px;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.373333rem;
  white-space: nowrap;
  color: #666;
  background: #fff;
  margin-bottom: 0.026667rem;
  .tab-item {
    flex: 1;
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
    &.active {
      color: $active-color;
      &::after {
        position: absolute;
        bottom: -0.026667rem;
        left: 50%;
        width: 70%;
        height: 0.08rem;
        margin-left: -35%;
        border-radius: 2px;
        background: $active-color;
        content: " ";
        z-index: 300;
      }
    }
  }
}
</style>
