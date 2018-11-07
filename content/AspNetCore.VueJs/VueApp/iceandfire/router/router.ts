import VueRouter from 'vue-router'

// Pages
import Characters from '@/iceandfire/views/Characters.vue'

const routes = [
	{
		path: '*',
		component: Characters
	},
	{
		name: 'characters',
		path: '/',
		component: Characters
	}
]

export const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
