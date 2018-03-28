<template>
    <div class="cike-baidu">
      <!--头部banner-->
      <div class="banner">
        <img src="../assets/baiduImg/banner.jpg" width="100%"/>
      </div>
      <!--头部banner-->
      <div class="welcome">
        <img class="welcome-img" src="../assets/baiduImg/welcome.png"/>
        <a href="#price-title"><img class="welcome-btn" src="../assets/baiduImg/btn-price.png"/></a>
        <a href="#online_class"><img class="welcome-btn" src="../assets/baiduImg/btn-onlineClass.png"/></a>
        <a href="#activity"><img class="welcome-btn" src="../assets/baiduImg/btn-activity.png"/></a>
        <a href="#yuyue"><img class="welcome-btn" src="../assets/baiduImg/btn-yuyue.png"/></a>
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
      <!--试听视频-->
      <div class="overlay" v-if="isShowVideo" @click="isShowVideo=false"></div>
      <div class="lightbox" :class="isShowVideo?'show-video':''">
        <img src="../assets/baiduImg/videoImg.jpg" width="100%"/>
      </div>
      <!--试听视频结束-->
      <div class="online_class" id="online_class">
        <img src="../assets/baiduImg/online_class.jpg" width="100%" @click="isClassList=true"/>
      </div>
      <div class="yuyue-box" id="yuyue">
        <h1>预约线下试听课</h1>
        <p>水平测试，量身定制专属你的试听课</p>
        <div class="yuyue-input">
          <x-input type="tel" placeholder="请输入您的手机号，方便老师联系你">
            <img slot="label" class="input-icon" src="../assets/baiduImg/mobilephone.png"/>
          </x-input>
        </div>
        <div class="yuyue-btn">免费预约</div>
        <p class="already-yuyue"><span>163578</span>人已预约</p>
      </div>
      <div id="activity">
        <img src="../assets/baiduImg/activity.jpg" width="100%"/>
      </div>
      <div class="one-by-one" id="class">
        <div class="container">
          <p>免费预约更多课程</p>
          <p>一对一体验教学</p>
          <div class="one-by-one-btn">立即预约</div>
        </div>
      </div>
      <div>点击</div>
      <img class="buttom_logo" src="../assets/baiduImg/buttom_logo.png"/>
      <div style="height: 50px"></div>
      <div class="foot-bar">
        <div class="left">
          <div class="l" @click="isShowDialog=true">
            <img src="../assets/baiduImg/wechat.png" width="22" height="17"/>
            <p>微信咨询</p>
          </div>
          <div class="r">
            <a href="tel:4008839169" style="display: block">
              <img src="../assets/baiduImg/call.png" width="22" height="17"/>
              <p style="color: #222">电话咨询</p>
            </a>
          </div>
        </div>
        <div class="right" @click="isShowYuyue=true">立即预约</div>
      </div>

      <!--预约到校-->
      <div v-transfer-dom>
        <popup v-model="isShowYuyue" position="bottom" max-height="70%">
          <img class="popup-logo" src="../assets/baiduImg/buttom_logo.png"/>
          <div class="popup-content">
            <h2 class="popup-content-title">预约到校</h2>
            <div class="come-school">
              <group gutter="0">
                <x-input type="tel" placeholder="姓名">
                  <img slot="label" class="input-icon" src="../assets/baiduImg/people.png"/>
                </x-input>
              </group>
            </div>
            <div class="come-school">
              <group gutter="0">
                <x-input is-type="china-mobile" placeholder="电话">
                  <img slot="label" class="input-icon" src="../assets/baiduImg/mobilephone.png"/>
                </x-input>
              </group>
            </div>
            <div class="come-school-btn" @click="comeSchool">立即预约</div>
            <div class="come-school-tips">我们将承诺，尊重并保护您的隐私</div>
          </div>
        </popup>
      </div>
      <!--验证您的手机号得到报价方案-->
      <div v-transfer-dom>
        <popup v-model="isShowOffer" position="bottom" max-height="90%">
          <img class="popup-logo" src="../assets/baiduImg/buttom_logo.png"/>
          <div class="popup-content">
            <h2 class="popup-content-title">验证您的手机号得到报价方案</h2>
            <group>
              <x-input is-type="china-mobile" placeholder="电话">
                <img slot="label" class="input-icon" src="../assets/baiduImg/mobilephone.png"/>
              </x-input>
              <x-input class="weui-vcode" placeholder="输入验证码">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
              </x-input>
            </group>
            <div class="come-school-tips">我们将承诺，尊重并保护您的隐私</div>
            <div class="price-confirm" @click="checkPlan">查看方案</div>
            <div class="price-cancel" @click="isShowOffer=false">取消</div>
          </div>
        </popup>
      </div>
      <!--预算结果-->
      <div v-transfer-dom>
        <popup v-model="isShowOfferTwo" position="bottom" max-height="80%">
          <img class="popup-logo" src="../assets/baiduImg/buttom_logo.png"/>
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
          <p style="font-size: 30px;line-height: 1;font-weight: bold;text-align: right;padding-right: 20px"><span @click="isClassList=false">×</span></p>
          <div style="padding: 10px 30px 30px;">
            <video width="100%" ref="video" controls></video>
            <div class="class-item" :style="index%2===0?'flex-direction: row-reverse':''" v-for="(item, index) in videoSrc" @click="playVideo(item.src)">
              <div class="item-left">
                <img src="../assets/baiduImg/daoxueke.jpg" width="80%"/>
              </div>
              <div class="item-right">{{item.name}}</div>
            </div>
          </div>
        </popup>
      </div>
      <!--微信咨询二维码-->
      <div v-transfer-dom>
        <x-dialog v-model="isShowDialog">
          <p class="dialog-cancel"><span @click="isShowDialog=false"> × </span></p>
          <p>长按识别二维码</p>
          <img class="dialog-img" src="../assets/baiduImg/CIKE-QRcode.png"/>
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
    </div>
