<template>
  <div class="comment-show">
    <div class="comment-show-con clearfix">
      <div class="comment-show-con-img pull-left">
        <img :src="data.header" alt="" width="100%">
      </div>
      <div class="comment-show-con-list pull-left clearfix">
        <div class="pl-text clearfix">
          <a href="javascript:;" class="comment-size-name">{{data.nick}} : </a>
          <span class="my-pl-con">{{data.content}}</span>
        </div>
        <div class="date-dz">
          <span class="date-dz-left pull-left comment-time">{{data.post_time}}</span>
          <div class="date-dz-right pull-right comment-pl-block">
            <a href="javascript:;" @click="clickZan(data)" class="date-dz-z pull-left" :style="data.zan?'color: #d81e06':''">
              <i class="date-dz-z-click-red" v-if="data.zan"></i>
              <i class="date-dz-z-click" v-else></i>
              赞 (<i class="z-num">{{data.zan_num}}</i>)
            </a>
          </div>
        </div>
        <div v-if="data.author_msg">
          <h1 style="font-size: 12px;font-weight: normal;color: #8b8b8b"><i style="display: inline-block;height: 16px;width: 2px;background-color: #0bb20c;margin-right: 3px;transform: translateY(3px)"></i>作者</h1>
          <p style="font-size: 12px;color: #8b8b8b">{{data.author_msg}}</p>
        </div>
        <div class="hf-list-con"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props: {
      data: {
        type: Object,
        default: {
          'nick': '阿三',
          'messageType': 1,
          'group_id': 53,
          'header': 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJkXV9ulPaGA9q5GXq03AzNcW0icCfZvv6zibjItNDaxn1UA0Sz4hIYicqyaoKUyrSIHqXfNcAlbEzvg/132',
          'id': 1829,
          'content': '来啊，造作啊！',
          'zan': false,
          'zan_num': 10,
          'post_time': '2018-09-04 17:32:22'
        }
      }
    },
    methods: {
      clickZan (item) {
        if (item.zan) {
          item.zan = false
          item.zan_num--
        } else {
          item.zan = true
          item.zan_num++
        }
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

  .comment-show{margin-top: 20px;}
  .comment-show-con {
    width: 100%;
    border-bottom: 1px solid #e1e1e1;
    padding: 10px 0;
  }
  .comment-show-con-img {
    width: 34px;
    height: 34px;
    overflow: hidden;
    margin-top: 5px;
    border-radius: 3px;
  }
  /*浮动*/
  .pull-right{float: right !important;}
  .pull-left{float: left !important;}
  .comment-show-con-list {
    width: 80%;
    margin-left: 3%;
  }
  .pl-text {
    width: 100%;
    margin-top: 7px;
    word-wrap: break-word;
    overflow: hidden;
  }
  .comment-size-name {
    font-size: 12px;
    color: #339b53;
  }
  .my-pl-con {
    font-size: 12px;
    color: #8b8b8b;
    width: 100%;
  }
  .date-dz {
    width: 100%;
    float: left;
  }
  .date-dz-left {
    font-size: 12px;
    color: #8b8b8b;
    display: block;
    padding-top: 18px;
  }
  .comment-time, .comment-pl-block {
    padding-top: 7px;
  }
  .date-dz-right {
    display: block;
    padding-top: 6px;
    padding-right: 18px;
    position: relative;
    overflow: hidden;
  }
  .date-dz-pl, .date-dz-line, .date-dz-z {
    font-size: 12px;
    color: #8b8b8b;
  }
  .date-dz-z-click-red {
    width: 20px;
    height: 20px;
    display: block;
    float: left;
    background-image: url(../assets/images/wechat/iconfont/like_fill.png);
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5px;
  }
  .date-dz-z-click {
    width: 20px;
    height: 20px;
    display: block;
    float: left;
    background-image: url(../assets/images/wechat/iconfont/like.png);
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 5px;
  }
  .z-num {
    font-style: normal;
  }
  .hf-list-con {
    float: left;
    width: 100%;
    background-color: #eaeaec;
    margin-top: 7px;
  }
</style>
