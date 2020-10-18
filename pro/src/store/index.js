import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: null
  },
  mutations: {
    SET_USERNAME(state, name){
      state.userName = name
    }
  },
  actions: {
  },
  modules: {
  }
})
