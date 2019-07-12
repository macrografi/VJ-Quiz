<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col md="10">
        <h1 style="margin-top:20px; text-align:center;">{{verb}} / {{tense}} / {{meaning}}</h1>
        <!-- <b-form-input v-model="answer" placeholder="Enter your name"></b-form-input>

        <div style="margin-top:20px;">
          <b-button variant="primary" @click="clickAnswer">Primary</b-button>
          <b-button variant="secondary">Secondary</b-button>
        </div>-->
        
        <div class="mt-2" style="display:none">{{myArray}}</div>
        <b-button variant="primary" @click="clickAnswer">Primary</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      myArray: [],
      verb: "",
      tense: "",
      meaning: "",
      randomFunct: function(val) {
        let randomData = val[Math.floor(Math.random() * 10)];
        this.verb = randomData.verb;
        this.tense = randomData.tense;
        this.meaning = randomData.meaning;
      }
    };
  },
  created() {
    this.$store.dispatch("loadVerbs");
    let myVerbs = this.$store.getters;
    this.myArray.push(myVerbs);
  },
  beforeUpdate() {
    let myData = this.myArray[0].verbs;
    this.randomFunct(myData);
  },
  methods: {
    clickAnswer() {
      let myData = this.myArray[0].verbs;
      this.randomFunct(myData);
    }
  }
};
</script>
<style scoped lang="scss"></style>
