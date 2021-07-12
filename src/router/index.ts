import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test';
import Test2 from '../views/Test2.vue';
import AdDemo from '../views/AdDemo/AdDemo';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2,
  },
  {
    path: '/adDemo',
    name: 'adDemo',
    component: AdDemo,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
