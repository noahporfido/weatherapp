<template>
  <div class="home-container">
    <h1>Get to know your weather like your left pocket</h1>
    <div class="control-container">
      <p>Insert your the zip code from your city of choice</p>
      <input-field @input="setZipCode($event)" placeholder="Plz"></input-field>
      <button class="btn" @click="getweatherWithZipCode(zipCode)">
        Get weather
      </button>
      <!-- {{ getweatherToday }} -->
    </div>
  </div>
</template>

<script>
import inputField from "@/components/InputField.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    inputField,
  },
  data() {
    return {
      zipCode: 0,
    };
  },
  methods: {
    ...mapActions(["getweatherWithZipCode"]),
    setZipCode(data) {
      this.zipCode = data;
    },
  },
  computed: { ...mapGetters(["getweatherToday"]) },
};
</script>

<style lang="scss" scoped>
.home-container {
  .control-container {
    max-width: 300px;
    width: 80%;
  }
}
</style>
