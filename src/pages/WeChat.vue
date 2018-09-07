<template>
  <div ref="wrap" id="wrap" class="wrap">
  <div class="content">
    <div class="box">
      <p class="b-title">定义成人英语新玩法，磁课英语第四家分校高颜值来袭！</p>
      <a class="time" style="font-size: 16px" @click="showQR=true">磁课英语<span>9.10</span></a>
      <img src="../assets/images/wechat/top.png">
      <h1 >继桐梓林，鹭岛，软件园校区之后，磁课第四家校区诞生啦！<br>话不多说，先上图：</h1>
      <h2>【她的样子】</h2>
      <img src="../assets/images/wechat/1.jpg">
      <h1 >全幅落地玻璃门，白框金属框包裹的是一个极具科技感的教室，简单的线条勾勒，明晃晃反射出的都是课堂的“磁力”。</h1>
    </div>
    <div class="box">
      <img src="../assets/images/wechat/counter-b.jpg">
      <h1 >教室背后，一排落地窗前的吧台，坐在这里望出去，视野宽阔到让你想重新定义你所居住的城市。这里有的是开阔的景，放飞的心，和无拘无束，畅所欲言的课堂。</h1>
    </div>
    <div class="box">
      <img src="../assets/images/wechat/lounge-f.jpg">
      <h1 >往里穿过走道，沿着落地玻璃窗延伸的，又是一处开放舒适的教室，鲜亮的色彩，活泼的搭配，无遮挡的透镜，让你一天的学习也变得轻松生动起来。</h1>
    </div>
    <div class="box">
      <img src="../assets/images/wechat/4.jpg">
      <h1 >选好课堂，挑好教室，想想，开始学习的你，是什么样子？</h1>
    </div>

    <div class="box">
      <h2>【你在这的样子】</h2>
      <h1 >9月1日，东门校区迎来了盛大的开业典礼。</h1>
      <img src="../assets/images/wechat/15.jpg">
    </div>

    <div class="box">
      <h1 >当天，有老师和你们一起看过的风景，一起品尝过的食物</h1>
      <img src="../assets/images/wechat/13.jpg">
    </div>

    <div class="box">
      <h1 >一起玩的游戏，一起聊的天<br>
        从Icebreaker相互认识，到Movie ID妙语连珠，争相竟演融洽的气氛，生出冷气也压制不住的热络
      </h1>
      <img src="../assets/images/wechat/11.jpg">
    </div>

    <div class="box">
      <h1 >少不了的名师分享，磁课的老师们为你解锁什么才是“高效”的学习<br>
        掌声不断，欢呼不绝，他们带给你的不只是知识，更是“如何学习”本身<br>
        在磁课的课堂，你总能找到属于你的收获
      </h1>
      <img src="../assets/images/wechat/16.jpg">
    </div>

    <div class="box">
      <h1 >当然，这样的场合，少不了的是对你们的感谢<br>
        带走一份小小的礼物<br>
        带不走的是你们留下的欢笑
      </h1>
      <img src="../assets/images/wechat/14.jpg">
    </div>

    <div class="box">
      <h1 >在这样的环境里学习英语练习口语，有你期待的干货，有趣，惊喜<br>
        一群和你志同道合的小伙伴，助力你前进<br>
        现在，是不是已经可以想象你在这里学习的样子？
      </h1>
      <img src="../assets/images/wechat/1.jpg">
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
        <img class="address" src="../assets/images/wechat/loader_1.gif">
        <h4 >地铁2号线东门大桥站站口，明宇金融广场29楼1号(近太古里)<br>电话：133 0820 2931</h4>
        <img src="../assets/images/wechat/map9.4.jpg">
      </div>
    </div>

    <div class="box">
      <img src="../assets/images/wechat/bottom.jpg" style="pointer-events: auto">
      <div class="pl-box" style="display: flex;align-items: center;justify-content: space-between;color: #999;background-color: #fff">
        <div>阅读 3986</div>
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
  .box{ width: 100%; margin: 10px 0;}
  .b-title{font-size: 24px;color: #111111; font-weight: bold;}
  h1{ font-size:14px; color:#111; opacity: 0.8; margin:0.6rem 0 1.4rem 0;}
  h2{ font-size:18px; color: #111; font-weight: bold; margin-bottom: 1rem;}
  h5{ display: block; font-size:15px; color: #999; float: left; font-weight: normal;}
  .addres-box{width: 100%; overflow: hidden;}
  .address{ width: 20%; float: left; margin-left: 2%;}
  h4{ display: block; width: 72%; float: left; margin-left: 4%; color: #666; font-size: 14px;}

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
</style>
