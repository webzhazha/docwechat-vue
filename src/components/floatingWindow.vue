<template>
  <div>
    <VueDragResize :isActive="true"  :isResizable="false" :parentLimitation="true" :parentW="parentW" :parentH="parentH" :w='60' :h='60' :x="100" :y="100" :z="999" @clicked="goPullDocAssis" @dragging="drag">
      <div>
        <img :src="imgs" alt="" class="w60 h60 " >
      </div>
      
    </VueDragResize>
  </div>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
import {pullDocAssis} from '@/mixins/pullNativeFunc'
export default {
  data() {
    return {
      imgs: require('../assets/image/doctor_consult.png'),
      parentW: 300,
      parentH: 600
    }
  },
  mixins: [pullDocAssis],
  mounted(){
    console.log(document.body.clientWidth);
    this.parentW = document.body.clientWidth
    console.log(document.body.clientHeight);
    this.parentH = document.body.clientHeight
    
  },
  components: {VueDragResize},
  methods: {
    goPullDocAssis(){
      console.log('点击');
      
    },
    drag(){
      console.log('拖拽');
      
    }
  },
}
</script>
<style lang="scss">
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background-color: red;
}
.vdr.active:before {
  outline: none;
}
</style>