<template>
  <div class="app">
    <main-page></main-page>
  </div>
</template>

<script setup lang="ts">
import MainPage from "./pages/MainPage.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
