<template>
  <div class="card-container">
    <div class="info-container">
      <p>City</p>
      <h2>{{ cardData.location }}</h2>
    </div>
    <hr />
    <div class="info-container">
      <p>Temperature</p>
      <h2>{{ getTempRounded }}°</h2>
    </div>
    <hr />
    <div class="info-container">
      <p>Pressure</p>
      <h2>{{ cardData.pressure }} hPa</h2>
    </div>
    <hr />
    <div class="info-container">
      <p>Sunset</p>
      <h2>{{ getDate(cardData.sunset) }}</h2>
    </div>
    <hr />
    <div class="info-container">
      <p>Sunrise</p>
      <h2>{{ getDate(cardData.sunrise) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    cardData: Object,
  },
  methods: {
    getDate(dateString) {
      //multiply by 1000 for milliseconds
      const date = new Date(dateString * 1000);

      //check if 0 must be added infront of time
      return `${
        date.getHours().toString().length > 1 ? "" : "0"
      }${date.getHours()} : ${date.getMinutes()}`;
    },
  },
  computed: {
    getTempRounded() {
      return Math.floor(this.cardData.temperature);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 15px;
  max-width: 800px;
  width: 40vw;
  min-width: 300px;
}
</style>