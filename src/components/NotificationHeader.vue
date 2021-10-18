<template>
  <div :class="{ expand: expand }" class="notification-container">
    <h1>An error happend, please try again</h1>
  </div>
</template>

<script>
export default {
  props: {
    expand: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.notification-container {
  width: 100%;
  top: 0;
  height: 80px;
  max-height: 0;
  transition: all 0.8s;
  background-color: red;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  &.expand {
    max-height: 200px;
  }
}
</style>