</template>
<script>
  import { Swiper, SwiperItem, Step, StepItem, Checker, CheckerItem, XInput, Group, TransferDomDirective as TransferDom, Popup, XDialog, XButton, Alert } from 'vux'
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
      Alert
    },
    data () {
      return {
        swiperItemIndex: 0,
        willClassList: [
          {id: '1', willItem: '成人口语'},
          {id: '2', willItem: '零基础突破'},
          {id: '3', willItem: '旅游英语'},
          {id: '4', willItem: '职场英语'},
          {id: '5', willItem: '商务英语'},
          {id: '6', willItem: '移民英语'},
          {id: '7', willItem: '自然拼读'},
          {id: '8', willItem: '音标纠音'},
          {id: '9', willItem: '英语语法'},
          {id: '10', willItem: '综合英语进阶'}
        ],
        willClassItem: [],
        targetList: [
          {id: '1', willItem: '工作需要'},
          {id: '2', willItem: '出国旅行'},
          {id: '3', willItem: '专业考试'},
          {id: '4', willItem: '移民'},
          {id: '5', willItem: '教育子女'},
          {id: '6', willItem: '自我提升'},
          {id: '7', willItem: '兴趣爱好'},
          {id: '8', willItem: '其他'}
        ],
        targetItem: null,
        levelList: [
          {id: '1', willItem: '零基础'},
          {id: '2', willItem: '薄弱'},
          {id: '3', willItem: '一般'},
          {id: '4', willItem: '良好'},
          {id: '5', willItem: '熟练'},
          {id: '6', willItem: '精通'}
        ],
        levelItem: null,
        dayList: [
          {id: '1', willItem: '一天'},
          {id: '2', willItem: '两天'},
          {id: '3', willItem: '三天'},
          {id: '4', willItem: '四天'},
          {id: '5', willItem: '五天'},
          {id: '6', willItem: '六天'},
          {id: '7', willItem: '七天'}
        ],
        dayItem: null,
        hoursList: [
          {id: '1', willItem: '1小时'},
          {id: '2', willItem: '2小时'},
          {id: '3', willItem: '3小时'},
          {id: '4', willItem: '4小时'},
          {id: '5', willItem: '5小时'},
          {id: '6', willItem: '6小时'},
          {id: '7', willItem: '7小时'},
          {id: '8', willItem: '8小时'}
        ],
        hoursItem: null,
        isShowVideo: false,
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
        videoSrc: [
          {name: '自然拼读纠音课', src: 'http://video.cike.hk/f083bc8f7c8f4d948e421a0d195d9983/462d934370e24896a9ea1066fcdd2a47-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4'},
          {name: '口语入门班正式课', src: 'http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4'},
          {name: '口语进阶班正式课', src: 'http://video.cike.hk/f083bc8f7c8f4d948e421a0d195d9983/462d934370e24896a9ea1066fcdd2a47-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4'},
          {name: '英语突破班正式课', src: 'http://video.cike.hk/c084621fba374468b9019e1c8b647330/5139b1f821324e12ba78008d2d0b0eb4-a5b7d8911cc7d347a9c9dd7e9b1d521b.mp4'}
        ]
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
    filters: {},
    mounted () {
    },
    computed: {},
    methods: {
//      发送消息
      getUserSave (phone, name) {
        this.$http.get('http://www.cike.hk/sale/userSave', {
          params: {
            phone: 13778115008,
            name: '测试'
          }
        }).then((data) => {
          console.log(data)
        }, (err) => {
          console.log(err)
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
            console.log(this.targetItem)
            if (this.targetItem === null) {
              this.topTipsText = '您还没有选择学习目的'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 2:
            console.log(this.levelItem)
            if (this.levelItem === null) {
              this.topTipsText = '您还没有选择英语水平'
              this.isTopTips = true
            } else { this.swiperItemIndex++ }
            break
          case 3:
            console.log(this.dayItem, this.hoursItem)
            if (this.dayItem === null || this.hoursItem === null) {
              this.topTipsText = '您还没有选择每天学习时间'
              this.isTopTips = true
            } else { this.isShowOffer = true }
            break
        }
      },
      checkPlan () {
        this.isShowOffer = false
        this.isShowOfferTwo = true
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
        this.alertTitle = '感谢关注磁课英语'
        this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
        this.isAlert = true
      },
//      到校预约
      comeSchool () {
        this.alertTitle = '恭喜你！ 预约成功'
        this.alertText = '我们课程的顾问老师会在30分钟给你致电，请保持手机通畅'
        this.isAlert = true
      },
//      播放视频
      playVideo (src) {
        const video = this.$refs.video
        video.src = src
        video.play()
      }
    }
  }
</script>

<style scoped="scoped">
  .welcome{
    width: 72%;
    margin: -54px auto 0;
    background-color: #f1f3fe;
    box-shadow: 0px 10px 15px 0px
    rgba(73, 73, 73, 0.2);
    position: relative;
    z-index: 1;
    padding: 20px;
  }
  .welcome .welcome-img{
    width: 80%;
    margin-top: -26px;
  }
  .welcome .welcome-btn{
    width: 100%;
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
    background-color: #f9244c;
    text-align: center;
    padding: 5px 10px;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
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
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
  }
  .lightbox {
    width: 90%;
    background-color: #FFF;
    z-index: 1;
    position: fixed;
    top: 30%; left: 5%;
    transform: scale(0);
    opacity: 0;
    transition: all .3s;
  }
  .lightbox.show-video{
    transform: scale(1);
    opacity: 1;
  }
  .yuyue-box{
    text-align: center;
    background-color: #f5f5f5;
    margin-top: -8px
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
  .input-icon{
    padding-right:10px;
    display:block;
  }
  .one-by-one{
    width: 100%;
    background-image: url("../assets/baiduImg/20171206130429.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .one-by-one .container{
    background-color: rgba(0,0,0,0.3);
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
  }
  .foot-bar .left{
    flex: 1;
    display: flex;
    font-size: 10px;
    padding-top: 8px;
    border-top: 1px solid #bdbdbd;
  }
  .foot-bar .left .l{
    flex: 1;
  }
  .foot-bar .left .r{
    flex: 1;
  }
  .foot-bar .right{
    background-color: #fb5858;
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
  .class-item{
    display: flex;
    background-color: #fff;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 5px;
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

</style>
