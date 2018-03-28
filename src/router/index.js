import Vue from 'vue'
import Router from 'vue-router'
import CikeBaidu from '@/pages/CikeBaidu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CikeBaidu',
      component: CikeBaidu
    }
  ]
})
