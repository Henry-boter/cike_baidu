<template>
  <div>
    <h2 class="price-title" id="price-title">课程报价生成器</h2>
    <!--学习意向表单-->
    <div style="width: 80%;margin: 0 auto">
      <step v-model="swiperItemIndex">
        <step-item></step-item>
        <step-item></step-item>
        <step-item></step-item>
        <step-item></step-item>
      </step>
    </div>
    <swiper v-model="swiperItemIndex" :show-dots="false" height="300px" :threshold="1000">
      <swiper-item>
        <div style="text-align: center">
          <h1 class="swiper-item-title">意向课程</h1>
          <p class="swiper-item-text">选择您想要学习的课程</p>
          <checker
            v-model="willClassItem"
            type="checkbox"
            default-item-class="swiper-item-radio swiper-item-radio"
            selected-item-class="swiper-item-radio-selected"
          >
            <checker-item v-for="item in willClassList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
          </checker>
        </div>
      </swiper-item>
      <swiper-item>
        <div style="text-align: center">
          <h1 class="swiper-item-title">学习目的</h1>
          <p class="swiper-item-text">选择您的学习目的，此处单选</p>
          <checker
            v-model="targetItem"
            default-item-class="swiper-item-radio"
            selected-item-class="swiper-item-radio-selected"
          >
            <checker-item v-for="item in targetList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
          </checker>
        </div>
      </swiper-item>
      <swiper-item>
        <div style="text-align: center">
          <h1 class="swiper-item-title">目前英语水平</h1>
          <p class="swiper-item-text">选择您目前英语状况，此处单选</p>
          <checker
            v-model="levelItem"
            default-item-class="swiper-item-radio"
            selected-item-class="swiper-item-radio-selected"
          >
            <checker-item v-for="item in levelList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
          </checker>
        </div>
      </swiper-item>
      <swiper-item>
        <div style="text-align: center">
          <h1 class="swiper-item-title">每周可以花在英语学习上的时间</h1>
          <div style="display: flex">
            <div style="flex: 1;padding: 0 10px; background-color: crimson">
              <p>选天数</p>
              <checker
                v-model="dayItem"
                default-item-class="swiper-item-day-radio"
                selected-item-class="swiper-item-day-radio-selected"
              >
                <checker-item v-for="item in dayList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
              </checker>
            </div>
            <div style="flex: 2;background-color: floralwhite">
              <p>选每天学习几小时</p>
              <checker
                v-model="hoursItem"
                default-item-class="swiper-item-hours-radio"
                selected-item-class="swiper-item-hours-radio-selected"
              >
                <checker-item v-for="item in hoursList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
              </checker>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
    <div class="next-btn" @click="next">下一步</div>
    <!--学习意向表单结束-->
    <!--顶部提示框-->
    <div v-transfer-dom>
      <popup v-model="isTopTips" position="top" :show-mask="false">
        <div class="tips-box">
          {{topTipsText}}
        </div>
      </popup>
    </div>
    <!--顶部提示框结束-->
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
    <!--验证您的手机号得到报价方案结束-->
    <!--预算结果-->
    <div v-transfer-dom>
      <popup v-model="isShowOfferTwo" position="bottom" max-height="100%">
        <img class="popup-logo" src="../assets/images/baiduImg/buttom_logo.png" onclick="return false"/>
        <div class="popup-content">
          <h2 class="popup-content-title">预算结果</h2>
          <div style="color: #30235B">
            <p>根据您的需求</p>
            <p>您大概需要半年的学习时间</p>
            <p>6个月总共<span style="font-size: 30px;font-weight: bold">￥4980</span>元的学费</p>
            <p>（包括线上，线下）</p>
          </div>
          <div class="price-confirm" @click="madePlan">我要人工方案</div>
          <div class="price-cancel" @click="isShowOfferTwo=false">返回</div>
        </div>
      </popup>
    </div>
    <!--预算结果结束-->
    <!--提交成功提示框-->
    <div v-transfer-dom>
      <alert v-model="isAlert" :title="alertTitle" @on-show="onShow" @on-hide="onHide">{{alertText}}</alert>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperItem, Checker, CheckerItem, Step, StepItem, Popup, TransferDomDirective as TransferDom, Group, XInput, Alert} from 'vux'
  import isMobilePhone from 'validator/lib/isMobilePhone'
  import { willClassList, targetList, levelList, dayList, hoursList } from '../assets/js/cikeBaiduData'
  export default {
    name: 'PriceMachine',
    directives: {
      TransferDom
    },
    components: {
      Step,
      StepItem,
      Swiper,
      SwiperItem,
      Checker,
      CheckerItem,
      Popup,
      Group,
      XInput,
      Alert
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
        phonePlan: '',
        isShowOfferTwo: false,
        alertTitle: '',
        isAlert: false,
        alertText: ''
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
            if (this.dayItem === null || this.hoursItem === null) {
              this.topTipsText = '您还没有选择每天学习时间'
              this.isTopTips = true
            } else { this.isShowOffer = true }
            break
        }
      },
      checkPlan (phoneCode, phone) {
        if (!isMobilePhone(phone, 'zh-CN')) {
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        } else if (!(phoneCode === '1111')) {
          this.topTipsText = '请输入正确的验证码'
          this.isTopTips = true
        } else {
          let type = '寻求报价'
          let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem + this.hoursItem
          this.getUserSave(phone, name)
          this.isShowOffer = false
          this.isShowOfferTwo = true
        }
      },
      // 不需要验证短信码
      checkPlanNoSMS (phone) {
        if (!isMobilePhone(phone, 'zh-CN')) {
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        } else {
          let type = '寻求报价'
          let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem + this.hoursItem
          this.getUserSave(phone, name)
          this.isShowOffer = false
          this.isShowOfferTwo = true
        }
      },
      //      获取人工方案
      madePlan () {
        let type = '需要人工方案'
        let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem + this.hoursItem
        this.getUserSave(this.phonePlan, name)
        this.alertTitle = '感谢关注磁课英语'
        this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
        this.isAlert = true
      },
      //      发送消息
      getUserSave (phone, name) {
        console.log(phone)
        console.log(`${name}。info:${JSON.stringify(this.$route.query)}`)
        // this.$http.get('http://www.cike.hk/sale/userSave', {
        //   params: {
        //     phone: phone,
        //     name: `${name}。info:${JSON.stringify(this.$route.query)}`
        //   }
        // }).then((data) => {
        //   console.log(data)
        // }, (err) => {
        //   console.log(err)
        // })
      },
      onShow () {
        this.isShowYuyue = false
        this.isShowOfferTwo = false
      },
      onHide () {
//        this.isShowYuyue = false
      }
    }
  }
