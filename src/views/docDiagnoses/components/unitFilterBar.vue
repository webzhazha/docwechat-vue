<!-- 公用组件：筛选器
  /**
  * 筛选器
  * @module personalMainPage/components
  * @desc 科室主页等页面用于筛选，支持传入广告id
  * @author 张浩田
  * @date 2019年9月30日10:00
  * @interface 无
  * @document 无
  * @example 调用示例
  * <unitFilterBar></unitFilterBar>
  */ -->
<template>
  <div
    id="unitFilterBar"
    ref="unitFilterBar"
    class="unit-filter-bar"
    :style="{ position: showDropDown ? 'absolute' : 'relative' }"
  >
    <div class="placeholder"></div>
    <div class="flex justify_between align_center filter-bar-current" :class="{fixed: fixTop, bt_f5: bar_bt}" :style="{top: fixTop ? `${offsetTop / 37.5}rem` : 0}">
      <div class="w100p flex justify_between align_center">
        <div
          class="current-item area"
          :class="{ active: (currentType == 'area' && showDropDown) || areaName != '全城'}"
          @click="handleToggleFilter('area')"
        >
          <div class="flex align_center justify_center">
            <span class="text elli">{{ areaName }}</span>
            <span v-if="(!showDropDown && currentType == 'area') || (!currentType || currentType != 'area')" class="iconfont">&#xe625;</span>
            <span v-if="showDropDown && currentType == 'area'" class="iconfont">&#xe626;</span>
          </div>
        </div>
        <div
          class="current-item sort"
          :class="{ active: (currentType == 'sort' && showDropDown) || sortName != '智能排序' }"
          @click="handleToggleFilter('sort')"
        >
          <div class="flex align_center justify_center">
            <span class="text elli">{{ sortName }}</span>
            <span v-if="(!showDropDown && currentType == 'sort') || (!currentType || currentType != 'sort')" class="iconfont">&#xe625;</span>
            <span v-if="showDropDown && currentType == 'sort'" class="iconfont">&#xe626;</span>
          </div>
        </div>
        <template v-if="filterShow">
          <div
            class="current-item filter"
            :class="{ active: (currentType == 'filter' && showDropDown) || checkActive}"
            @click="handleToggleFilter('filter')"
          >
            <div class="flex align_center justify_center">
              <span class="text elli">{{ filterName }}</span><span class="iconfont filter">&#xe681;</span>
            </div>
          </div>
        </template>
        <div v-else class="current-item"></div>
      </div>
    </div>
    <div
      v-if="showDropDown"
      class="dropdown-area"
      :class="{fixed: fixTop}"
      :style="{
        height: `calc(100vh - 1.066667rem - ${offsetTop / 37.5}rem)`,
        top: fixTop ? `${(offsetTop + 40) / 37.5}rem` : '0'
      }"
      @click="handleClickShadow"
    >
      <div class="dropdown-body" @click.stop.prevent>
        <div v-if="currentType == 'area'" class="area-container">
          <scroller
            lock-x
            height="100%"
            class="vux-scroller-area"
          >
            <div>
              <button
                v-for="(item, index) in areaList"
                :key="index"
                v-bind="{
                  'data-area_id': item.area_id,
                  'data-area_name': item.area_name
                }"
                :class="{
                  'active': item.area_id == areaId,
                }"
                @click.stop="handleFindOrganBelowArea(item)"
              >
                {{ item.area_name }}
              </button>
            </div>
          </scroller><scroller class="vux-scroller-organ" lock-x height="100%">
            <div v-if="areaOrganList.length">
              <button
                v-for="(item, index) in areaOrganList"
                :key="index"
                class="flex justify_between"
                v-bind="{
                  'data-street_id': item.street_id,
                  'data-area_name': item.area_name
                }"
                :class="{'active': handleActive(item)}"
                @click.stop="handleChooseAreaOrgan(item)"
              >
                <span class="county">{{ item.street_name }}</span><span v-if="item.org_num" class="amount"><span style="color: #00D2C3;">{{ item.org_num }}</span>家机构</span>
              </button>
            </div>
            <Loading :allLoaded="loadedAreaOrgan" :list="areaOrganList" :noMoreHTML="' '" />
          </scroller>
        </div>
        <div v-if="currentType == 'sort'" class="sort-container">
          <div
            v-for="(item, index) in sortList"
            :key="index"
            class="sort-item"
            :class="{ active: item.sortType == sortType }"
            @click.stop="handleSortType(item)"
          >
            {{ item.sortName }}
          </div>
        </div>
        <div v-if="currentType == 'filter'" class="filter-container">
          <div class="filter-wrapper">
            <div class="filter-item">
              <div class="title">医院等级（可多选）</div>
              <div class="flex wrap">
                <div
                  v-for="(item, index) in unitLevel"
                  :key="index"
                  class="item"
                  :class="{active: selectLevel.includes(item.seq)}"
                  @click.stop="handleLevelFilter(item)"
                >
                  {{ item.value }}
                </div>
              </div>
            </div>
            <div v-if="unitClass && unitClass.length" class="filter-item">
              <div class="title">医院类型（可多选）</div>
              <div class="flex wrap">
                <div
                  v-for="(item, index) in unitClass"
                  :key="index"
                  class="item"
                  :class="{active: selectClass.includes(item.id)}"
                  @click.stop="handleClassFilter(item)"
                >
                  {{ item.className }}
                </div>
              </div>
            </div>
            <div class="filter-item">
              <div class="title">医院服务（可多选）</div>
              <div class="flex wrap">
                <div
                  v-for="(item, index) in unitTag"
                  :key="index"
                  class="item"
                  :class="{active: selectTag.includes(item.id)}"
                  @click.stop="handleTagFilter(item)"
                >
                  {{ item.tagName }}
                </div>
              </div>
            </div>
          </div>
          <div class="button-wrapper flex">
            <button
              class="reset btn plain"
              @click="handleResetFilter"
            >
              重置
            </button>
            <button
              class="confirm btn primary"
              @click="handleApplyFilter"
            >
              确定
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="advert.ad_id && !channelInfo.no_information_server"
        class="dropdown-image"
        data-gio-view="true"
        data-event-id="ad_click"
        data-growing-container
        :data-growing-title="advert.ad_name"
        :data-event-params="JSON.stringify({
          id: advert.ad_id,
          adLocationName_cstVar: advert.location_name,
          adLocationId_cstVar: advert.locate_id,
          adName_cstVar: advert.ad_name
        })"
        :style="{'background-image': `url(${IMAGESDOMAIN + advert.image})`}"
        @click="goToAdvertPage"
      >
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import { Scroller } from 'vux'
import services from '@/services'
import { readCookie } from '@/utils/util'
import { getLatLng } from '@/components/mixin'
import Loading from '@/components/common/loading'

