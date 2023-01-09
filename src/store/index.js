import { createStore } from 'vuex'

export default createStore({
  state: {
    user: { name: 'astolfo', email: 'xampson@gmail.com' },
    products: [],
    cart:[],
  },
  getters: {
  },
  mutations: {
    storeUser(state,data) {
      state.user = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
