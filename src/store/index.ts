import Vue from 'vue';
import Vuex from 'vuex';

import initModules from '../views/AdDemo/modules';
import { initData, getFormData } from './utils';

const moduleData = initData(initModules);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    s1: 'state val s1',
    totalCount: 1,
    ...moduleData,
  },
  getters: {
    totalCountAddOne: (state) => state.totalCount + 1,
    formData: (state): any => getFormData(state),
  },
  mutations: {
    setTotalCount(state, payload) {
      state.totalCount = payload;
    },
    changeKeysData(state, payload) {
      const { key, val } = payload;
      state.keysData[key] = val;
    },
    chengS1(state): void {
      state.s1 = 'new state val s1';
    },
    changeAppVal1(state, payload): void {
      state.keysData[payload?.effectKey] = payload?.effectValue;
    },
  },
  actions: {
    changeTotalCount(context, payload): void{
      context.commit('setTotalCount', payload);
    },
    asyncChangeAppVal1(context, payload): void {
      context.commit({
        ...payload,
        type: 'changeAppVal1',
      });
    },
  },
  modules: {
  },
});
