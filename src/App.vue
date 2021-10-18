<template>
  <div id="app">
    <notification-header :expand="getShowHeader"></notification-header>
    <loader v-if="getLoaderState" class="loader"></loader>
    <router-view />
  </div>
</template>

<script>
import { Loader, NotificationHeader } from "@/components";

export default {
  components: { Loader, NotificationHeader },
  computed: {
    getShowHeader() {
      return this.$store.state.user.showHeader;
    },
    getLoaderState() {
      return this.$store.state.user.loaderState;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200&display=swap");

body {
  background-color: #4abdac;
  color: white;
  position: relative;
  height: 100vh;

  #app {
    font-family: "Raleway", sans-serif;

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(50%);
    }
  }
}
</style>
