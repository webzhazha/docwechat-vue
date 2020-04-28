<template>
  <div>
    <div class="search" @click="goSearch">
      <i class="iconfont mr10">&#xe725;</i>
      <span>搜索医生以及诊疗服务</span>
    </div>
    <div class="mb25">
      <CommonBanner id="25" />
    </div>
    <van-sticky :offset-top="90">
      <div id="bar">
        <div class="hall_tab pl15 bg_white">
          <div class="typo_black fs16 typo_bold">医生会诊</div>
        </div>
        <DiagFilterBar @scrollToTop="scrollToTop" @update="changeFilterData" />
      </div>
    </van-sticky>
    <div :style="'min-height:' + height">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        v-if="docList.length > 0"
        offset="50"
      >
        <div v-for="(item, index) in docList" :key="index">
          <HallDocItem :docItem="item" />
        </div>
      </van-list>
    </div>

    <NoData v-if="!loading && docList.length == 0" :height="height" />
  </div>
</template>
<script>
import $ from "jquery";
import service from "_services/";
const CommonBanner = () => import("@/components/commonBanner");
const DiagFilterBar = () => import("../components/diagFilterBar");
const HallDocItem = () => import("../components/hallDocItem");
const NoData = () => import("@/components/noData");
export default {
  data() {
    return {
      docList: [],
      loading: false,
      finished: false,
      page: 1,
      height: "100vh",
    };
  },
  components: { CommonBanner, DiagFilterBar, HallDocItem, NoData },
  mounted() {
    this._getHalldoctor();
    this.$nextTick(() => {
      setTimeout(() => {
        console.log($("#bar").height());
        this.height = $("body").height() - $("#bar").height() - 80 + "px";
      }, 500);
    });
  },
  methods: {
    goSearch() {
      this.$router.push("../docDiagnoses/searchIndex");
    },
    onLoad() {
      this.page++;
      this._getHalldoctor({
        city_id: "",
        cat_id1: "",
        cat_id2: "",
        sort_type: 0,
      });
    },
    _getHalldoctor(params) {
      service.docDiagnoses
        .getHalldoctor({
          page: this.page,
          size: 5,
          account_user_id: this.account_user_id,
          ...params,
        })
        .then((res) => {
          console.log(res);
          this.docList = this.docList.concat(res.data);
          this.loading = false;
          if (res.data.length < 3) {
            this.finished = true;
          }
        });
    },
    changeFilterData(params) {
      this.page = 1;
      this.docList = [];
      this.finished = false;
      this._getHalldoctor(params);
    },
    scrollToTop() {
      const offsetTop =
        parseInt(
          $("#bar")
            .parent()
            .parent()
            .offset().top
        ) - 90;
      $("html,body").animate({ scrollTop: offsetTop }, 300);
    },
  },
};
</script>
<style lang="scss" scoped>
.hall_tab {
  height: 1.173333rem;
  line-height: 1.173333rem;
}

.search {
  height: 0.906667rem;
  width: 9.2rem;
  background-color: #eee;
  border-radius: 0.906667rem;
  margin-left: 0.4rem;
  line-height: 0.906667rem;
  margin-top: 0.373333rem;
  margin-bottom: 0.32rem;
  padding-left: 0.4rem;
}
</style>
