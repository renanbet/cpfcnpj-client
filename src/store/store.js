/*
* Vuex: Controle de estados da aplicação
*/
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  strict: true,
  state: {
    user: {}
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
    },
  },
  actions: {
    setUser: (context, payload) => {
      context.commit('setUser', payload)
    },
  }
})
