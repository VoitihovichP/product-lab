<template>
  <img
    class="photo-item"
    @click="props.openModal"
    :src="props.imgPath"
    alt="photo"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type PhotoItemProps = {
  imgPath: string;
  openModal: () => void;
};

const props = defineProps<PhotoItemProps>();
</script>

<style lang="scss" scoped>
.photo-item {
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
    box-shadow: 8px 10px 15px #005043;
  }
  &:active {
    transform: scale(0.9);
  }
}
</style>
