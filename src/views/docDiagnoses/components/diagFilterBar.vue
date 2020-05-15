<template>
  <div class="diagFilterBar">
    <van-dropdown-menu>
      <van-dropdown-item
        ref="area"
        :title="areaName"
        max="1"
        @open="openDrop"
        @close="closeDrop"
      >
        <van-tree-select
          :items="areaList"
          :active-id.sync="areaId"
          :main-active-index.sync="cityIndex"
          @click-item="onClickArea"
        />
      </van-dropdown-item>
      <van-dropdown-item
        ref="dep"
        :title="depName"
        max="1"
        @open="openDrop"
        @close="closeDrop"
      >
        <van-tree-select
          :items="depList"
          :active-id.sync="depId"
          :main-active-index.sync="maindepIndex"
          @click-item="onClickDep"
        />
      </van-dropdown-item>
      <van-dropdown-item
        v-model="priceId"
        :options="sort_type"
        max="1"
        @open="openDrop"
        @close="closeDrop"
      />
    </van-dropdown-menu>
  </div>
</template>
<script>
import service from '@/services/index'
export default {
  data() {
    return {
      areaId: '',
      areaName: '地区',
      cityIndex: -1,
      areaList: [],
      depId: '',
      depName: '科室',
      maindepId: '',
      maindepIndex: -1,
      depList: [],
      priceId: 0,
      sort_type: []
    }
  },
  mounted() {
    this._getFilterData()
  },
  methods: {
    _getFilterData() {
      service.docDiagnoses.getFilterData().then(res => {
        console.log(res)
        res.data.city.forEach(item => {
          const childArr = []
          if (item.children && item.children.length > 0) {
            item.children.forEach(i => {
              childArr.push({
                text: i.areaName,
                id: i.areaId
              })
            })
          }
          this.areaList.push({
            text: item.areaName,
            id: item.areaId,
            children: childArr
          })
        })
        res.data.cat.forEach(item => {
          const childArr = []
          if (item.childList && item.childList.length > 0) {
            item.childList.forEach(i => {
              childArr.push({
                text: i.catname,
                id: i.catNo
              })
            })
          }
          this.depList.push({
            text: item.catname,
            id: item.catNo,
            children: childArr
          })
        })
        this.sort_type = res.data.sort_type
      })
    },
    onClickArea(data) {
      this.$refs.area.toggle()
      if(!data.id){
        this.areaName = this.areaList[this.cityIndex].text
      }else {
        this.areaName = data.text
      }
    },
    onClickDep(data) {
      this.$refs.dep.toggle()
      // 二级全部显示一级名称
      if(!data.id){
        this.depName = this.depList[this.maindepIndex].text
      }else {
        this.depName = data.text
      }
      this.maindepId = this.depList[this.maindepIndex].id
    },
    openDrop() {
      this.$emit('scrollToTop')
    },
    closeDrop() {
      const params = {
        city_id: this.areaId,
        cat_no1: this.maindepId,
        cat_no2: this.depId,
        sort_type: this.priceId
      }
      this.$emit('update', params)
    }
  }
}
</script>
<style lang="scss">
  .diagFilterBar {
    .van-dropdown-menu {
      .van-dropdown-menu__title--active {
        color: #009EE6;
      }
      .van-dropdown-menu__title {
        font-size: .373333rem;
      }
      .van-dropdown-menu__bar {
        box-shadow: none;
        border-bottom: 1px solid #eee;
      }
    }

    .van-tree-select {
      .van-icon {
        display: none;
      }

      .van-sidebar-item--select {
        color: #009EE6;
      }
      .van-tree-select__nav-item {
        color: #999;
      }
      .van-sidebar-item--select {
        color: #009EE6;
      }
      .van-tree-select__item.van-tree-select__item--active {
        color: #009EE6;
        font-weight: 700;
      }
      .van-tree-select__item {
        font-weight: 400;
      }
      .van-sidebar-item--select {
        border-color: #fff;
      }
      .van-sidebar-item--select::before {
        background-color: #fff;
      }
    }

    .van-popup {
      .van-dropdown-item__icon {
        display: none;
      }
    }
  }
</style>
