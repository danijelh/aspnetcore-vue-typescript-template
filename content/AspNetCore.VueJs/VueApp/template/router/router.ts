import VueRouter from 'vue-router'

// Pages
import VueX from '@/template/views/VueX.vue'
import TemplateInfo from '@/template/views/TemplateInfo.vue'
import ThirdPartyLibraries from '@/template/views/ThirdPartyLibraries.vue'

const routes = [
	{
		path: '*',
		redirect: { name: 'templateInfo' }
	},
	{
		name: 'templateInfo',
		path: '/template',
		component: TemplateInfo
	},
	{
		name: 'vuex',
		path: '/vuex',
		component: VueX
	},
	{
		name: 'thirdpartylibraries',
		path: '/thirdpartylibraries',
		component: ThirdPartyLibraries
	}
]

export const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
