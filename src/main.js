import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

FastClick.attach(document.body)
Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
