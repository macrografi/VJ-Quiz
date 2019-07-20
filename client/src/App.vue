<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col md="10">
        <div v-if="isShow">
          <h1 style="margin-top:20px; text-align:center;">{{verb}} / {{tense}} / {{meaning}}</h1>
          <b-progress height="20px" :value="max * (count / length)" show-progress class="mb-2"></b-progress>
          <br />
          <b-form-input v-model="answer" placeholder="Enter your answer"></b-form-input>
          <br />
          <b-button variant="primary" @click="clickAnswer">Cevapla</b-button>
        </div>
        <div v-if="isEnd">
          <h1>Test Bitti</h1>
          <p>Puanınız</p>
          <p>Doğru Cevap : 1</p>
          <p>Yanlış Cevap : 1</p>
        </div>
        <b-button v-if="!isShow" variant="primary" @click="startQuiz">{{buttonText}}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      isEnd: false,
      myArray: [],
      answer: "",
      verb: "",
      tense: "",
      meaning: "",
      length: 0,
      max: 100,
      count: -1,
      buttonText: "teste başla",
      randomize: function() {
        let myData = this.myArray[0].verbs;
        let length = myData.length;
        this.length = length;
        let randomData = myData[Math.floor(Math.random() * 10)];
        this.verb = randomData.verb;
        this.tense = randomData.tense;
        this.meaning = randomData.meaning;
        this.count += 1;

        if (this.count >= this.length) {
          setTimeout(() => {
            this.isEnd = true;
            this.isShow = false;
            this.buttonText = "tekrar";
            this.count = -1;
          }, 700);
        } 
        else {
          this.isEnd = false;
          this.isShow = true;
        }
      }
    };
  },
  created() {
    this.$store.dispatch("loadVerbs");
    let myVerbs = this.$store.getters;
    this.myArray.push(myVerbs);
  },
  methods: {
    startQuiz() {
      this.isShow = true;
      this.randomize();
    },
    clickAnswer() {
      let payload = {
        answer: this.answer
      };
      if (payload.answer == this.meaning) {
        console.log("true");
      } else {
        console.log("false");
      }
      this.randomize();
    }
  }
};
</script>
<style scoped lang="scss"></style>
