<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="地区" ref="area">
        <van-tree-select :items="areaList" :active-id.sync="areaId" :main-active-index.sync="cityId" />
      </van-dropdown-item>
      <van-dropdown-item title="科室" ref="dep">>
        <van-tree-select :items="depList" :active-id.sync="depId" :main-active-index.sync="maindepId" />
      </van-dropdown-item>
      <van-dropdown-item v-model="value" :options="priceList" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      areaList: [
        {
          text: '全国'
        }
      ],
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
  }
}
</script>