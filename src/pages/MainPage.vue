<template>
  <main class="main-page">
    <div class="container">
      <div class="main-page__photos">
        <photo-item
          v-for="photo in photos.data"
          :key="photo.id"
          :imgPath="photo.url"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import PhotoItem from "../components/PhotoItem/PhotoItem.vue";

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

onMounted(async () => {
  photos.value.isLoading = true;
  await fetch("https://boiling-refuge-66454.herokuapp.com/images")
    .then((data) => data.json())
    .then((photosArr) => {
      photos.value.isLoading = false;
      photos.value.data = photosArr;
    });
});
</script>

<style lang="scss" scoped>
.main-page {
  width: 100vw;
  height: 100vh;
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
