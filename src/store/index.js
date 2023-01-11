import { createStore } from 'vuex'

export default createStore({
  state: {
    user: { name: '', email: '' },
    isLogged: false,
  },
  getters: {
  },
  mutations: {
    storeUser(state,data) {
      state.user = data;
    },
    logUser(state) {
      state.isLogged = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
