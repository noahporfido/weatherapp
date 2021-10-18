<template>
  <div class="home-container"></div>
</template>

<script>
import inputField from "@/components/InputField.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    inputField,
  },
  created() {
    this.getWheaterWithZipCode(6003);
  },
  methods: { ...mapActions(["getWheaterWithZipCode"]) },
};
</script>
