const state = {
    count: 0
}

const getters = {
    count(state) {
        return state.count
    }
}

const mutations = {
    SET_COUNT(state, value) {
        state.count = value
    }
}

const actions = {
    increaseCount({ commit, getters }) {
        commit('SET_COUNT', getters.count + 1)
    },

    resetCount({ commit }) {
        commit('SET_COUNT', 0)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
