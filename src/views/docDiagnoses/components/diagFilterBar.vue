<template>
  <div class="diagFilterBar">
    <van-dropdown-menu>
      <van-dropdown-item :title="areaName" ref="area" @open="openDrop" max='1' @close="closeDrop">
        <van-tree-select :items="areaList" :active-id.sync="areaId" :main-active-index.sync="cityIndex" @click-item="onClickArea" />
      </van-dropdown-item>
      <van-dropdown-item :title="depName" ref="dep" max='1' @open="openDrop" @close="closeDrop">
        <van-tree-select :items="depList" :active-id.sync="depId" :main-active-index.sync="maindepIndex" @click-item="onClickDep" />
      </van-dropdown-item>
      <van-dropdown-item v-model="priceId" :options="sort_type" max='1' @open="openDrop" @close="closeDrop" />
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
        sort_type: [],
      }
    },
    mounted() {
      this._getFilterData()
    },
    methods: {
      _getFilterData() {
        service.docDiagnoses.getFilterData().then(res => {
          console.log(res);
          res.data.city.forEach(item => {
            let childArr = []
            if (item.children && item.children.length > 0) {
              item.children.forEach(i => {
                childArr.push({
                  text: i.areaName,
                  id: i.areaId
                })
              })
            } else {
              childArr = [{
                text: '全国',
                id: 0
              }]
            }
            this.areaList.push({
              text: item.areaName,
              id: item.areaId,
              children: childArr
            })
          })
          res.data.cat.forEach(item => {
            let childArr = []
            if (item.childList && item.childList.length > 0) {
              item.childList.forEach(i => {
                childArr.push({
                  text: i.catname,
                  id: i.catid
                })
              })
            }
            this.depList.push({
              text: item.catname,
              id: item.catid,
              children: childArr
            })
          })
          this.sort_type = res.data.sort_type
        })
      },
      onClickArea(data) {
        this.$refs.area.toggle()
        this.areaName = data.text
      },
      onClickDep(data) {
        this.$refs.dep.toggle()
        this.depName = data.text
        this.maindepId = this.depList[this.maindepIndex].id
      },
      openDrop() {
        this.$emit('scrollToTop')
      },
      closeDrop() {
        let params = {
          city_id: this.areaId,
          cat_no1: this.depId,
          cat_no2: this.maindepId,
          sort_type: this.priceId
        }
        this.$emit('update', params)
      }
    },
  }
</script>
<style lang="scss">
  .diagFilterBar {
    .van-dropdown-menu {
      .van-dropdown-menu__title--active {
        color: #009EE6;
      }

    }

    .van-tree-select {
      .van-icon {
        display: none;
      }

      .van-sidebar-item--select {
        color: #009EE6;
      }

      .van-tree-select__item--active {
        color: #009EE6;
      }

      .van-sidebar-item--select {
        border-color: #fff;
      }
    }

    .van-popup {
      .van-dropdown-item__icon {
        display: none;
      }
    }
  }
</style>