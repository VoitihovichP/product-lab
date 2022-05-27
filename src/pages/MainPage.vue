<template>
  <main class="main-page">
    <modal-window v-show="isOpenModal" :closeModal="closeModal" />
    <div class="container">
      <div class="main-page__photos">
        <photo-item
          v-for="photo in photos.data"
          :key="photo.id"
          :imgPath="photo.url"
          :openModal="openModal"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import PhotoItem from "@/components/PhotoItem/PhotoItem.vue";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import getPhotos from "@/requests/getPhotos";

type PhotosType = {
  isLoading: boolean;
  data: Array<
    | {
        id: number;
        url: string;
      }
    | never
  >;
};

const photos: Ref<PhotosType> = ref({
  isLoading: false,
  data: [],
});
const isOpenModal: Ref<boolean> = ref(false);

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false;
};

onMounted(async () => {
  photos.value.isLoading = true;
  getPhotos().then((photosArr) => {
    photos.value.data = photosArr;
    photos.value.isLoading = false;
  });
});
</script>

<style lang="scss" scoped>
.main-page {
  padding-top: 40px;
  width: 100vw;
  height: calc(100vh - 65px);
  background-color: #01977e;
  &__photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    max-width: 1000px;
  }
}
</style>
