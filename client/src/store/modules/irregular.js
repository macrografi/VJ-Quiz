import Vue from "vue";

const state = {
  verbs: []
};

const getters = {
  verbs: state => state.verbs
};

const actions = {
   loadVerbs({ commit }) {
     Vue.axios
      .get("http://localhost:8000/irregularverbs")
      .then(resp => {
        let data = resp.data;

        if (data) {
          commit("SET_VERBS", data);
        } 
        else {
          console.log("not found data");
        }
      })
      .catch(error => {
        console.log("err");
      });
  }
};

const mutations = {
  SET_VERBS(state, verbs) {
    state.verbs = verbs;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
