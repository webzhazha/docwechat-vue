<template>
  <div class="hallFilter">
    <!-- <div class="bar bg_white">
      <div class="item" @click="handleToggleFilter('area')">
        地区
        <i class="iconfont inBlo fs12 scale06">&#xe708;</i>
      </div>
      <div class="item" @click="handleToggleFilter('dep')">
        科室
        <i class="iconfont inBlo fs12 scale06">&#xe708;</i>
      </div>
      <div class="item" @click="handleToggleFilter('price')">
        价格
        <i class="iconfont inBlo fs12 scale06">&#xe708;</i>
      </div>
    </div>
    <div v-if="showDropDown" class="dropDown">
      <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
    </div>
    <van-overlay :show="overlayshow" /> -->
    <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
        showDropDown: false,
        overlayshow: false,
        items: [{
          text: '所有城市',
          children: [{
              text: '温州',
              id: 1,
            },
            {
              text: '杭州',
              id: 2,
            },
            {
              text: '杭州',
              id: 3,
            },
            {
              text: '杭州',
              id: 4,
            },
            {
              text: '杭州',
              id: 5,
            },
            {
              text: '杭州',
              id: 6,
            },
            {
              text: '杭州',
              id: 7,
            },
            {
              text: '杭州',
              id: 8,
            },
            {
              text: '杭州',
              id: 9,
            },
            {
              text: '杭州',
              id: 10,
            },
            {
              text: '杭州',
              id: 11,
            },
            {
              text: '杭州',
              id: 12,
            },
            {
              text: '杭州',
              id: 13,
            }
          ]
        }],
        activeId: 1,
        activeIndex: 0,
      }
    },
    methods: {
      handleToggleFilter(param){
        console.log();
        this.showDropDown = true
        this.overlayshow = true
        document.getElementById('#app').style.overflow = 'hidden'
      }
    },
  }
</script>
<style lang="scss" scoped>
.dropDown {
  position: fixed;
  width: 100%;
  height: 200px;
  top: 132px;
  z-index: 101;
}
  .scale06 {
    transform: scale(0.6);
  }

  .bar {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    height: 1.173333rem;
    line-height: 1.173333rem;
    border-radius: 1px solid #f5f5f5;

    .item {
      flex: 1;
      color: #333;
      font-size: .373333rem;
      text-align: center;
    }
  }
</style>