<template>
  <div class="price">
    <div class="price-box">
      <h1 class="title">课程自动报价器</h1>
      <swiper height="300px" v-model="swiperItemIndex" :show-dots="false">
        <!--意向课程-->
        <swiper-item>
          <div class="wrapper">
            <div class="step">
              <span>Step 1</span>
              <h2 class="swiper-item-title">意向课程</h2>
            </div>
            <checker v-model="willClassItem"
                     type="checkbox"
                     default-item-class="swiper-item-radio"
                     selected-item-class="swiper-item-radio-selected"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 10px"
            >
              <checker-item v-for="item in willClassList" :key="item.id" :value="item.willItem">
                {{item.willItem}}
                <p class="sub-title">出国旅游轻松搞定</p>
              </checker-item>
            </checker>
          </div>
        </swiper-item>
        <!--学习目的-->
        <swiper-item class="black">
          <div class="wrapper">
            <div class="step">
              <span>Step 2</span>
              <h2 class="swiper-item-title">学习目的</h2>
            </div>
            <checker v-model="targetItem"
                     default-item-class="swiper-item-radio"
                     selected-item-class="swiper-item-radio-selected"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 10px"
            >
              <checker-item v-for="item in targetList" :key="item.id" :value="item.willItem">
                {{item.willItem}}
                <p class="sub-title">出国旅游轻松搞定</p>
              </checker-item>
            </checker>
          </div>
        </swiper-item>
        <!--目前英语水平-->
        <swiper-item class="black">
          <div class="wrapper">
            <div class="step">
              <span>Step 3</span>
              <h2 class="swiper-item-title">目前英语水平</h2>
            </div>
            <checker v-model="levelItem"
                     default-item-class="swiper-item-radio"
                     selected-item-class="swiper-item-radio-selected"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 10px"
            >
              <checker-item v-for="item in levelList" :key="item.id" :value="item.willItem">
                {{item.willItem}}
                <p class="sub-title">出国旅游轻松搞定</p>
              </checker-item>
            </checker>
          </div>
        </swiper-item>
        <!--每周可以花在英语学习上的天数-->
        <swiper-item class="black">
          <div class="wrapper">
            <div class="step">
              <span>Step 4</span>
              <h2 class="swiper-item-title">每周可以花在英语学习上的天数</h2>
            </div>
            <checker v-model="dayItem"
                     default-item-class="swiper-item-radio"
                     selected-item-class="swiper-item-radio-selected"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 10px"
            >
              <checker-item v-for="item in dayList" :key="item.id" :value="item.willItem">
                {{item.willItem}}
                <p class="sub-title">出国旅游轻松搞定</p>
              </checker-item>
            </checker>
          </div>
        </swiper-item>
        <swiper-item class="black">
          <div class="wrapper">
            <div class="step">
              <span>Step 4</span>
              <h2 class="swiper-item-title">每天可以花在英语学习上的时间</h2>
            </div>
            <checker v-model="hoursItem"
                     default-item-class="swiper-item-radio"
                     selected-item-class="swiper-item-radio-selected"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;padding: 0 10px"
            >
              <checker-item v-for="item in hoursList" :key="item.id" :value="item.willItem">
                {{item.willItem}}
                <p class="sub-title">出国旅游轻松搞定</p>
              </checker-item>
            </checker>
          </div>
        </swiper-item>
      </swiper>
      <div class="bottom">
        <div class="back" @click="prev">Back</div>
        <div class="mid">
          <flow style="padding: 0">
            <flow-state state="1" :is-done="swiperItemIndex >= 0"></flow-state><flow-line :is-done="swiperItemIndex >= 1"></flow-line>
            <flow-state state="2" :is-done="swiperItemIndex >= 1"></flow-state><flow-line :is-done="swiperItemIndex >= 2"></flow-line>
            <flow-state state="3" :is-done="swiperItemIndex >= 2"></flow-state><flow-line :is-done="swiperItemIndex >= 3"></flow-line>
            <flow-state state="4" :is-done="swiperItemIndex >= 3"></flow-state><flow-line :is-done="swiperItemIndex >= 4"></flow-line>
            <flow-state state="5" :is-done="swiperItemIndex >= 4"></flow-state>
          </flow>
        </div>
        <div class="next" @click="next">Next</div>
      </div>
    </div>
    <!--顶部提示框-->
    <div v-transfer-dom>
      <popup v-model="isTopTips" position="top" :show-mask="false">
        <div class="tips-box">
          {{topTipsText}}
        </div>
      </popup>
    </div>
    <!--验证您的手机号得到报价方案-->
    <div v-transfer-dom>
      <popup v-model="isShowOffer" position="bottom" max-height="100%">
        <img class="popup-logo" src="../assets/images/baiduImg/buttom_logo.png" onclick="return false"/>
        <div class="popup-content">
          <h2 class="popup-content-title">验证您的手机号得到报价方案</h2>
          <group>
            <x-input v-model="phonePlan" is-type="china-mobile" type="tel" placeholder="电话">
              <img slot="label" class="input-icon" src="../assets/images/baiduImg/mobilephone.png" onclick="return false"/>
            </x-input>
            <!--<x-input v-model="phoneCode" class="weui-vcode" :is-type="checkCode" :show-clear="false" placeholder="默认1111">-->
            <!--<x-button slot="right" type="primary" :disabled="buttonDisabled" mini @click.native="getCode" :text="buttonText"></x-button>-->
            <!--</x-input>-->
          </group>
          <div class="come-school-tips">我们将承诺，尊重并保护您的隐私</div>
          <div class="price-confirm" @click="checkPlanNoSMS(phonePlan)">查看方案</div>
          <div class="price-cancel" @click="isShowOffer=false">取消</div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Flow, FlowState, FlowLine, Checker, CheckerItem, Popup, TransferDomDirective as TransferDom, Group, XInput} from 'vux'
  import { willClassList, targetList, levelList, dayList, hoursList } from '../assets/js/cikeBaiduData'
  export default {
    name: 'PriceConsult',
    directives: {
      TransferDom
    },
    components: {
      Swiper,
      SwiperItem,
      Flow,
      FlowState,
      FlowLine,
      Checker,
      CheckerItem,
      Popup,
      Group,
      XInput
    },
    data () {
      return {
        swiperItemIndex: 0,
        willClassItem: [],
        willClassList: willClassList,
        targetItem: null,
        targetList: targetList,
        levelItem: null,
        levelList: levelList,
        dayItem: null,
        dayList: dayList,
        hoursItem: null,
        hoursList: hoursList,
        isTopTips: false,
        topTipsText: '',
        isShowOffer: false,
        phonePlan: ''
      }
    },
    watch: {
      isTopTips (val) {
        if (val) {
          setTimeout(() => {
            this.isTopTips = false
          }, 2000)
        }
      }
    },
    methods: {
      next () {
        switch (this.swiperItemIndex) {
          case 0:
            if (this.willClassItem.length === 0) {
              this.topTipsText = '您还没有选择意向课程'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 1:
            if (this.targetItem === null) {
              this.topTipsText = '您还没有选择学习目的'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 2:
            if (this.levelItem === null) {
              this.topTipsText = '您还没有选择英语水平'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 3:
            if (this.dayItem === null) {
              this.topTipsText = '您还没有选择每周学习天数'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 4:
            if (this.hoursItem === null) {
              this.topTipsText = '您还没有选择每天学习时间'
              this.isTopTips = true
            } else { this.isShowOffer = true }
            break
        }
      },
      prev () {
        if (!this.swiperItemIndex) {
          return
        }
        this.swiperItemIndex--
      },
      //      获取人工方案
      madePlan () {
        let type = '需要人工方案'
        let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem + this.hoursItem
        this.getUserSave(this.phonePlan, name)
        this.alertTitle = '感谢关注磁课英语'
        this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
        this.isAlert = true
      }
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
    transform: translateY(-15px);
    color: #2f3a5c;
    font-weight: bolder;
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
.wrapper{
  .step{
    display: flex;
    align-items: center;
    padding: 0 10px;
    span{
      text-align: center;
      display: block;
      width: 40px;
      height: 40px;
      background-image: linear-gradient(-45deg, #ffcfa9 0%, #fa6eb9 100%);
      color: #fff;
      font-size: 10px;
      font-weight: bold;
      line-height: 40px;
      border-radius: 50%;
      padding: 2px;
      box-shadow: 2px 3px 10px 0px rgba(151, 31, 66, 0.2);
    }
    h2{
      font-size: 18px;
      text-indent: 0.6em;
      font-family: "Microsoft Yahei";
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #2f3a5c;
    }
  }
}
  .swiper-item-radio{
    text-align: center;
    width: 100px;
    height: 50px;
    margin: 5px 0;
    line-height: 50px;
    background-color: rgba(255,255,255,0.7);
    box-shadow: 0px 8px 20px 0px rgba(47, 58, 92, 0.25);
    border-radius: 10px;
    font-family: "MicrosoftYaHei";
    font-weight: bold;
    color: #2f3a5c;
    position: relative;
    animation: all 0.5s;
    .sub-title{
      font-size: 10px;
      position: absolute;
      bottom: 3px;
      line-height: 1;
      font-weight: lighter;
      transform: scale(0.8);
      display: none;
      width: 100%;
    }
  }
  .swiper-item-radio-selected{
    background-image: linear-gradient(-41deg, #ffb781 0%, #ff739b 100%);
    box-shadow: 0px 8px 20px 0px rgba(47, 58, 92, 0.4);
    color: #fff;
    transform: scale(1.1);
    font-weight: normal;
    line-height: 40px;
    .sub-title{
      display: block;
    }
  }
.tips-box{
  background-color: rgba(231, 49, 49, 0.8);
  color: #fff;
  text-align: center;
  padding: 15px;
}
</style>