export default {
  mixins: [getLatLng],
  components: {
    Scroller,
    Loading
  },
  props: {
    // 偏移值，用于多重吸顶的时候位置调整
    offsetTop: {
      type: Number,
      required: false,
      default: 0
    },
    // props 传入的广告 id
    advertId: {
      type: [Number, String],
      require: true,
      default: 0
    },
    cat_id: {
      type: [Number, String],
      default: 0
    },
    channelInfo: {
      type: [Object, Array],
      default: () => {}
    },
    needFixTop: {
      type: Boolean,
      required: false,
      default: true
    },
    offsetScroll: {
      type: Number,
      required: false,
      default: 0
    },
    filterShow: {
      type: Boolean,
      required: false,
      default: true
    },
    bar_bt: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 路由参数
      depId: null,
      // 构造数据相关字段
      areaId: 0,
      areaOrgan: 0,
      sortType: 1,
      // 条件判断字段
      selectClass: [0],
      selectLevel: [0],
      selectTag: [0],
      // 接口数据字段
      areaList: [],
      sortList: [],
      unitClass: [],
      unitLevel: [],
      unitTag: [],
      areaOrganList: [],
      // 交互字段
      areaName: '全城',
      sortName: '智能排序',
      filterName: '筛选',
      showDropDown: false,
      currentType: '',
      processing: false,
      container: null,
      fixTop: false,
      advert: {},
      loadedAreaOrgan: false
    }
  },
  computed: {
    checkActive() {
      const classCheck = this.selectClass.some(item => item != 0)
      const levelCheck = this.selectLevel.some(item => item != 0)
      const tagCheck = this.selectTag.some(item => item != 0)
      return classCheck || levelCheck || tagCheck
    }
  },
  beforeDestroy() {
    this.hideDropDown()
    if (this.needFixTop) {
      document.removeEventListener('scroll', this.handleCheck)
    }
  },
  created() {
    this.depId = this.$route.query.dep_id
  },
  async mounted() {
    await Promise.all([
      this.getUnitFilter(),
      this.getNearArea(),
      this.getUnitSort(),
      this.getAreaAdvert()
    ])
    if (this.needFixTop) {
      this.container = document.getElementById('unitFilterBar')
      document.addEventListener('scroll', this.handleCheck)
    }
  },
  methods: {
    handleActive(item) {
      return item.street_id == this.areaOrgan && item.area_id == this.areaId
    },
    handleCheck() {
      if (!this.processing) {
        this.checkFix(this.container)
      }
    },
    checkFix(container) {
      const { top, y } = container.getBoundingClientRect()
      const distance = top || y || 0
      if (distance >= this.offsetTop) {
        this.fixTop = false
      } else {
        this.fixTop = true
      }
    },
    // 隐藏下拉菜单
    hideDropDown() {
      this.showDropDown = false
      $('#body').css({
        overflow: 'auto'
      })
    },
    // 获取筛选项
    getUnitFilter() {
      const params = {
        cat_id: this.depId
      }
      services.unit.getUnitFilter(params).then(res => {
        const { unitClass, unitLevel, unitTag } = res.data
        this.unitClass = unitClass
        this.unitLevel = unitLevel
        this.unitTag = unitTag
      })
    },
    getNearArea() {
      this.loadedAreaOrgan = false
      const params = {
        cat_id: this.depId,
        area_id: this.areaId,
        city_id: readCookie('location_city_id')
      }
      services.unit.getNearArea(params).then(res => {
        const { area_list, street_list } = res.data
        this.areaList = area_list
        this.areaOrganList = street_list
        this.loadedAreaOrgan = true
      })
    },
    getUnitSort() {
      services.unit.getUnitSort().then(res => {
        this.sortList = res.data
      })
    },
    // 访问广告页面
    goToAdvertPage() {
      document.location.href = this.advert.url
    },
    // 选择医院分类
    handleClassFilter({ id, className }) {
      if (this.selectClass[0] == 0 && id != 0) {
        this.selectClass.pop()
        this.selectClass.push(id)
      } else if (id == 0) {
        this.selectClass = [0]
      } else {
        const index = this.selectClass.findIndex(item => id == item)
        if (index >= 0) {
          this.selectClass.splice(index, 1)
        } else {
          this.selectClass.push(id)
        }
      }
    },
    // 选择医院等级
    handleLevelFilter({ seq, value }) {
      if (this.selectLevel[0] == 0 && seq != 0) {
        this.selectLevel.pop()
        this.selectLevel.push(seq)
      } else if (seq == 0) {
        this.selectLevel = [0]
      } else {
        const index = this.selectLevel.findIndex(item => seq == item)
        if (index >= 0) {
          this.selectLevel.splice(index, 1)
        } else {
          this.selectLevel.push(seq)
        }
      }
    },
    // 选择医院服务/标签
    handleTagFilter({ id, tagName }) {
      if (this.selectTag[0] == 0 && id != 0) {
        this.selectTag.pop()
        this.selectTag.push(id)
      } else if (id == 0) {
        this.selectTag = [0]
      } else {
        const index = this.selectTag.findIndex(item => id == item)
        if (index >= 0) {
          this.selectTag.splice(index, 1)
        } else {
          this.selectTag.push(id)
        }
      }
    },
    // 重置筛选项
    handleResetFilter() {
      this.selectClass = [0]
      this.selectLevel = [0]
      this.selectTag = [0]
    },
    // 应用筛选项
    handleApplyFilter() {
      this.handleCallBack()
    },
    // 寻找指定地区下的机构列表
    handleFindOrganBelowArea({ area_id, area_name }) {
      if (area_id == 0 && area_name == '全城') {
        this.areaId = 0
        this.areaOrgan = 0
        this.areaName = '全城'
      } else {
        this.areaId = area_id
        this.areaName = ''
        this.areaName = area_name
      }
      this.getNearArea()
      this.getAreaAdvert(area_id)
    },
    // 获取指定地区下的广告
    getAreaAdvert(areaId) {
      services.common.getAdvertData({
        location_id: this.advertId,
        dep_id: this.cat_id,
        area_id: areaId
      }).then(res => {
        this.advert = res.data[this.advertId] && res.data[this.advertId][0] || {}
      })
    },
    // 调整排序
    handleSortType({ sortName, sortType }) {
      this.sortType = sortType
      this.sortName = sortName
      this.handleCallBack()
    },
    // 选择地区下机构
    handleChooseAreaOrgan(item) {
      this.areaOrgan = item.street_id
      this.streetName = item.steet_name
      this.currentType = 'area'
      if (item.street_name != '全部') {
        this.areaName = item.street_name
      } else if (item.street_name == '全部' && item.area_id == 0) {
        this.areaName = '全城'
      } else {
        this.areaName = item.area_name
      }
      this.handleCallBack()
    },
    // 点击筛选条
    handleToggleFilter(type) {
      if (this.currentType == type && this.showDropDown) {
        this.handleCallBack()
        return
      }
      this.currentType = type
      this.showDropDown = true
      this.$nextTick(() => {
        // 没有吸顶的情况下要做自动定位
        // 滚动筛选条到视图顶部
        if (!this.fixTop) {
          var offsetTop = $('#unitFilterBar').offset().top
          $(window).scrollTop(offsetTop - this.offsetTop - this.offsetScroll)
        }
        // 滚动锁定
        $('#body').css({
          overflow: 'hidden'
        })
      })
    },
    getFilterParams() {
      return {
        area: {
          id: this.areaId,
          name: this.areaName,
          street_id: this.areaOrgan
        },
        sort: {
          name: this.sortName,
          type: this.sortType
        },
        filter: {
          class: this.selectClass,
          level: this.selectLevel,
          tag: this.selectTag
        }
      }
    },
    handleClickShadow() {
      this.handleCallBack()
    },
    handleCallBack() {
      this.hideDropDown()
      const params = this.getFilterParams()
      this.$emit('update', params)
    }
  }
}
</script>
<style lang="scss" scoped>
.bt_f5 {
  border-bottom: 1px solid #F5F5F5;
}
.unit-filter-bar {
  position: relative;
  z-index: 250;
  width: 100%;
  height: 100%;
}
.placeholder {
  display: block;
  position: relative;
  width: 100%;
  height: 1.093333rem;
}
.filter-bar-current {
  position: absolute;
  top: 0;
  width: 100%;
  // border-bottom: 1px solid #F5F5F5;
  background-color: #FFF;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 250;
    width: 100%;
  }
}
.current-item {
  position: relative;
  width: 100%;
  max-width: 3.333333rem;
  height: 1.066667rem;
  padding: 0 .133333rem;
  font-size: .373333rem;
  line-height: 1.066667rem;
  font-weight: 500;
  text-align: center;
  color: #666;
  background-color: #FFF;
  .text {
    display: inline-block;
    width: auto;
    max-width: 100%;
    padding: 0 .133333rem;
    font-size: .373333rem;
    + .iconfont {
      display: inline-block;
      &.filter {
        height: .96rem;
        margin-top: 0;
        font-size: .266667rem;
      }
    }
  }
  &.active {
    color: #00D2C3;
    .text {
      color: #00D2C3;
    }
  }
}
.dropdown-area {
  position: relative;
  background-color: rgba(0, 0, 0, .6);
  &.fixed {
    position: fixed;
    width: 100%;
  }
  .dropdown-body {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    // min-height: 6.08rem;
    // max-height: 11.68rem;
    background-color: #FFF;
    transition: all .3s ease;
  }
  .area-container {
    height: 62vh;
    // min-height: 6.08rem;
    // max-height: 11.68rem;
    overflow: hidden;
    .vux-scroller-area {
      display: inline-block;
      position: relative;
      width: 3.333333rem;
      height: 100%;
      background-color: #F5F5F5;
      button {
        width: 100%;
        height: 1.28rem;
        padding-left: .4rem;
        font-size: .373333rem;
        line-height: 1.28rem;
        text-align: left;
        color: #666;
        background: #FFF;
        background-color: #F5F5F5;
        &.active {
          color: #00D2C3;
          background-color: #FFF;
        }
        &.disabled {
          color: #CCC;
        }
      }
    }
    .vux-scroller-organ {
      display: inline-block;
      position: relative;
      width: calc(100vw - 3.333333rem);
      height: 100%;
      text-align: left;
      vertical-align: top;
      background-color: #FFF;
      button {
        width: 100%;
        height: 1.28rem;
        padding-right: .4rem;
        padding-left: .533333rem;
        font-size: .426667rem;
        line-height: 1.28rem;
        background: #FFF;
        background-color: #FFF;
        .county {
          color: #333;
        }
        .amount {
          font-size: .373333rem;
          color: #666;
        }
        &.active {
          color: #00D2C3;
          .county {
            color: #00D2C3;
          }
          .amount {
            color: #00D2C3;
          }
        }
      }
      .no-organ {
        width: 100%;
        height: 1.28rem;
        padding-right: .4rem;
        padding-left: .533333rem;
        font-size: .426667rem;
        line-height: 1.28rem;
        background: #FFF;
        background-color: #FFF;
      }
    }
  }
  .sort-container {
    // min-height: 6.08rem;
    // max-height: 11.68rem;
    overflow: hidden;
    .sort-item {
      width: 100%;
      height: 1.28rem;
      padding-left: .4rem;
      font-size: .426667rem;
      line-height: 1.28rem;
      font-weight: 400;
      color: #333;
      &.active {
        color: #00D2C3;
      }
    }
  }
  .filter-container {
    .filter-wrapper {
      // height: 9.066667rem;
      height: 50vh;
      overflow: auto;
      padding-top: .4rem;
      padding-bottom: .4rem;
    }
    .button-wrapper {
      width: 100%;
      height: 1.333333rem;
      padding: .26667rem .933333rem;
      border-top: 1px solid #E5E5E5;
      button {
        width: 3.68rem;
        height: .8rem;
        margin: 0 .4rem;
        border-radius: .4rem;
        font-size: .373333rem;
        &.plain {
          border: 1px solid rgba(0, 211, 194, 1);
          color: #00D2C3;
          background: #FFF;
        }
        &.primary {
          border: 1px solid #00D3C2;
          color: #FFF;
          background: #00D3C2;
        }
      }
    }
    .filter-item {
      padding: 0 .4rem;
      .title {
        padding-bottom: .133333rem;
        font-size: .373333rem;
        line-height: .533333rem;
        font-weight: bold;
        color: #666;
      }
      .item {
        height: .8rem;
        margin-top: .266667rem;
        margin-right: .266667rem;
        padding: 0 .32rem;
        border-radius: 2.666667rem;
        border: 1px solid #F5F5F5;
        font-size: .373333rem;
        line-height: .8rem;
        color: rgba(51, 51, 51, 1);
        background: #F5F5F5;
        &.active {
          border: 1px solid #00D2C3;
          color: #FFF;
          background: #00D2C3;
        }
      }
      + .filter-item {
        margin-top: .8rem;
      }
    }
  }
  .dropdown-image {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    max-height: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
