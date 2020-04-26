<template>
  <div>
    <div class="hallDocItem bt_gray">
      <div class="backgroundimg doc_img mr16" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
      <div class="relative flex1">
        <div class="mb8">
          <span class="fs18 c333 typo_bold mr5">{{docItem.doctor_name}}</span>
          <span class="fs14 c666 typo_bold">{{docItem.zc_name}}</span>
        </div>
        <div class="fs14 c999 typo_bold mb15">
          {{docItem.unit_name}}
        </div>
        <div class="illness" v-if="docItem.ill_name">
          <span v-for="item in docItem.ill_name" :key="item">{{item}}</span>
        </div>
        <div>
          <span class="price typo_bold">￥{{docItem.price}}</span>
          <span class="c_ccc">
            <i class="iconfont">&#xe697;</i>
            {{docItem.city_area}}</span>
        </div>
        <template v-if="isHall" >
          <div class="collect" v-if="docItem.is_followed==0" @click='collect(docItem.doctor_id)'>
            <i class="iconfont">&#xe736;</i> 收藏
          </div>
          <div class="collect yet" v-if="docItem.is_followed==1">
            已收藏
          </div>
        </template>
        
      </div>
    </div>
  </div>
</template>
<script>
import service from "_services/"
export default {
  data() {
    return {

    }
  },
  props: {
    isHall: {
      type: [Boolean],
      default: true
    },
    docItem: {
      type: [Object],
      defalut: () => {}
    }
  },
  methods: {
    collect(id){
      service.docDiagnoses.collect_doctor({
        doctor_id: id
      }).then(res=>{
        console.log(res);
        if(res.result_code==1){
          this.docItem.is_followed = 1
        }else {
          this.$toast('收藏失败')
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .hallDocItem {
    display: flex;
    padding: 0.533333rem 0.4rem;

    .doc_img {
      width: 1.333333rem;
      height: 1.333333rem;
      border-radius: 1.333333rem;
      margin-right: 0.4rem;
    }

    .price {
      color: #ff8100;
      font-size: 0.426667rem;
      margin-right: 0.933333rem;
    }

    .illness {
      overflow: hidden;
      margin-bottom: 0.426667rem;

      span {
        float: left;
        width: 0.96rem;
        height: 0.48rem;
        border-radius: 0.053333rem;
        text-align: center;
        line-height: 0.426667rem;
        color: #ffb937;
        border: 1px solid #ffb937;
        margin-right: 0.133333rem;
      }
    }

    .collect {
      position: absolute;
      top: 0;
      right: 0.266667rem;
      width: 1.866667rem;
      height: 0.853333rem;
      color: #009ee6;
      border: 1px solid #009ee6;
      text-align: center;
      line-height: 0.8rem;
      border-radius: 0.853333rem;
      &.yet {
        color: #999;
        background-color: #F7F7F7;
        border: none;
      }
    }
  }
</style>