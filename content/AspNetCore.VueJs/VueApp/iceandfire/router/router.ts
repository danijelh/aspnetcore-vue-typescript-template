import VueRouter from 'vue-router'

// Pages
import Characters from '@/iceandfire/views/Characters.vue'

const routePrefix = 'iceandfire'

const routes = [
	{
		path: '*',
		component: Characters
	},
	{
		name: 'characters',
		path: `/${routePrefix}`,
		component: Characters
	}
]

export const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
