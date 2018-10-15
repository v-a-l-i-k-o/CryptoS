import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Index from './Index.vue';
import router from './router';

Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(Index)
});
