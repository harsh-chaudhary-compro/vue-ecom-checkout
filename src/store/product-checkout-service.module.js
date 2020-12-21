import axios from 'axios';

const checkoutService = {
  namespaced: true,
  state: {
    cartInfo: null,
  },
  actions: {
    addToCart({ commit }) {
      axios.get(`${this._vm.$AppConfig.BASE_URL}/todos/1`)
        .then((response) => {
          commit('setCartInfo', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    setCartInfo: (state, info) => {
      state.cartInfo = info;
    },
  },
  getters: {
    getCartInfo: (state) => (state.cartInfo),
  },
};

export default checkoutService;
