<template>
  <div class="close-btn" @click="props.closeFn"></div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type CloseBtnProps = {
  closeFn: () => void;
};

const props = defineProps<CloseBtnProps>();
</script>

<style lang="scss" scoped>
.close-btn {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  z-index: 1;
  cursor: pointer;
  &:before {
    content: "+";
    color: #337ab7;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -5px;
    left: 6px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: #337ab7;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
  }
  &:hover {
    &:before {
      transform: scale(0.8) rotate(45deg);
      color: #ffffff;
    }
    &:after {
      transform: scale(1);
    }
  }
}
</style>
