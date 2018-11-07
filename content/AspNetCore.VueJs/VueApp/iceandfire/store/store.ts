import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { GetterTree } from 'vuex'
import { ActionTree } from 'vuex'
import { MutationTree } from 'vuex'
import { RootState } from './state'
import { CharacterResponse } from '@/iceandfire/types/models/character'

import axios from 'axios'

Vue.use(Vuex)

const state: RootState = {
	character: {} as CharacterResponse
}

const getters: GetterTree<RootState, RootState> = {
	character(state): CharacterResponse {
		return state.character
	}
}

const actions: ActionTree<RootState, RootState> = {
	getCharacterById({ commit }, id: number): Promise<boolean> {
		return new Promise((resolve, reject) => {
			axios
				.get('/iceandfire/api/characters/' + id)
				.then(response => {
					const payload: CharacterResponse = response && response.data
					commit('SET_CHARACTER', payload)
					resolve(true)
				})
				.catch(error => {
					reject(error)
				})
		})
	}
}

const mutations: MutationTree<RootState> = {
	SET_CHARACTER(state, character: CharacterResponse) {
		state.character = character
	}
}

const store: StoreOptions<RootState> = {
	state,
	getters,
	actions,
	mutations
}

export default new Vuex.Store<RootState>(store)
