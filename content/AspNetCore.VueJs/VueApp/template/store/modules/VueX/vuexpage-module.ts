import { Module } from 'vuex'
import { GetterTree } from 'vuex'
import { ActionTree } from 'vuex'
import { MutationTree } from 'vuex'
import { RootState } from '@/template/store/state'

import { VuexPageState } from './vuexpage-state'

const state: VuexPageState = {
	count: 0
}

const getters: GetterTree<VuexPageState, RootState> = {
	count(state): Number {
		return state.count
	}
}

const mutations: MutationTree<VuexPageState> = {
	SET_COUNT(state, value: Number) {
		state.count = value
	}
}

const actions: ActionTree<VuexPageState, RootState> = {
	increaseCount({ commit, getters }): void {
		commit('SET_COUNT', getters.count + 1)
	},

	resetCount({ commit }): void {
		commit('SET_COUNT', 0)
	}
}

const namespaced: boolean = true
export const vuexPageModule: Module<VuexPageState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
}
