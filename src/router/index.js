import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'CikeBaidu', component: resolve => require(['../pages/CikeBaidu'], resolve)}, // 主页
    {path: '/business', name: 'business', component: resolve => require(['../pages/Business'], resolve)}, // 商务学习
    {path: '/travel', name: 'travel', component: resolve => require(['../pages/Travel'], resolve)}, // 出国旅游
    {path: '/WeChat', name: 'WeChat', component: resolve => require(['../pages/WeChat'], resolve)}, // 微信推广
    {path: '/news', name: 'news', component: resolve => require(['../pages/news'], resolve)} // 用于腾讯新闻
  ]
})
