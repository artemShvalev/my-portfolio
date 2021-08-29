import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import Works from '../components/Works.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
