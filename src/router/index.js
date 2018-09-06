import Vue from 'vue'
import Router from 'vue-router'
import CikeBaidu from '@/pages/CikeBaidu'
import Business from '@/pages/Business'
import Travel from '@/pages/Travel'
import WeChat from '@/pages/WeChat'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'CikeBaidu', component: CikeBaidu},
    {path: '/business', name: 'business', component: Business},
    {path: '/travel', name: 'travel', component: Travel},
    {path: '/WeChat', name: 'WeChat', component: WeChat}
  ]
})
