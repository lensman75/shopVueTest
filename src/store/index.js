import { createStore } from 'vuex';

export default createStore({
  state: {
    avatar: 'https://picsum.photos/seed/picsum/200/300',
    fullname: 'Vasya Petrov',
    age: 30,
    showAvatar: true,
    products: [
      { name: 'small product', price: 10 },
      { name: 'medium product', price: 15 },
      { name: 'large product', price: 20 },
      { name: 'product with a very long name', price: 100 },
    ],
  },
  mutations: {
    hideAvatar(state) {
      state.showAvatar = false;
    },
  },
  actions: {},
  modules: {},
});
