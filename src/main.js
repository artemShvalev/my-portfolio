import Vue from 'vue';
import normalize from 'normalize.css';
import * as VueThreejs from 'three';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(normalize, VueThreejs);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
