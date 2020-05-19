<template>
  <div class="searchIndex bg_white" v-title data-title="搜索">
    <van-sticky>
      <form action="/">
      <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="搜索医生以及诊疗服务"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
      />
      </form>
    </van-sticky>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text=""
      offset="50"
      @load="onLoad"
    >
      <div v-for="(item, index) in docList" :key="index">
        <HallDocItem :isHall="false" :docItem="item" />
      </div>
    </van-list>
  </div>
</template>
<script>
import $ from 'jquery'
import { titleLucency } from '@/mixins/pullNativeFunc'
import service from '_services/'
const HallDocItem = () => import('./components/hallDocItem')
export default {
  mixins: [titleLucency],
  components: { HallDocItem },
  data() {
    return {
      value: '',
      docList: [],
      page: 1,
      loading: false,
      finished: false
    }
  },
  mounted() {
    this.titleLucency()
    this.$nextTick(()=>{
      $('.van-field__control').focus()
    })
  },
  methods: {
    onLoad() {
      if (this.value) {
        this.page++
        this.get_result(this.value)
      } else {
        this.loading = false
      }
    },
    onSearch(val) {
      this.docList = []
      this.get_result(val)
    },
    onCancel() {
      this.$router.push('./index')
    },
    onClear() {
      this.docList = []
      this.finished = false
      this.page = 1
    },
    get_result(val) {
      service.docDiagnoses
        .get_search({
          keywords: val,
          page: this.page,
          size: 10,
          account_user_id: this.account_user_id
        })
        .then((res) => {
          this.docList = this.docList.concat(res.data)
          this.loading = false
          if (res.data.length == 0 || res.data.length < 10) {
            this.finished = true
          }
        })
    }
  }
}
</script>
<style lang="scss">
.searchIndex {
  .van-search__action {
    color: #009EE6;
  }
  .van-search__content {
    background-color: #eee;
    height: .906667rem;
    border-radius: .453333rem;
  }
  .van-icon-search::before {
    content: '\e725';
    font-family: "iconfont";
    color: #999;
    margin-left: .213333rem;
  }
  .van-field__left-icon {
    margin-right: .213333rem;
  }
  .van-field__control {
    margin-top: .053333rem;
  }
  .van-cell {
    padding-top: .08rem;
  }
}
</style>