</script>

<style scoped>
  .price-title{
    margin-top: 32px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    font-family: "Microsoft YaHei UI";
    color: #677897;
  }
  .swiper-item-title{
    font-size: 18px;
    font-size: 20px;
    color: #e73131;
    line-height: 2
  }
  .swiper-item-text{
    font-size: 14px;
    color: #555;
    line-height: 3
  }
  .next-btn{
    margin: 0 auto;
    width: 30%;
    background-color: #f25f6b;
    text-align: center;
    padding: 5px 10px;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
  }
  .online_class{
    background-color: #f5f5f5;
  }
  .swiper-item-radio {
    width: 29%;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #e73131;
    color: #e73131;
    font-size: 14px;
    background-color: #fff;
    margin-right: 3%;
    margin-bottom: 15px;
  }
  .swiper-item-radio-selected {
    background-color: #e73131;
    border-color: #ff4a00;
    color: #fff;
  }
  .swiper-item-day-radio{
    width: 80%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #e73131;
    color: #e73131;
    font-size: 14px;
    background-color: #fff;
    margin-right: 3%;
    margin-bottom: 5px;
  }
  .swiper-item-day-radio-selected {
    background-color: #e73131;
    border-color: #ff4a00;
    color: #fff;
  }
  .swiper-item-hours-radio{
    width: 40%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #e73131;
    color: #e73131;
    font-size: 14px;
    background-color: #fff;
    margin-right: 3%;
    margin-bottom: 10px;
  }
  .swiper-item-hours-radio-selected {
    background-color: #e73131;
    border-color: #ff4a00;
    color: #fff;
  }
  .tips-box{
    background-color: rgba(231, 49, 49, 0.8);
    color: #fff;
    text-align: center;
    padding: 15px;
  }
  .popup-logo{
    width: 76%;
    margin-left: 20px;
    margin-top: 20px;
    display: block
  }
  .popup-content{
    padding: 20px;
    background-color: #fff;
    text-align: center;
  }
  .popup-content .popup-content-title {
    font-size: 22px;
    color: #333;
    text-align: center;
    margin-bottom: 20px
  }
  .popup-content .come-school-tips{
    text-align: center;
    color: #444;
    font-size: 14px;
    line-height: 2
  }
  .popup-content .price-confirm{
    background-color: #fb5858;
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    line-height: 40px;
    border-radius: 5px
  }
  .popup-content .price-cancel{
    border: 1px solid #ccc;
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    color: #333;
    line-height: 38px;
    border-radius: 5px
  }
  .weui-cell {
    background-color: #eee;
  }
  .yuyue-box .yuyue-input .weui-cell {
    background-color: #fff;
    border-radius: 5px;
  }
</style>
