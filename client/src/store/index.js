import Vue from "vue";
import Vuex from "vuex";
import Irregular from "./modules/irregular";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Irregular
  }
});
