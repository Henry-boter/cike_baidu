<template>
  <div class="ad">
    <banner></banner>
    <div class="main">
      <cike-popup></cike-popup>
      <price-cousult></price-cousult>
      <!--<tab></tab>-->
      <stack :pages="stackList"></stack>
      <stack-swiper :pages="stackList"></stack-swiper>
      <div style="height: 300px"></div>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/ad/Banner'
  import CikePopup from '../components/ad/CikePopup'
  import PriceCousult from '../components/PriceConsult'
  import Tab from '../components/Tab'
  import Stack from '../components/stack'
  import StackSwiper from '../components/StackSwiper'
  export default {
    name: 'Advertising',
    components: {
      Banner,
      CikePopup,
      PriceCousult,
      Tab,
      Stack,
      StackSwiper
    },
    data () {
      return {
        bannerList: [{
          url: 'javascript:',
          img: 'http://www.cland.hk/wechat/Android/images/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'http://www.cland.hk/wechat/Android/images/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'http://www.cland.hk/wechat/Android/images/3.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'http://www.cland.hk/wechat/Android/images/4.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'http://www.cland.hk/wechat/Android/images/1.jpg', // 404
          title: '送你一次旅行',
          fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
        }],
        stackList: [
          {src: 'http://www.cland.hk/wechat/Android/images/1.jpg'},
          {src: 'http://www.cland.hk/wechat/Android/images/2.jpg'},
          {src: 'http://www.cland.hk/wechat/Android/images/3.jpg'},
          {src: 'http://www.cland.hk/wechat/Android/images/4.jpg'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">

</style>
