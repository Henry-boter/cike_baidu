<template>
  <div class="banner">
    <m-swipe swipeid="swipe" ref="swiper" effect="fade" :loop="true" :pagination="false">
      <div v-for="(top, idx) in bannerList" :key="idx" class="swiper-slide" slot="swiper-con">
        <img :src="top.img">
        <!--<h3>{{top.title}}</h3>-->
      </div>
    </m-swipe>
    <img class="title-img" src="http://www.cland.hk/wechat/Android/images/banner-text.png" alt="">
    <a class="page-move">
      <img src="http://www.cland.hk/wechat/Android/images/up.png" alt="">
    </a>
  </div>
</template>

<script>
  import MSwipe from '../Swiper'
  export default {
    name: 'banner',
    components: {
      MSwipe
    },
    data () {
      return {
        bannerList: [{
          img: 'http://www.cland.hk/wechat/Android/images/1.jpg',
          title: '送你一朵fua'
        }, {
          img: 'http://www.cland.hk/wechat/Android/images/2.jpg',
          title: '送你一辆车'
        }, {
          img: 'http://www.cland.hk/wechat/Android/images/3.jpg',
          title: '送你一辆车'
        }, {
          img: 'http://www.cland.hk/wechat/Android/images/4.jpg',
          title: '送你一辆车'
        }, {
          img: 'http://www.cland.hk/wechat/Android/images/1.jpg',
          title: '送你一次旅行'
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .banner{
    position: relative;
    .title-img{
      position: absolute;
      bottom: 110px;
      width: 100%;
      left: 0;
      z-index: 1;
    }
    .page-move{
      -webkit-animation: moveIconUp linear 1.5s infinite;
      position: absolute;
      bottom: 30px;
      left: 50%;
      width: 30px;
      margin-left: -15px;
      width: 30px;
      display: block;
      z-index: 1;
      img{
        width: 100%;
      }
    }
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .swiper-slide {
    div {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      position: absolute;
      background-color: blue;
    }
    img {
      width: 100%;
      top: 50%;
      position: relative;
      transform: translate(0, -50%);
    }
  }
  @-webkit-keyframes moveIconUp {
    100%{
      -webkit-transform: translate(0,-20px);
    }
    50%{
      -webkit-transform: translate(0,10px);
    }
    0%{
      -webkit-transform: translate(0,-20px);
    }
  }
</style>
