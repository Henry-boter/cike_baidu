<template>
  <div>
    <div class="reviewArea clearfix" id="pl">
      <textarea v-model="message" class="ly-box comment-input" placeholder="发表您的留言。。。"></textarea>
      <a href="javascript:;" class="plBtn" @click="checkMessage">留言</a>
    </div>

    <!--预约到校-->
    <div v-transfer-dom>
      <popup v-model="isPoup" position="bottom" max-height="100%">
        <img class="popup-logo" src="../assets/images/baiduImg/buttom_logo.png" onclick="return false"/>
        <div class="popup-content">
          <h2 class="popup-content-title">注册后即有机会获得本期活动大奖</h2>
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
          <div class="come-school-btn" @click="submitComeSchool(phoneComeSchool, userName)">提 交</div>
          <div class="come-school-tips">我们将承诺，尊重并保护您的隐私</div>
        </div>
      </popup>
    </div>

    <!--顶部提示框-->
    <div v-transfer-dom>
      <popup v-model="isTopTips" position="top" :show-mask="false">
        <div class="tips-box">
          {{topTipsText}}
        </div>
      </popup>
    </div>
    <!--顶部提示框结束-->
  </div>
</template>

<script>
  import {Popup, Group, XInput, TransferDomDirective as TransferDom} from 'vux'
  import isMobilePhone from 'validator/lib/isMobilePhone'
  export default {
    name: 'CommentTextarea',
    directives: {
      TransferDom
    },
    components: {
      Popup,
      Group,
      XInput
    },
    data () {
      return {
        message: '',
        isPoup: false,
        userName: '',
        iconTypeComeSchool: '',
        phoneComeSchool: '',
        isTopTips: false,
        topTipsText: ''
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
      checkMessage () {
        if (this.message) {
          this.isPoup = true
        } else {
          this.topTipsText = '请输入留言内容'
          this.isTopTips = true
        }
      },
      //      到校预约
      submitComeSchool (phone, userName) {
        const _this = this
        if (isMobilePhone(phone, 'zh-CN')) {
          this.iconTypeComeSchool = 'success'
          let type = '留言: ' + this.message
          let name = userName + ',' + type
          this.getUserSave(phone, name)
          this.$vux.alert.show({
            title: '感谢参与本次活动！',
            content: '抽中福利我们会与您取得联系哦，请保持手机通畅。',
            onHide () {
              _this.isPoup = false
              _this.message = ''
            }
          })
        } else {
          this.iconTypeComeSchool = 'error'
          this.topTipsText = '请输入正确的电话号码'
          this.isTopTips = true
        }
      },
      //      发送消息
      getUserSave (phone, name) {
        console.log(phone)
        console.log(`${name}。info:${JSON.stringify(this.$route.query)}`)
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
      }
    }
  }
</script>

<style scoped>
  /*清除浮动*/
  .clearfix:before,
  .clearfix:after{content: " ";display: table;}
  .clearfix:after{clear: both;}
  .clearfix{zoom: 1;}
  .ly-box{float: left;}
  .flex-text-wrap,
  textarea { margin-bottom: 25px }
  textarea,
  .flex-text-wrap pre {
    line-height: 1.7;
    text-indent: 15px;
    padding-top: 5px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 1px solid #c6c8ce;
    width: 100%;
    margin: 0 auto;
    -webkit-appearance: none;
    background: #fff;
    border-radius: 3px;
    background-clip: padding-box;
    box-shadow: 0 0 8px rgba(182, 195, 214, .6) inset, 0 1px 1px #fff;
    transition-duration: 300ms;
    transition-easing: ease-in-out;
    transition-property: border-color, box-shadow;
  }
  .plBtn{width: 75px;height: 36px;line-height: 36px;background-color: #339b53;text-align: center;display: block;float: right;color: #FFFFFF;font-size: 12px;border-radius: 6px;margin-right: 2px;margin-top: 10px;}
  .plBtn:hover{background-color: #2f904d;}
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
    font-size: 18px;
    color: #333;
    text-align: center;
    margin-bottom: 20px
  }
  .popup-content .come-school{
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .input-icon{
    padding-right:10px;
    display:block;
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
  .weui-cell {
    background-color: #eee;
  }
  .tips-box{
    background-color: rgba(231, 49, 49, 0.8);
    color: #fff;
    text-align: center;
    padding: 15px;
  }
</style>
