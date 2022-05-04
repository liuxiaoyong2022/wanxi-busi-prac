import Vue from "vue";
import App from "./mytry/try-route/App.vue";
import router from './mytry/try-route/router'
import store from './mytry/map-state/store';

// Vue.use(store);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app123");
