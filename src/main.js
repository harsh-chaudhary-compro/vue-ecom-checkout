import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './configuration/configuration';

Vue.config.productionTip = false;
Vue.prototype.$AppConfig = config.getConfig();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
