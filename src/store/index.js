import { createStore } from 'vuex';

export default createStore({
  state: {
    avatar: 'https://picsum.photos/seed/picsum/200/300',
    fullname: 'Vasya Petrov',
    age: 30,
    showAvatar: true,
  },
  mutations: {
    hideAvatar(state) {
      state.showAvatar = false;
    },
  },
  actions: {},
  modules: {},
});
