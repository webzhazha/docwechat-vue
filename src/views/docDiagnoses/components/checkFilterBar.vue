<template>
  <div class="checkFilterBar">
    <van-dropdown-menu>
      <van-dropdown-item ref="area" :title="areaName" max="1" @open="openDrop" @close="closeDrop">
        <van-tree-select :items="areaList" :active-id.sync="areaId" :main-active-index.sync="cityIndex" @click-item="onClickArea" />
      </van-dropdown-item>
      <van-dropdown-item v-model="priceId" :options="sort_type" max="1" @open="openDrop" @close="closeDrop" />
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
        priceId: 0,
        sort_type: []
      }
    },
    mounted() {
      this._getFilterData()
    },
    methods: {
      _getFilterData() {
        service.docDiagnoses.getInspectionOptions().then(res => {
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
          this.sort_type = res.data.sort_type
        })
      },
      onClickArea(data) {
        this.$refs.area.toggle()
        this.areaName = data.text
      },
      openDrop() {
        this.$emit('scrollToTop')
      },
      closeDrop() {
        const params = {
          city_id: this.areaId,
          sort_type: this.priceId
        }
        this.$emit('update', params)
      }
    }
  }
</script>
<style lang="scss">
  .checkFilterBar {
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