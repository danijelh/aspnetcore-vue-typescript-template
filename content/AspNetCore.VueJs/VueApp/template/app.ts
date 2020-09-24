import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.performance = true

Vue.use(VueRouter)
Vue.use(VueCompositionAPI)

import store from './store/store'
import { router } from './router/router'

import App from './App.vue'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
