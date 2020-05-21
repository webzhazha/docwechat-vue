<template>
  <div v-drag="greet" class="add" :class="{ t: isTransition }">
    <a
      
      id="link"
      href="javascript:;"
      class="block"
      @click="goConsult"
    >
      <img :src="imgs" alt="" class="w60 h60 " >
    </a>
  </div>
</template>

<script>
import $ from 'jquery'
import {pullDocAssis} from '../mixins/pullNativeFunc'
export default {
  data() {
    return {
      imgs: require('../assets/image/doctor_consult.png'),
      isTransition: false
    }
  },
  mixins: [pullDocAssis],
  mounted() {
    this.setLink()
  },
  methods: {
    goConsult(){
      console.log('上面调用');
      
      this.pullDocAssis()
    },
    setLink() {
      var that = this
      // 没有广告位
      let startTime = ''
      let endTime = ''
      $(document.body).on('touchstart', '#link', function() {
        startTime = new Date().getTime()
      })
      $(document.body).on('touchend', '#link', function() {
        // v-drag 中阻止了a 标签父元素的默认事件
        endTime = new Date().getTime()
        if (endTime - startTime < 200) {
          console.log('调用');
          that.debounce(()=>{
            console.log('触发');
            
            that.pullDocAssis()
          },1000)()
          
        }
      })
    },
    greet(val) {
      this.isTransition = val === 'end'
    },
    // 防抖函数 立即执行
    debounce(func, wait) {
        let timer;
        return function() {
          let context = this; // 这边的 this 指向谁?
          let args = arguments; // arguments中存着e
          if (timer) clearTimeout(timer);
          let callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, wait)
          if (callNow) func.apply(context, args);
        }
    }
  }
}
</script>
<style lang="scss" scoped>
.block {
  display: block;
}
.add {
  position: fixed;
  right: .266667rem;
  bottom: 1.6rem;
  z-index: 10000;
  width: 1.76rem;
  height: 2.66667rem;
  text-align: center;
  img {
    display: block;
    width: 1.76rem;
    height: 1.76rem;
    overflow: hidden;
  }
}
.t {
  transition: left 1s;
}
</style>
