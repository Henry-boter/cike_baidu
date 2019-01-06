<template>
  <div class="ad">
    <banner></banner>
    <div class="main">
      <cike-popup></cike-popup>
      <price-cousult></price-cousult>
      <div style="height: 300px"></div>
    </div>
  </div>
</template>

<script>
  import Banner from '../components/ad/Banner'
  import CikePopup from '../components/ad/CikePopup'
  import PriceCousult from '../components/PriceConsult'
  export default {
    name: 'Advertising',
    components: {
      Banner,
      CikePopup,
      PriceCousult
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
        }]
      }
    }
  }
</script>

<style scoped lang="less">

</style>
