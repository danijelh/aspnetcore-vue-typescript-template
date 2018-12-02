import VueRouter from 'vue-router'

// Pages
import Vuex from '@/template/views/Vuex.vue'
import TemplateInfo from '@/template/views/TemplateInfo.vue'
import ThirdPartyLibraries from '@/template/views/ThirdPartyLibraries.vue'

const routePrefix = 'template'

const routes = [
	{
		path: '*',
		redirect: { name: 'templateInfo' }
	},
	{
		name: 'templateInfo',
		path: `/${routePrefix}/info`,
		component: TemplateInfo
	},
	{
		name: 'vuex',
		path: `/${routePrefix}/vuex`,
		component: Vuex
	},
	{
		name: 'thirdpartylibraries',
		path: `/${routePrefix}/thirdpartylibraries`,
		component: ThirdPartyLibraries
	}
]

export const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
