<template>
  <span class="loader"></span>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border: 5px solid #6ebeff;
  border-bottom-color: #337ab7;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
