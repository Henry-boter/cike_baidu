<template>
  <div class="cike-baidu">
    <!--头部banner-->
    <div class="banner" @click="play2">
      <!--点击播放-->
      <img src="../assets/images/baiduImg/banner.jpg" width="100%" onclick="return false"/>
    </div>
    <!--头部banner-->
    <div class="welcome">
      <img class="welcome-img" src="../assets/images/baiduImg/welcome.png" onclick="return false"/>
      <a href="#price-title"><img class="welcome-btn" src="../assets/images/baiduImg/top-1.png"/></a>
      <a href="#online_class"><img class="welcome-btn" src="../assets/images/baiduImg/top-2.png"/></a>
      <a href="#yuyue"><img class="welcome-btn" src="../assets/images/baiduImg/top-3.png"/></a>
      <a href="#activity"><img class="welcome-btn" src="../assets/images/baiduImg/top-4.png"/></a>
    </div>
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
          <checker
            v-model="dayItem"
            default-item-class="swiper-item-radio"
            selected-item-class="swiper-item-radio-selected"
          >
            <checker-item v-for="item in dayList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>
          </checker>
          <!--<div style="display: flex">-->
          <!--<div style="flex: 1;padding: 0 10px; background-color: crimson">-->
          <!--<p>选天数</p>-->
          <!--<checker-->
          <!--v-model="dayItem"-->
          <!--default-item-class="swiper-item-day-radio"-->
          <!--selected-item-class="swiper-item-day-radio-selected"-->
          <!--&gt;-->
          <!--<checker-item v-for="item in dayList" :key="item.id" :value="item.willItem">{{item.willItem}}</checker-item>-->
          <!--</checker>-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </swiper-item>
    </swiper>
    <div class="next-btn" @click="next">下一步</div>
    <!--学习意向表单结束-->
    <div class="online_class">
      <img src="../assets/images/baiduImg/online_class.jpg" width="100%" onclick="return false"/>
      <img src="../assets/images/baiduImg/video_bg.png"  id="online_class" width="90%" style="margin: 5%" @click="isClassList=true" onclick="return false"/>
    </div>
    <div class="yuyue-box" id="yuyue">
      <h1>预约线下试听课</h1>
      <p>水平测试，量身定制专属你的试听课</p>
      <div class="yuyue-input">
        <group>
          <x-input v-model="phoneLine" novalidate :icon-type="iconType" type="tel" :show-clear="false" :max="11" placeholder="请输入您的手机号，方便老师联系你">
            <img slot="label" class="input-icon" src="../assets/images/baiduImg/mobilephone.png" onclick="return false"/>
          </x-input>
        </group>
      </div>
      <div class="yuyue-btn" @click="submitLine">免费预约</div>
      <p class="already-yuyue"><span>16357</span>人已预约</p>
    </div>
    <div id="activity" class="activity">
      <img src="../assets/images/baiduImg/activity.jpg" width="100%" onclick="return false"/>
      <div class="activity-video">
        <img src="../assets/images/baiduImg/video_pic.png" width="100%" v-show="avtivityVideoPaused" @click.prevent="playActivityVideo">
        <video ref="activityVideo"
               x5-video-player-type="h5"
               x5-video-player-fullscreen="false"
               webkit-playsinline="true"
               playsinline="true"
               x-webkit-airplay="true"
               :src="activityVideoSrc"
               width="100%"
               v-show="!avtivityVideoPaused"
               controls
               @playing="onplayingActivityVideo"
               @pause="onpauseActivityVideo"
        ></video>
      </div>
    </div>
    <div class="one-by-one" id="class">
      <div class="container">
        <p>免费预约更多课程</p>
        <p>一对一体验教学</p>
        <div class="one-by-one-btn" @click="isShowYuyue=true">立即预约</div>
      </div>
    </div>
    <img class="buttom_logo" src="../assets/images/baiduImg/buttom_logo.png" onclick="return false"/>
    <div style="padding-bottom: 50px;background-color: #f3f4f8;font-size: 8px;color: #a6a6a6;text-align: center">
      <p>咨询热线：400-8839-169</p>
      <p>Copyright © 2016 蜀 All Rights Reserved.</p>
      <p>ICP认证：蜀ICP备14026654号-2</p>
    </div>
    <div class="foot-bar">
      <div class="left">
        <div class="l" v-if="isWeibo">
          <a href="http://p.qiao.baidu.com/im/index?siteid=10535005&ucid=8185192&cp=&cr=&cw=" style="color: #222;display: block;">
            <img src="../assets/images/baiduImg/wechat.png" width="22" height="17"/>
            <p>在线咨询</p>
          </a>
        </div>
        <div class="l" @click="isShowDialog=true" v-else>
          <img src="../assets/images/baiduImg/wechat.png" width="22" height="17" onclick="return false"/>
          <p>微信咨询</p>
        </div>
        <div class="r">
          <a href="tel:4008839169" style="display: block">
            <img src="../assets/images/baiduImg/call.png" width="22" height="17" onclick="return false"/>
            <p style="color: #222">电话咨询</p>
          </a>
        </div>
      </div>
      <div class="right" @click="isShowYuyue=true">立即预约</div>
    </div>

    <!--预约到校-->
    <div v-transfer-dom>
      <popup v-model="isShowYuyue" position="bottom" max-height="100%">
        <img class="popup-logo" src="../assets/images/baiduImg/buttom_logo.png" onclick="return false"/>
        <div class="popup-content">
          <h2 class="popup-content-title">预约到校</h2>
          <div class="come-school">
            <group gutter="0">
              <x-input v-model="userName" type="text" placeholder="姓名">
                <img slot="label" class="input-icon" src="../assets/images/baiduImg/people.png" onclick="return false"/>
              </x-input>
            </group>
          </div>
          <div class="come-school">
            <group gutter="0">
              <x-input v-model="phoneComeSchool" novalidate :icon-type="iconTypeComeSchool" type="tel" :show-clear="false" :max="11" placeholder="电话">
                <img slot="label" class="input-icon" src="../assets/images/baiduImg/mobilephone.png" onclick="return false"/>
              </x-input>
            </group>
          </div>
          <div class="come-school-btn" @click="submitComeSchool(phoneComeSchool, userName)">立即预约</div>
          <div class="come-school-tips">我们将承诺，尊重并保护您的隐私</div>
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
    <!--试听课列表-->
    <div v-transfer-dom>
      <popup v-model="isClassList" position="top" height="100%">
        <p class="audition-close"><span @click="closeAuditionVideo">
            <img src="../assets/images/baiduImg/65465.gif" height="40px" width="40px"/></span></p>
        <img src="../assets/images/baiduImg/st-banner.png" width="100%"/>
        <div class="audition-wrap">
          <img v-if="coverImg" src="http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/201807134114" class="videoPoster" @click="playVideo(videoSrc[0].src)" alt="">
          <video ref="video"
                 controls
                 poster="http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/201807134114"
                 style="width: 90%;margin-left: 5%;margin-bottom: 15px"
          ></video>
          <div class="class-item" v-for="(item, index) in videoSrc" @click="playVideo(item.src)">
            <img :src="item.pic" width="100%" onclick="return false"/>
            <!--<div class="item-right">{{item.name}}</div>-->
          </div>
        </div>
      </popup>
    </div>
    <!--微信咨询二维码-->
    <div v-transfer-dom>
      <x-dialog v-model="isShowDialog">
        <p class="dialog-cancel"><span @click="isShowDialog=false"> × </span></p>
        <p>长按识别二维码</p>
        <img class="dialog-img" src="../assets/images/baiduImg/CIKE-QRcode.jpg"/>
        <p>或者复制下方微信号</p>
        <p style="margin-bottom: 20px">15328083991</p>
      </x-dialog>
    </div>
    <!--顶部提示框-->
    <div v-transfer-dom>
      <popup v-model="isTopTips" position="top" :show-mask="false">
        <div class="tips-box">
          {{topTipsText}}
        </div>
      </popup>
    </div>
    <!--提交成功提示框-->
    <div v-transfer-dom>
      <alert v-model="isAlert" :title="alertTitle" @on-show="onShow" @on-hide="onHide">{{alertText}}</alert>
    </div>
    <!--立即注册获取试听资格-->
    <div v-transfer-dom>
      <confirm v-model="isShowRegBox"
               ref="confirm5"
               :close-on-confirm="false"
               @on-cancel="onRegBoxCancel"
               @on-confirm="onRegBoxConfirm">
        <img src="../assets/images/baiduImg/buttom_logo.png" width="100%" alt="" onclick="return false">
        <h2 class="confirm-title">立即注册，免费试听</h2>
        <group>
          <x-input v-model="phoneReg" is-type="china-mobile" type="tel" placeholder="电话">
            <img slot="label" class="input-icon" src="../assets/images/baiduImg/mobilephone.png" onclick="return false"/>
          </x-input>
        </group>
      </confirm>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperItem, Step, StepItem, Checker, CheckerItem, XInput, Group, TransferDomDirective as TransferDom, Popup, XDialog, XButton, Alert, Confirm } from 'vux'
  import { willClassList, targetList, levelList, dayList, hoursList, videoSrc, activityVideoSrc } from '../assets/js/cikeBaiduData'
  import isMobilePhone from 'validator/lib/isMobilePhone'
  import {saveData, getData} from '../assets/js/cache.js'
  export default {
    name: 'CikeBaidu',
    directives: {
      TransferDom
    },
    components: {
      Swiper,
      SwiperItem,
      Step,
      StepItem,
      Checker,
      CheckerItem,
      XInput,
      Group,
      Popup,
      XDialog,
      XButton,
      Alert,
      Confirm
    },
    data () {
      return {
        swiperItemIndex: 0,
        willClassList: willClassList,
        willClassItem: [],
        targetList: targetList,
        targetItem: null,
        levelList: levelList,
        levelItem: null,
        dayList: dayList,
        dayItem: null,
        hoursList: hoursList,
        activityVideoSrc: activityVideoSrc,
        avtivityVideoPaused: true,
        isShowYuyue: false,
        isShowOffer: false,
        isShowOfferTwo: false,
        isShowDialog: false,
        isTopTips: false,
        topTipsText: '',
        isClassList: false,
        isAlert: false,
        alertTitle: '',
        alertText: '',
        videoSrc: videoSrc,
        phoneLine: '',
        iconType: '',
        phoneComeSchool: '',
        iconTypeComeSchool: '',
        userName: '',
        phonePlan: '',
        buttonText: '发送验证码',
        buttonDisabled: false,
        checkCode: function (value) {
          return {
            valid: value === '1111',
            msg: 'Must be 1111'
          }
        },
        phoneCode: null,
        phoneReg: '',
        isShowRegBox: false,
        coverImg: true
      }
    },
    mounted () {
      console.log(this.$route.query.channel)
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
    filters: {},
//    mounted () {
//      console.log(this.$route.query)
//    },
    computed: {
      isWeibo () {
        if (this.$route.query.channel) {
          if (this.$route.query.channel.indexOf('weibo') !== -1) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    },
    methods: {
//      发送消息
      getUserSave (phone, name) {
        this.$http.get('http://www.cike.hk/sale/userSave', {
          params: {
            phone: phone,
            name: `${name}。info:${JSON.stringify(this.$route.query)}`
          }
        }).then((data) => {
          console.log(data)
        }, (err) => {
          console.log(err)
        })
      },
      //  测试发送数据
      test (phone, name) {
        console.log('用户：' + phone + '.' + name)
        console.log(`用户：${phone}.${name}。info:${JSON.stringify(this.$route.query)}`)
      },
      // 短信验证
      sms () {
        const url = 'http://www.cike.hk/api/cike/sms/'
        const phone = 13778115008
        this.$http.get(url + phone, {}).then((response) => {
//          this.code = response.data.data
          console.log(response.data.data)
//          this.smsCode = response.body.data
          console.log(response.body.data)
        })
      },
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
          let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem
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
          let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem
          this.getUserSave(phone, name)
          this.isShowOffer = false
          this.isShowOfferTwo = true
        }
      },
      onShow () {
        this.isShowYuyue = false
        this.isShowOfferTwo = false
      },
      onHide () {
//        this.isShowYuyue = false
      },
//      获取人工方案
      madePlan () {
        let type = '需要人工方案'
        let name = type + '，学习意向：' + this.willClassItem + '，学习目的：' + this.targetItem + '，目前英语水平：' + this.levelItem + '，每周学习时长：' + this.dayItem
        this.getUserSave(this.phonePlan, name)
        this.alertTitle = '感谢关注磁课英语'
        this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
        this.isAlert = true
      },
//      到校预约
      submitComeSchool (phone, userName) {
        if (isMobilePhone(phone, 'zh-CN')) {
          this.iconTypeComeSchool = 'success'
          let type = '预约到校'
          let name = userName + ',' + type
          this.getUserSave(phone, name)
          this.alertTitle = '恭喜你！ 预约成功'
          this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
          this.isAlert = true
        } else {
          this.iconTypeComeSchool = 'error'
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        }
      },
//      提交预约线下试听课
      submitLine () {
        if (isMobilePhone(this.phoneLine, 'zh-CN')) {
          this.iconType = 'success'
          let type = '预约线下试听课'
          let name = type
          this.getUserSave(this.phoneLine, name)
          this.alertTitle = '恭喜你！ 预约成功'
          this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
          this.isAlert = true
        } else {
          this.iconType = 'error'
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        }
      },
      //  发送验证码
      getCode () {
        this.buttonDisabled = true
        var secondCount = 10
        let timer = setInterval(() => {
          secondCount--
          this.buttonText = secondCount + 's'
          if (secondCount === 0) {
            clearInterval(timer)
            this.buttonText = '发送验证码'
            this.buttonDisabled = false
          }
        }, 1000)
      },
      //      播放视频
      playVideo (src) {
        let reg = this.checkReg()
        let phone = getData('phone')
        if (!reg) {
          if (phone) {
            const video = this.$refs.video
            video.src = src
            video.play()
            this.coverImg = false
          } else {
            this.isShowRegBox = true
          }
        } else {
          const video = this.$refs.video
          video.src = src
          video.play()
        }
      },
      playActivityVideo () {
        const video = this.$refs.activityVideo
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
      },
      onplayingActivityVideo () {
        this.avtivityVideoPaused = false
      },
      onpauseActivityVideo () {
        this.avtivityVideoPaused = true
      },
      play2 () {
        const video = this.$refs.videoStudy
        video.play()
      },
      closeAuditionVideo () {
        this.isClassList = false
        this.$refs.video.pause()
      },
      // 是否需要填电话号码
      checkReg () {
        if (this.$route.query.reg === 'no') {
          return false
        } else {
          return true
        }
      },
      onRegBoxCancel () {
        console.log('onRegBoxCancel')
      },
      onRegBoxConfirm () {
        if (isMobilePhone(this.phoneReg, 'zh-CN')) {
          this.isShowRegBox = false
          this.isAlert = true
          this.alertTitle = '注册成功！开始试听'
          saveData('phone', this.phoneReg)
          let name = '试听注册'
          this.getUserSave(this.phoneReg, name)
        } else {
          this.iconType = 'error'
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        }
      }
      //      微信端自动播放
//      audioAutoPlay (id) {
//        var audio = document.getElementById(id)
//        audio.play()
//        document.addEventListener('WeixinJSBridgeReady', () => {
//          audio.play()
//        }, false)
//        document.addEventListener('YixinJSBridgeReady', () => {
//          audio.play()
//        }, false)
//      }
    }
  }
</script>

<style scoped="scoped">
  .welcome{
    width: 72%;
    margin: -40px auto 0;
    background-color: #fff;
    box-shadow: 0px 10px 15px 0px
    rgba(73, 73, 73, 0.2);
    position: relative;
    z-index: 1;
    padding: 20px 20px 5px 20px;
    border-radius: 10px;
  }
  .welcome .welcome-img{
    width: 80%;
    margin-top: -26px;
  }
  .welcome .welcome-btn{
    width: 100%;
    border-radius: 8px;
    margin-bottom: 4px;
  }
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
  .yuyue-box{
    text-align: center;
    background-color: #f5f5f5;
    margin-top: -8px;
    color: #666;
  }
  .yuyue-box .yuyue-btn{
    width: 90%;
    background-color: #fe5858;
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    border-radius: 3px;
    padding: 10px 0
  }
  .yuyue-box .already-yuyue{
    padding: 20px 0;
  }
  .yuyue-box .already-yuyue span{
    color: #fe5858
  }
  .yuyue-box .yuyue-input{
    width: 90%;
    margin: 30px auto;
    background-color: #fff;
    border-radius: 3px;
  }
  .yuyue-box .yuyue-input .weui-cell {
    background-color: #fff;
    border-radius: 5px;
  }
  .activity {
    position: relative;
  }
  .activity .activity-video{
    position: absolute;
    bottom: 0;
  }
  .input-icon{
    padding-right:10px;
    display:block;
  }
  .one-by-one{
    width: 100%;
    background-image: url("../assets/images/baiduImg/20171206130429.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .one-by-one .container{
    text-align: center;
    padding-top: 65px;
    padding-bottom: 40px;
    font-size: 20px;
    color: #fff;
  }
  .one-by-one .container .one-by-one-btn{
    width: 30%;
    margin: 10px auto;
    background-color: #fb5858;
    border-radius: 50px;
    font-size: 18px;
  }
  .buttom_logo{
    width: 90%;
    margin: 10px auto;
    display: block
  }
  .foot-bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    font-family: "Microsoft YaHei UI Light";
    background-color: #ffffff;
    z-index: 1;
    box-shadow: 0px 0px 3px #bdbdbd;
  }
  .foot-bar .left{
    flex: 1;
    display: flex;
    font-size: 10px;
    padding-top: 8px;
  }
  .foot-bar .left .l{
    flex: 1;
  }
  .foot-bar .left .r{
    flex: 1;
  }
  .foot-bar .right{
    background-color: #f25f6b;
    flex: 1;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
  }
  .weui-cell {
    background-color: #eee;
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
  .popup-content .come-school{
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .popup-content .come-school-btn{
    background-color: #fb5858;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: #fff;
    line-height: 50px;
    border-radius: 5px
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
  .dialog-cancel{
    text-align: right;
    padding-right: 10px;
    font-size: 30px;
    line-height: 1
  }
  .dialog-img{
    border: 1px solid #ccc;
    margin-top: 10px
  }
  .audition-close{
    position: absolute;
    text-align: right;
    padding-left: 10px;
    padding-top: 10px;
    color: #fff
  }
  .audition-wrap{
    /*padding: 0px 30px 30px;*/
    position: relative;
  }
  .videoPoster{
    width: 90%;
    position: absolute;
    top: 0;
    left: 5%;
    z-index: 2;
  }
  .class-item{
    margin-bottom: -4px;
  }
  .class-item .item-left{
    flex:1;text-align: center;
  }
  .class-item .item-left img {
    display: inline-block;
  }
  .class-item .item-right{
    flex: 1;
    color: #1bcfc6;
    font-size: 16px;
    font-weight: bold;
    text-indent: 1em
  }
  .confirm-title{
    font-size: 18px;
    color: #333;
    text-align: center;
    margin-bottom: 15px
  }
</style>
