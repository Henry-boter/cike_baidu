<template>
  <div ref="wrap" id="wrap" class="wrap">
  <div class="content">
    <div class="box">
      <p class="b-title">定义成人英语新玩法，磁课英语第四家分校高颜值来袭！</p>
      <a class="time" style="font-size: 16px;text-align: left" @click="showQR=true">磁课英语<span>9月2日</span></a>
      <h1 style="margin: 3rem 0;">说到<span class="bold">「颜值」</span>这个严肃的话题<br>
        我们先来说说这些年的<span class="bold">磁课课堂</span>
      </h1>
      <img src="../assets/images/wechat/cike-bottom2.gif">
      <h1 style="margin: 2rem auto;">从桐梓林的名媛绅士<br>
        到鹭岛国际的淑女型男<br>
        再到软件园的白领精英们<br>
        14年到17年，我们一起走过<br>
        遇见更大的世界，遇见更好的自己<br>
      </h1>
      <a class="toptime">2018年9月1日</a>
      <h3>磁课英语第四家分校落地东大街</h3>
      <img src="../assets/images/wechat/open.gif">
      <img src="../assets/images/wechat/hello.gif">
      <h1 style=" margin-bottom: 1.6rem;">从此，太古里的时尚达人们<br>
        又多了一个修炼提升的好去处<br>▼
      </h1>
      <img src="../assets/images/wechat/1.jpg">
      <div class="box">
        <img src="../assets/images/wechat/classroom-s.jpg">
      </div>
      <div class="box">
        <img src="../assets/images/wechat/6846.jpg">
      </div>
      <div class="box">
        <img src="../assets/images/wechat/lounge-f.jpg">
        <img src="../assets/images/wechat/hey.gif">
      </div>
      <div class="box">
        <h1>俗话说<span class="bold">「始于颜值 陷于才华」</span><br>
          2018，磁课重装升级<br>
          同样，始于校区颜值<br>
          用工匠精神打造精品课堂<br>
          <span class="bold">用科技，定义成人英语新玩法</span><br>▼
        </h1>
        <img src="../assets/images/wechat/54.jpg">
      </div>
      <div class="box">
        <h1 style="margin: 1.6rem 0 0.6rem;">“O2O浸入式学习”<br>
          “线上翻转式课堂”<br>
          “闭环学习解决方案”<br>
          <span class="bold">磁课英语</span>，绝对让你<span class="bold">“陷于才华”</span><br>▼
        </h1>
        <img src="../assets/images/wechat/35453.jpg">
      </div>
      <div class="box">
        <h1 style="margin: 1.6rem 0 0.6rem;">在东大街校区的开业庆祝会上<br>
          迎来了久违的老学员，老朋友们<br>
          感谢大家，一路见证磁课英语成长<br>▼
        </h1>
        <img src="../assets/images/wechat/455.jpg">
      </div>
      <div class="box" style="margin-bottom: 5rem;">
        <h1 style="font-weight: bolder">磁力全开，干货满满<br>
          活力不减，热情更多<br>
          我们，等你来，一起开启学习之旅
        </h1>
      </div>
    </div>

    <div class="box">
      <!--<img src="../assets/images/wechat/price.jpg">-->
      <price-mashine></price-mashine>
    </div>
    <div class="box">
      <div class="welfare">
        <h2>本期福利</h2>
        <br>
        <h1>在文末留言参与本期互动的小伙伴</h1>
        <br>
        <h1>我们将抽取30位获得500元代金卷</h1>
        <br>
        <h1>代金卷可在磁课英语所有校区消费哦。</h1>
        <br>
      </div>
    </div>
    <div class="box">
      <h2>【东门校区位置】</h2>
      <div class="addres-box">
        <img class="address" src="../assets/images/wechat/my.jpg">
        <h4>地铁2号线东门大桥站站口，明宇金融广场29楼1号(近太古里)<br>电话：133 0820 2931</h4>
      </div>
    </div>
    <div class="box">
      <a class="address1">磁课英语各校区详细地址</a>
      <img src="../assets/images/wechat/map9.4.jpg">
      <img src="../assets/images/wechat/bottom.jpg">
    </div>
    <!--<div class="box">-->
      <!--<h2>【东门校区位置】</h2>-->
      <!--<div class="addres-box">-->
        <!--<img class="address" src="../assets/images/wechat/loader_1.gif">-->
        <!--<h4 >地铁2号线东门大桥站站口，明宇金融广场29楼1号(近太古里)<br>电话：133 0820 2931</h4>-->
        <!--<img src="../assets/images/wechat/map9.4.jpg">-->
      <!--</div>-->
    <!--</div>-->

    <div class="box">
      <div class="pl-box" style="display: flex;align-items: center;justify-content: space-between;color: #999;background-color: #fff">
        <div>阅读 6972</div>
        <div style="display: flex;align-items: center;" @click="goodClick">
          <img style="display: inline-block;width: 26px" v-if="isgood" src="../assets/images/wechat/iconfont/praise_fill.png"/>
          <img style="display: inline-block;width: 26px" v-else src="../assets/images/wechat/iconfont/praise.png"/>
          <span :style="isgood?'color: #d81e06':''">{{good_num}}</span>
        </div>
      </div>
    </div>

  </div>

  <div class="commentAll">
    <!--回复区域 begin-->
    <div class="pl-box">
      <h5>精选留言</h5>
      <a class="ly" @click="toBottom">写留言</a>
    </div>
    <comment v-for="(item, index) in commentList" :data="item" :key="index"></comment>
    <!--评论区域 begin-->
    <!--<div class="reviewArea clearfix" id="pl">-->
      <!--<textarea class="ly-box comment-input" placeholder="发表您的留言。。。" onkeyup="keyUP(this)"></textarea>-->
      <!--<a href="javascript:;" class="plBtn">留言</a>-->
    <!--</div>-->
    <comment-textarea></comment-textarea>
    <div ref="msg_end" style="height: 0px;overflow: hidden"></div>
  </div>
    <!--弹窗二维码-->
    <div v-transfer-dom>
      <x-dialog v-model="showQR" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../assets/images/wechat/erwema.png" style="max-width:100%;pointer-events: auto">
        </div>
        <p style="padding-bottom: 10px">长按关注我们</p>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import {XDialog, TransferDomDirective as TransferDom} from 'vux'
  import PriceMashine from '../components/PriceMachine'
  import Comment from '../components/Comment'
  import CommentTextarea from '../components/CommentTextarea'
  import { commentList } from '../assets/js/cikeBaiduData'
  import wx from 'weixin-js-sdk'
  export default {
    name: 'WeChat',
    directives: {
      TransferDom
    },
    components: {
      PriceMashine,
      Comment,
      CommentTextarea,
      XDialog
    },
    data () {
      return {
        showQR: false,
        commentList: commentList,
        isgood: false,
        good_num: 56
      }
    },
    mounted () {
      const url = document.location.href
      const _this = this
      this.$http.get('http://www.cike.hk/app/weixin/jsTicket', {
        params: {
          url: url
        }
      }).then(function (response) {
        console.log(response)
        wx.config({
          debug: false,
          appId: response.data.appId,
          timestamp: response.data.timestamp,
          nonceStr: response.data.noncestr,
          signature: response.data._wxSignature,
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
          ]
        })
        var shareData = typeof (shareData) === 'undefined' ? {
          title: '定义成人英语新玩法，磁课英语第四家分校高颜值来袭',
          desc: '【磁课英语】专业成人英语口语培训机构',
          link: url,
          imgUrl: 'http://cikeenglish.oss-cn-shenzhen.aliyuncs.com/activity/cikeweichatlogo.png',
          success: function () {
            _this.$http.get('http://www.cike.hk/app/api/cike/sign', {
              params: {
                g_tk: 5381,
                goal: 100,
                type: 'homePage'
              }
            }).then(function (response) {
              if (response.data.data.state) {
                console.log('主页已经分享过了')
              } else {
                _this.shareAfter = true
              }
            })
          },
          cancel: function () {
          }
        } : shareData
        wx.ready(() => {
          wx.onMenuShareAppMessage(shareData)
          wx.onMenuShareTimeline(shareData)
          wx.onMenuShareWeibo(shareData)
          wx.onMenuShareQQ(shareData)
        })
        wx.error(function (res) {
          console.log('wx err', res)
        })
      })
    },
    methods: {
      // 微信认证

      // 滚动到最底部
      toBottom () {
        // var ele = document.getElementById('#wrap')
        // ele.scrollTop = ele.scrollHeight
        // console.log(ele)
        const end = this.$refs.msg_end
        end.scrollIntoView()
      },
      goodClick () {
        if (this.isgood) {
          this.isgood = false
          this.good_num--
        } else {
          this.isgood = true
          this.good_num++
        }
      }
    }
  }
