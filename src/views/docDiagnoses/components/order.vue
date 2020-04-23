<template>
  <div class="diagnoses_doc">
    <!-- 会诊中 -->
    <div class="bg_white mb15">
      <div class="top">
        <span class="status ">会诊中</span>
        <span class="c999 fs14 fr lh40">还剩23关闭服务</span>
      </div>
      <div class="content">
        <div class="left">
          <div class="info">
            <div class="backgroundimg info_img mr15" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
            <div>
              <div>
                <span class="fs18 c333 typo_bold">位欢旭</span>
                <span class="fs14 c333"> 男 322岁</span>
              </div>
              <div class="c999 fs14">手术 | 糖尿病</div>
            </div>
          </div>
          <div class="c999 fs14">
            向 求丽庆 副主任发起
          </div>
        </div>
        <div class="right">
          <div class="price">￥140</div>
          <div class="c999 fs14 typo_bold">预计收益</div>
        </div>
      </div>
    </div>
    <div class="bg_white mb15">
      <div class="top">
        <span class="status ">待确认</span>
        <span class="c999 fs14 fr lh40">还剩23关闭服务</span>
      </div>
      <div class="content">
        <div class="left">
          <div class="info">
            <div class="backgroundimg info_img mr15" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
            <div>
              <div>
                <span class="fs18 c333 typo_bold">位欢旭</span>
                <span class="fs14 c333"> 男 322岁</span>
              </div>
              <div class="c999 fs14">手术 | 糖尿病</div>
            </div>
          </div>
          <div class="c999 fs14">
            向 求丽庆 副主任发起
          </div>
        </div>
        <div class="right">
          <div class="price">￥140</div>
          <div class="c999 fs14 typo_bold">预计收益</div>
        </div>
      </div>
    </div>
    <div class="typo_black fs22 typo_bold mb15">历史订单</div>
    <div class="bg_white mb15">
      <div class="top">
        <span class="status ">待确认</span>
        <span class="c999 fs14 fr lh40">还剩23关闭服务</span>
      </div>
      <div class="content">
        <div class="left">
          <div class="info">
            <div class="backgroundimg info_img mr15" :style="generateImageUrl('','/wechat/img/common/default.png')"></div>
            <div>
              <div>
                <span class="fs18 c333 typo_bold">位欢旭</span>
                <span class="fs14 c333"> 男 322岁</span>
              </div>
              <div class="c999 fs14">手术 | 糖尿病</div>
            </div>
          </div>
          <div class="c999 fs14">
            向 求丽庆 副主任发起
          </div>
        </div>
        <div class="right">
          <div class="price">￥140</div>
          <div class="c999 fs14 typo_bold">预计收益</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .diagnoses_doc {
    padding: .453333rem .32rem;
    background-color: #F7F7F7;

    .top {
      overflow: hidden;
      background-color: #FCFCFC;
      border-bottom: 1px solid #eee;
      padding: 0 .4rem;

      .status {
        color: #009EE6;
        font-size: .426667rem;
        font-weight: bold;
        float: left;
        line-height: 1.066667rem;
      }

      height: 1.066667rem;
    }

    .content {
      display: flex;
      padding: .4rem;

      .left {
        width: 5.84rem;
        border-right: 1px solid #EEEEEE;

        .info {
          display: flex;
          margin-bottom: .4rem;

          .info_img {
            width: 1.066667rem;
            height: 1.066667rem;
            border-radius: 1.066667rem;
          }
        }
      }

      .right {
        flex: 1;
        text-align: center;
        padding-top: .266667rem;

        .price {
          color: #FF8100;
          font-size: .48rem;
          font-weight: bold;
          margin-bottom: .32rem;
        }
      }
    }
  }
</style>