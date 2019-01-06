<template>
  <div class="banner">
    <swiper
      :list="list"
      v-model="index"
      auto
      loop
      height="100vh"
      :show-dots="false"
      :show-desc-mask="false"
      @on-index-change="onIndexChange"></swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  export default {
    name: 'Advertising',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      list: {
        type: Boolean,
        default: []
      }
    },
    data () {
      return {
        index: 0
      }
    },
    methods: {
      onIndexChange (index) {
        this.index = index
      }
    }
  }
</script>

<style scoped lang="less">

</style>
