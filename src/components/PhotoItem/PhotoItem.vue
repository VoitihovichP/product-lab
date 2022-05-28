<template>
  <img
    class="photo-item"
    @click="handleOpen"
    :src="props.imgPath"
    alt="photo"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type PhotoItemProps = {
  imgId: number;
  imgPath: string;
  openModal: (id: number) => void;
};

const props = defineProps<PhotoItemProps>();

const handleOpen = () => {
  props.openModal(props.imgId);
};
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
  @media (max-width: 1199px) {
    width: 250px;
  }
  @media (max-width: 1023px) {
    width: 200px;
  }
  @media (max-width: 767px) {
    width: 160px;
  }
}
</style>
