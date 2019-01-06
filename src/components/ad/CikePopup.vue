<template>
  <div style="position:relative;margin: 30px auto">
    <div class="box">
      <div class="gooey"><img class="logo" src="../../assets/images/ad/logo111.png"></div>
      <img class="tx tx-1" src="../../assets/images/ad/in-out.png" @click="show1=true">
      <img class="tx tx-2" src="../../assets/images/ad/yuxi.png" @click="show2=true">
      <img class="tx tx-3" src="../../assets/images/ad/wenda.png" @click="show3=true">
    </div>
    <div v-transfer-dom>
      <popup v-model="show1">
        <div class="popup0">
          <img src="../../assets/images/ad/tc-1.png" width="100%"/>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="show2">
        <div class="popup0">
          <img src="../../assets/images/ad/tc-2.png" width="100%"/>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="show3">
        <div class="popup0">
          <img src="../../assets/images/ad/tc-3.png" width="100%"/>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {Popup, TransferDom} from 'vux'
  export default {
    name: 'CikePopup',
    directives: {
      TransferDom
    },
    components: {
      Popup
    },
    data () {
      return {
        show1: false,
        show2: false,
        show3: false
      }
    }
  }
</script>

<style scoped>
  .box{
    animation: fadeIn 500ms reverse;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /*height: 300px;*/
    color: #0d0722;
  }
  .gooey{
    background-image: linear-gradient(120deg, #ffdc9f 0%, #f78469 100%);
    border-radius: 32% 68% 70% 30% / 45% 45% 55% 55%;
    width: 220px;
    height: 202px;
    animation: morph 3s linear infinite;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
    will-change: border-radius;
  }
  .gooey:before,
  .gooey:after{
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0; top: 0;
    border-radius: 42% 58% 70% 30% / 35% 45% 65% 55%;
    box-shadow: 5px 5px 40px rgba(185, 76, 51, 0.21);
    will-change: border-radius, transform, opacity;
    animation-delay: 200ms;
    background-image: linear-gradient(120deg, rgba(255,220,159,.55) 0%, rgba(247,132,200,.89) 100%);
  }


  .gooey:before{
    animation: morph 3s linear infinite;
    opacity: .21;
    animation-duration: 1.5s;
  }
  .logo{
    display: block;
    width: 55%;
    position: absolute;
    left: 25%;
    top:22%;
    z-index: 1000;
  }
  .tx {
    -webkit-animation: floating 3s ease infinite;
    -khtml-animation: floating 3s ease infinite;
    -moz-animation: floating 3s ease infinite;
    -ms-animation: floating 3s ease infinite;
    -o-animation: floating 3s ease infinite;
    animation: floating 3s ease infinite;
    width: 110px;
    display: block;
  }
  .tx-1 {
    position: absolute;
    top: 0;
    right: 5%;
    -webkit-animation-delay: .5s;
    -khtml-animation-delay: .5s;
    -moz-animation-delay: .5s;
    -ms-animation-delay: .5s;
    -o-animation-delay: .5s;
    animation-delay: .5s
  }
  .tx-2 {
    position: absolute;
    top: 50%;
    margin-top: -15%;
    left:2%;
    -webkit-animation-delay: 1s;
    -khtml-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -ms-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s
  }
  .tx-3 {
    position: absolute;
    bottom: 0;
    right: 10%;
    -webkit-animation-delay: 1.5s;
    -khtml-animation-delay: 1.5s;
    -moz-animation-delay: 1.5s;
    -ms-animation-delay: 1.5s;
    -o-animation-delay: 1.5s;
    animation-delay: 1.5s
  }
  .popup0{
    width: 100%;
  }
  @keyframes morph{
    0%,100%{
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    34%{
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform:  translate3d(0,5px,0) rotateZ(0.01deg);
    }
    50%{
      opacity: .89;
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    67%{
      border-radius: 90% 60% 60% 100% / 100% 100% 60% 60% ;
      transform: translate3d(0,-3px,0) rotateZ(0.01deg);
    }
  }

  @keyframes fadeIn{
    100%{
      transform: scale(1.03);
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes floating {
    0% {
      -webkit-transform:translateY(0px);
      -khtml-transform:translateY(0px);
      -moz-transform:translateY(0px);
      -ms-transform:translateY(0px);
      -o-transform:translateY(0px);
      transform:translateY(0px)
    }
    50% {
      -webkit-transform:translateY(20px);
      -khtml-transform:translateY(20px);
      -moz-transform:translateY(20px);
      -ms-transform:translateY(20px);
      -o-transform:translateY(20px);
      transform:translateY(20px)
    }
    100% {
      -webkit-transform:translateY(0px);
      -khtml-transform:translateY(0px);
      -moz-transform:translateY(0px);
      -ms-transform:translateY(0px);
      -o-transform:translateY(0px);
      transform:translateY(0px)
    }
  }
</style>
