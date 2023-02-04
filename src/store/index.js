import { createStore } from "vuex";

export default createStore({
  state: {
    user: { name: "", email: "" },
    isLogged: false,
    products: [
      { id: 1, name: "Bola", price: 100, quantity: 0 },
      { id: 2, name: "Luva", price: 200, quantity: 0 },
      { id: 3, name: "Meia", price: 400, quantity: 0 },
    ],
    cart: [],
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      );
    },
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    logUser(state) {
      state.isLogged = true;
    },
    addProductCart(state, product) {
      const hasItem = state.cart.some((item) => item.id === product.id);
      console.log(hasItem);
      if (hasItem == true) {
        const index = state.cart.findIndex((obj) => obj.id === product.id);
        state.cart[index].quantity += 1;
      } else {
        const newProduct = { isOnCart: true, ...product };
        state.cart.push(newProduct);
        const index = state.cart.findIndex((obj) => obj.id === product.id);
        state.cart[index].quantity += 1;
      }
    },
    removeProduct(state, product) {
      const index = state.cart.findIndex((obj) => obj.id === product.id);
      state.cart.splice(index, 1);
    },
    addQuantity(state, product) {
      const index = state.cart.findIndex((obj) => obj.id === product.id);
      state.cart[index].quantity += 1;
    },
    removeQuantity(state, product) {
      const index = state.cart.findIndex((obj) => obj.id === product.id);
      if (state.cart[index].quantity != 0 && state.cart[index].quantity != 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
