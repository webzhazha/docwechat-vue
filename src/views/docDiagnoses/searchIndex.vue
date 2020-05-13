<template>
  <div class="bg_white">
    <van-sticky>
      <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
      />
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
<style lang="scss"></style>
