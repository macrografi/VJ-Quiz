import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios";
import VueAxios from "vue-axios";
import BootstrapVue from "bootstrap-vue";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
