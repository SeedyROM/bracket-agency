import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  count: 0,
}

const mutations = {
  increment(newState) {
    newState.count += 1
  },
  decrement(newState) {
    newState.count -= 1
  },
}

const actions = {
  increment({ commit }) {
    commit('increment')
  },
  decrement({ commit }) {
    commit('decrement')
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [
    createPersistedState(),
    createLogger(),
  ],
})
