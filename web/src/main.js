import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/reset.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import './assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
