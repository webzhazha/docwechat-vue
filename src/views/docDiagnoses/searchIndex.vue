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
  @load="onLoad"
  offset='50'
>
  <div v-for="(item,index) in docList" :key="index">
    <HallDocItem :isHall="false" :docItem="item"/>
  </div>
</van-list>
  
  </div>
</template>
<script>
import { titleLucency } from '@/mixins/pullNativeFunc'
import service from '_services/'
const HallDocItem = () => import('./components/hallDocItem')
export default {
  data() {
    return {
      value: '',
      docList: [],
      page: 1,
      loading: false,
      finished: false,
    };
  },
  mixins: [titleLucency],
  components: {HallDocItem},
  mounted() {
    this.titleLucency()
  },
  methods: {
    onLoad(){
      if(this.value){
        this.page++
        this.get_result(this.value)
      }else {
        this.loading = false
      }
      
    },
    onSearch(val) {
      console.log(val);
      console.log(this.value);
      this.docList = []
      this.get_result(val)
    },
    onCancel() {
      console.log('取消');
      this.$router.push("./index")
    },
    onClear(){
      console.log('清除');
      this.docList = []
      this.page = 1
    },
    get_result(val){
      service.docDiagnoses.get_search({
        keywords: val,
        page: 1,
        size: 10,
        account_user_id: this.account_user_id
      }).then(res=>{
        console.log(res);
        this.docList = this.docList.concat(res.data)
        this.loading = false
      })
    }
  },
}
</script>
<style lang="scss">
  
</style>