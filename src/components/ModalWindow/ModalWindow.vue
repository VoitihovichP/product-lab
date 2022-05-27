<template>
  <div class="overlay">
    <div class="modal">
      <close-modal-btn :close-fn="props.closeModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import CloseModalBtn from "../CloseModalBtn/CloseModalBtn.vue";

type ModalWindowProps = {
  closeModal: () => void;
};

const props = defineProps<ModalWindowProps>();
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 3, 3, 0.5);
  z-index: 100;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
