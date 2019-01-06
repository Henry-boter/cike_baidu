import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'CikeBaidu', component: resolve => require(['../pages/CikeBaidu'], resolve)},
    {path: '/business', name: 'business', component: resolve => require(['../pages/Business'], resolve)},
    {path: '/travel', name: 'travel', component: resolve => require(['../pages/Travel'], resolve)},
    {path: '/WeChat', name: 'WeChat', component: resolve => require(['../pages/WeChat'], resolve)},
    {path: '/ad', name: 'ad', component: resolve => require(['../pages/Advertising'], resolve)}
  ]
})
