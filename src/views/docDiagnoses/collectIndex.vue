<template>
  <div class="collectIndex">
    <div class="nav">
      <span class="">
        <i class="iconfont fs18 lh44">&#xe688;</i>
      </span>
      <span class="c333 fs18 typo_bold lh44">我的收藏</span>
      <span class="fs16 typo_blue lh44" @click="editEvent">编辑</span>
    </div>
    <div v-if="!edit">
      <HallDocItem :isHall="false" />
    </div>
    <div v-else class="pl25">
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">
          <div class="hallDocItem bt_gray">
            <div class="backgroundimg doc_img mr16" :style="'background-image: url(),url(//wximg.91160.com/wechat/img/common/default.png)'"></div>
            <div class="relative flex1">
              <div class="mb8">
                <span class="fs18 c333 typo_bold mr5">文冰冰</span>
                <span class="fs14 c666 typo_bold">主任医师</span>
              </div>
              <div class="fs14 c999 typo_bold mb15">
                深圳第二人民医院
              </div>
              <div class="illness">
                <span>过敏</span>
                <span>湿疹</span>
                <span>皮炎</span>
              </div>
              <div>
                <span class="price typo_bold">￥210</span>
                <span class="c_ccc">
                  <i class="iconfont">&#xe697;</i>
                  深圳南山</span>
              </div>
            </div>
          </div>
        </van-checkbox>
        <van-checkbox name="a">
          <div class="hallDocItem bt_gray">
            <div class="backgroundimg doc_img mr16" :style="'background-image: url(),url(//wximg.91160.com/wechat/img/common/default.png)'"></div>
            <div class="relative flex1">
              <div class="mb8">
                <span class="fs18 c333 typo_bold mr5">文冰冰</span>
                <span class="fs14 c666 typo_bold">主任医师</span>
              </div>
              <div class="fs14 c999 typo_bold mb15">
                深圳第二人民医院
              </div>
              <div class="illness">
                <span>过敏</span>
                <span>湿疹</span>
                <span>皮炎</span>
              </div>
              <div>
                <span class="price typo_bold">￥210</span>
                <span class="c_ccc">
                  <i class="iconfont">&#xe697;</i>
                  深圳南山</span>
              </div>
            </div>
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="cancel" @click="cancelCollect">
      取消收藏(2)
    </div>
    <van-action-sheet
  v-model="show"
  :actions="actions"
  cancel-text="返回"
  @cancel="onCancel"
  @select="selectCancel"
/>
  </div>
</template>
<script>
  const HallDocItem = () => import('./components/hallDocItem')
  export default {
    data() {
      return {
        edit: true,
        result: ['a', 'b'],
        show: false,
        actions: [
          { name: '确认取消收藏' , color: '#FF0000'},
        ],
      }
    },
    components: { HallDocItem },
    methods: {
      selectCancel(){
        this.show = false
      },
      cancelCollect(){
        this.show = true
      },
      editEvent() {
        this.edit = !this.edit
      },
      onCancel() {
        this.show = false
      },
    }
  }
</script>
<style lang="scss">
  .collectIndex {
    background-color: #fff;
    .cancel {
      position: fixed;
      left: .666667rem;
      bottom: 1.093333rem;
      width: 8.72rem;
      height: 1.173333rem;
      border-radius: 1.173333rem;
      background-color: #009EE6;
      color: #fff;
      font-size: .426667rem;
      text-align: center;
      line-height: 1.173333rem;
    }
    .pl25 {
      padding-left: .666667rem;
    }
    .van-checkbox {
      align-items: flex-start!important;
      .van-checkbox__icon {
        margin-top: .933333rem;
      }
    }
    .nav {
      height: 1.173333rem;
      display: flex;
      padding: 0 .4rem;
      justify-content: space-between;
    }

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
    }
  }
</style>