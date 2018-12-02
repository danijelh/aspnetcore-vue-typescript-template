import Vue from 'vue'
import Vuex from 'vuex'

import counterModule from './modules/counter-module'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        version: '1.0.0'
    },
    modules: {
        counterModule: counterModule
    }
})
