<template>
  <div class="app">
    <main-header />
    <main-page />
  </div>
</template>

<script setup lang="ts">
import MainHeader from "./components/Header/MainHeader.vue";
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
  @media (max-width: 1023px) {
    max-width: 700px;
  }
}
</style>
