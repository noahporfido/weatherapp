<template>
  <div class="home-container">
    <h1>Get to know your weather like your left pocket</h1>
    <div class="content-container">
      <div class="control-container">
        <p>Insert the zip code from your city of choice</p>
        <input-field
          @input="setZipCode($event)"
          placeholder="PLZ"
        ></input-field>
        <button class="btn" @click="getWeatherWithZipCode(zipCode)">
          get weather
        </button>
        <!-- {{ getweatherToday }} -->
      </div>
      <weather-card
        v-if="getWeatherToday"
        :cardData="getWeatherToday"
      ></weather-card>
    </div>
  </div>
</template>

<script>
import { InputField, WeatherCard } from "@/components";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    InputField,
    WeatherCard,
  },
  data() {
    return {
      zipCode: 0,
    };
  },
  methods: {
    ...mapActions(["getWeatherWithZipCode"]),
    setZipCode(data) {
      this.zipCode = data;
    },
  },
  computed: { ...mapGetters(["getWeatherToday"]) },
};
</script>

<style lang="scss" scoped>
.home-container {
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .control-container {
      max-width: 300px;
      width: 80%;
    }
  }
}
</style>
