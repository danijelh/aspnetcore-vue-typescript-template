import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.performance = true

Vue.use(VueRouter)

import store from './store/store'
import { router } from './router/router'

import App from './App.vue'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