</script>

<style scoped>
  .wrap{
    background-color: #fff;
  }
  .time{display: block; font-size: 1.6rem;opacity: 0.8; margin:1rem auto; color:#0A1342;}
  .time span{ color: #999; margin-left: 3rem}
  .content{ width: 92%; margin: 0 auto; overflow: hidden;}
  .box{ width: 100%; margin: 10px 0;text-align: center}
  .b-title{font-size: 24px;color: #111111; font-weight: bold;line-height: 1.3;letter-spacing: 2px;text-align: left}
  h1{ display: block;
    font-size: 14px;
    color: #111;
    opacity: 0.8;
    line-height: 20px;
    width: 100%;
    text-align: center;
    letter-spacing: 0.2rem;
    font-weight: normal;}
  h2{ font-size:18px; color: #111; font-weight: bold; margin-bottom: 1rem;}
  h3 {
    display: block;
    font-size: 14px;
    color: #111;
    opacity: 0.8;
    margin: 3px 0 6px 0;
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bolder;
  }
  h5{ display: block; font-size:15px; color: #999; float: left; font-weight: normal;}
  .addres-box{width: 100%; overflow: hidden;}
  .address{ width: 50%;float: left;}
  h4{ display: block; width: 72%; float: left; margin-left: 4%; color: #666; font-size: 14px;}
  h4{    display: block;
    width: 45%;
    float: left;
    margin-left: 5%;
    margin-top: 40px;
    color: #333;
    line-height: 1.8;
    font-size: 14px;
    opacity: 0.8;}
  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  /*初始化样式*/
  li{list-style: none;}
  a{text-decoration: none;}
  img{outline: none;border: 0; pointer-events: none;display: block; width: 100%;}
  body{font-family: "Microsoft Yahei";}
  .commentAll{width:92%;padding: 4%;margin: 20px auto 0; background-color:#f2f2f2}
  .pl-box{width: 92%; margin: 0 auto;overflow: hidden;}
  .pl-box .ly{display: block;font-size: 15px; color: #042376;float: right;}
  .welfare{
    background-color: #fff;
    border-right: 2px solid #666;
    border-left: 2px solid #666;
    text-align: center;
    margin: 30px 0;
  }
  .dialog-demo .img-box {
    overflow: hidden;
  }
  .bold{
    font-weight: bolder;
  }
  .toptime {
    display: block;
    margin: 50px auto 0;
    width: 120px;
    height: 22px;
    background-color: #725B47;
    color: #fff;
    padding: 3px 5px;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .address1 {
    display: block;
    margin: 1rem auto;
    width: 160px;
    height: 22px;
    background-color: #725B47;
    color: #fff;
    padding: 3px 5px;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
