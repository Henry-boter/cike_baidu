<template>
  <div class="price">
    <div class="price-box">
      <h1 class="title">课程自动报价器</h1>
      <swiper auto height="200px">
        <swiper-item class="black">

          <h2 class="title fadeInUp animated">它无孔不入</h2>
        </swiper-item>
        <swiper-item class="black">
          <h2 class="title fadeInUp animated">你无处可藏</h2>
        </swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">而是它不懂你</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">我们试图</h2></swiper-item>
      </swiper>
      <div class="bottom">
        <div class="back">Back</div>
        <div class="mid">
          <flow>
            <flow-state state="1" is-done></flow-state>
            <flow-line is-done></flow-line>
            <flow-state state="2" is-done></flow-state>
            <flow-line></flow-line>
            <flow-state state="3"></flow-state>
            <flow-line></flow-line>
            <flow-state state="4"></flow-state>
          </flow>
        </div>
        <div class="next">Next</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Flow, FlowState, FlowLine} from 'vux'
  export default {
    name: 'PriceConsult',
    components: {
      Swiper,
      SwiperItem,
      Flow,
      FlowState,
      FlowLine
    }
  }
</script>

<style scoped lang="less">
.price-box{
  width: 92%;
  margin: 0 auto;
  background: linear-gradient(#d9eaff, #fff); /* 标准的语法 */
  border-radius: 15px;
  .title{
    text-align: center;
    font-size: 24px;
    line-height: 1;
    transform: translateY(-10px);
    color: #2f3a5c;
  }
  .bottom {
    height: 58px;
    background-image: linear-gradient(-29deg, #ffb782 0%, #ff739c 100%),
    linear-gradient(93deg, #ffcfaa 0%, #fa6eb9 100%);
    background-blend-mode: normal, normal;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    .back{
      width: 80px;
      font-style: italic;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    .mid {
      flex: 1;
      .dots{
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
    }
    .next {
      width: 80px;
      font-style: italic;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
  }
}
.weui-wepay-flow__li_done .weui-wepay-flow__state {
  background-color: #fff;
}
.weui-wepay-flow__process {
  display: none;
  background-color: #09bb07;
  height: 3px;
  position: relative;
}
</style>
