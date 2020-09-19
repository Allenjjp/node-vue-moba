import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/reset.scss'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
