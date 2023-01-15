import { createStore } from "vuex";

export default createStore({
  state: {
    user: { name: "", email: "" },
    isLogged: false,
    products: [
      { id: 1, name: "Bola", price: 100 },
      { id: 2, name: "Luva", price: 200 },
      { id: 3, name: "Meia", price: 400 },
    ],
    cart:[],
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    logUser(state) {
      state.isLogged = true;
    },
    addProductCart(state,data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const idx = state.cart.findIndex(obj => obj.id === id);
      state.cart.splice(idx, 1);
    }
  },
  actions: {},
  modules: {},
});
