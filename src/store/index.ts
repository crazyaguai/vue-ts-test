import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    s1: 'state val s1',
  },
  mutations: {
    chengS1(state): void{
      state.s1 = 'new state val s1';
    },
  },
  actions: {
  },
  modules: {
  },
});
