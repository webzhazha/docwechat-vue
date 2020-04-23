<template>
  <div class="bg_white">
    <van-search
    v-model="value"
    shape="round"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
  <div>
    <HallDocItem :isHall="false" />
  </div>
  </div>
</template>
<script>
const HallDocItem = () => import('./components/hallDocItem')
export default {
  data() {
    return {
      value: '',
    };
  },
  components: {HallDocItem},
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {

    },
  },
}
</script>
<style lang="scss">
  
</style>