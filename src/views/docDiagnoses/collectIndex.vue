<template>
  <div class="collectIndex">
    <div class="h45px">
      <div class="nav">
        <span class="">
          <i class="iconfont fs18 lh44" @click="returns">&#xe688;</i>
        </span>
        <span class="c333 fs18 typo_bold lh44">我的收藏</span>
        <span class="fs16 typo_blue lh44" @click="editEvent">{{
          edit ? "取消" : "编辑"
        }}</span>
      </div>
    </div>
    <!-- <van-sticky z-index="100" :offset-top="45">
      <div class="flex textc lh44 bt_gray c999 bg_white" @click="checkTab">
        <div class="flex1 relative" :class="{'active':cartab=='consultation'}" data-id="consultation">会诊医生</div>
        <div class="flex1 relative" :class="{'active':cartab=='checkout'}" data-id="checkout">检验检查</div>
      </div>
    </van-sticky> -->
    <div v-if="cartab=='consultation'">
      <div v-if="!edit">
        <div v-for="(item, index) in docList" :key="index">
          <CollectDocItem :docItem="item" />
        </div>
      </div>
      <div v-else class="pl25">
        <van-checkbox-group v-model="select">
          <van-checkbox v-for="(item, index) in docList" :key="index" :name="item.account_user_id">
            <CollectDocItem :docItem="item" />
          </van-checkbox>
        </van-checkbox-group>
        <div class="h88"></div>
      </div>
    </div>
    <div v-if="cartab=='checkout'">
      <div v-if="!edit">
        <div v-for="(item, index) in checkList" :key="index">
          <CheckoutItem :checkItem="item" />
        </div>
      </div>
      <div v-else class="pl25">
        <van-checkbox-group v-model="select">
          <van-checkbox v-for="(item, index) in checkList" :key="index" :name="item.id">
            <CheckoutItem :checkItem="item" />
          </van-checkbox>
        </van-checkbox-group>
        <div class="h88"></div>
      </div>
    </div>
    <div v-if="edit" class="cancel" @click="cancelCollect">
      取消收藏({{ select.length }})
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
import { titleLucency } from '@/mixins/pullNativeFunc'
import service from '_services/'
const CollectDocItem = () => import('./components/collectDocItem')
const CheckoutItem = () => import('./components/checkoutItem')
export default {
  mixins: [titleLucency],
  components: { CollectDocItem, CheckoutItem },
  data() {
    return {
      cartab: 'consultation',
      edit: false,
      docList: [],
      page: 1,
      checkList: [],
      checkPage: 1,
      select: [],
      show: false,
      actions: [{ name: '确认取消收藏', color: '#FF0000' }],
      tabs: [{
        id: 'consultation',
        name: '会诊医生'
      },
      {
        id: 'checkout',
        name: '检验检查'
      }
      ]
    }
  },
  mounted() {
    this.titleLucency()
    this._get_collect_list()
    this._get_collect_inspection_list()
  },
  methods: {
    checkTab(e) {
      console.log(e)
      this.cartab = e.target.dataset.id
      this.select = []
      this.edit = false
    },
    returns() {
      this.$router.go(-1)
    },
    _get_collect_inspection_list(){
      service.docDiagnoses
        .get_collect_inspection_list({
          page: this.page,
          size: 100
        })
        .then((res) => {
          this.checkList = res.data.list
        })
    },
    _get_collect_list() {
      try {
        service.docDiagnoses
        .get_collect_list({
          page: this.page,
          size: 100
        })
        .then((res) => {
          this.docList = res.data.list
        })
      } catch (err){
        console.log(err)
      }
      
    },
    // 确认取消
    selectCancel() {
      if(this.cartab=='consultation'){
         service.docDiagnoses
        .cancel_collect_doctor({
          collect_account_user_ids: this.select.join(',')
        })
        .then((res) => {
          this.page = 1
          this._get_collect_list()
          this.show = false
          this.edit = false
          this.select = []
        })
      }else {
         service.docDiagnoses
        .multi_cancel_inspection({
          item_ids: this.select.join(',')
        })
        .then((res) => {
          this.page = 1
          this._get_collect_inspection_list()
          this.show = false
          this.edit = false
          this.select = []
        })
      }
     
    },
    cancelCollect() {
      if (this.select.length == 0) {
        this.$toast('请选择至少一个医生')
        return
      }
      this.show = true
    },
    editEvent() {
      this.edit = !this.edit
      this.select = []
    },
    onCancel() {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
  .collectIndex {
    background-color: #fff;
    min-height: 100vh;
    .active {
      color: #009EE6;
      font-weight: bold;
    }

    .active::before {
      content: " ";
      width: 62px;
      height: 3px;
      background-color: #009EE6;
      position: absolute;
      bottom: 0;
      left: 62px;
      z-index: 9999;
    }

    .mb88 {
      margin-bottom: 2.346667rem;
    }

    .h88 {
      height: 2.346667rem;
    }

    .cancel {
      position: fixed;
      left: 0.666667rem;
      bottom: 1.093333rem;
      width: 8.72rem;
      height: 1.173333rem;
      border-radius: 1.173333rem;
      background-color: #009ee6;
      color: #fff;
      font-size: 0.426667rem;
      text-align: center;
      line-height: 1.173333rem;
    }

    .pl25 {
      padding-left: 0.666667rem;
    }

    .van-checkbox {
      align-items: flex-start !important;

      .van-checkbox__icon {
        margin-top: 0.933333rem;
      }

      .van-checkbox__label {
        width: 100%;
      }
    }

    .nav {
      position: fixed;
      top: 0;
      z-index: 9999;
      width: 100%;
      height: 45px;
      display: flex;
      padding: 0 0.4rem;
      justify-content: space-between;
      background-color: #fff;
    }

    .h45px {
      height: 45px;
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
