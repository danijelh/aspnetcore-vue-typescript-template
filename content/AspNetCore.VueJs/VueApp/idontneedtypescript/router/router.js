import VueRouter from 'vue-router'

// Pages
import Counter from '@/idontneedtypescript/views/Counter'
import ModuleInfo from '@/idontneedtypescript/views/ModuleInfo'

const routePrefix = 'idontneedtypescript'

const routes = [
	{
		path: '*',
		redirect: { name: 'moduleinfo' }
	},
	{
		name: 'moduleinfo',
		path: `/${routePrefix}/info`,
		component: ModuleInfo
	},
	{
		name: 'counter',
		path: `/${routePrefix}/counter`,
		component: Counter
	}
]

export const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
