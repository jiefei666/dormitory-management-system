import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './core'

import '../mock'

/**
 * Import Style
 */

import '@/themes/index.less'

/**
 * Use Plugin
 */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
