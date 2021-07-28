// import 'vue-class-component/hooks';
import Vue, { CreateElement } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataRelevance from './plugin/data-relevance';
import './direct/index';

Vue.config.productionTip = false;

Vue.use(dataRelevance);

new Vue({
  router,
  store,
  render: (h: CreateElement) => h(App),
}).$mount('#app');
