import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import {request} from './services/request'
request({
  url:'/api/public/v1/home/swiperdata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})