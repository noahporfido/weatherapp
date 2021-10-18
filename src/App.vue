<template>
  <div id="app">
    <loader v-show="$store.state.loaderState" class="loader"></loader>
    <router-view />
  </div>
</template>

<script>
import { Loader } from "@/components";

export default {
  components: { Loader },
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
