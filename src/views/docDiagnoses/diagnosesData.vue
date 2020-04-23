<template>
  <div class="diagnosesData">
    <div class="top">
      <div class="left">
        <div class="typo_white fs14 mb10">累计转诊/会诊收入(元)</div>
        <div class="typo_white fs24 typo_bold">256855.25</div>
      </div>
      <div class="right">
        <div class="typo_white fs14 mb10">本月收入(元)</div>
        <div class="typo_white fs24 typo_bold">+430</div>
      </div>
    </div>
    <div class="bottom mt__15">
      <div class="items">
        <div class="item_left">
          <div class="mb10">
            <img :src="STATICDOMAIN + '/wechat/img/comment/upload.png'" alt="" class="w30 h30">
          </div>
          <div class="c333 fs16">接收会诊</div>
        </div>
        <div class="item_right">
          <div class="num">
            <div class="typo_black0 mb10 typo_bold fs20">67</div>
            <div class="c999">次数</div>
          </div>
          <div class="income">
            <div class="cFF8100 fs20 mb10">1566</div>
            <div class="c999">收益元</div>
          </div>
          <div class="arrow">
            <i class="iconfont">&#xe6ae;</i>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="items">
        <div class="item_left">
          <div class="mb10">
            <img :src="STATICDOMAIN + '/wechat/img/comment/upload.png'" alt="" class="w30 h30">
          </div>
          <div class="c333 fs16">接收会诊</div>
        </div>
        <div class="item_right">
          <div class="num">
            <div class="typo_black0 mb10 typo_bold fs20">67</div>
            <div class="c999">次数</div>
          </div>
          <div class="income">
            <div class="cFF8100 fs20 mb10">1566</div>
            <div class="c999">收益元</div>
          </div>
          <div class="arrow">
            <i class="iconfont">&#xe6ae;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cFF8100 {
  color: #FF8100;
}
.mt__15 {
  margin-top: -0.4rem;
}
  .diagnosesData {
    background-color: #FCFCFC;
    height: 100%;
    .top {
      display: flex;
      height: 3.706667rem;
      background-color: #009EE6;
      padding-left: .4rem;
      padding-right: .4rem;
      padding-top: .693333rem;
      .left {
        width: 5.866667rem;
      }
      .right {
        flex: 1;
      }
    }
    .bottom {
      background-color: #fff;
      width: 9.2rem;
      height: 3.093333rem;
      margin-left: .4rem;
      overflow: hidden;
      box-shadow:0px 18px 20px 0px rgba(178,178,178,0.06);
      border-radius:4px;
      border:1px solid rgba(235,235,235,1);
      margin-bottom: .64rem;
      .items {
        display: flex;
        text-align: center;
        height: 100%;
        .item_left {
          width: 2.8rem;
          padding-top: .8rem;
        }
        .item_right {
          flex: 1;
          display: flex;
          padding-top: .8rem;
          background-color: #FCFCFC;
          .num {
              flex: 1;
          }
          .income {
            flex: 1;
          }
          .arrow {
            flex: 1;
            padding-top: .533333rem;
          }
        }
      }
    }
  }
</style>