<template>
  <div class="overlay">
    <div class="modal">
      <close-modal-btn :close-fn="props.closeModal" />
      <img
        v-show="!modalData.isLoading"
        :src="modalData.content.url"
        alt="photo"
        class="modal__img"
      />
      <div v-show="!modalData.isLoading" class="modal__comments">
        <comment-item
          v-for="comment in modalData.content.comments"
          :key="comment.id"
          :commentText="comment.text"
          :commentDate="comment.date"
        />
      </div>
      <comment-form v-show="!modalData.isLoading" @onSubmit="handleSubmit" />
      <pre-loader v-show="modalData.isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import type { Ref } from "vue";
import CloseModalBtn from "../CloseModalBtn/CloseModalBtn.vue";
import getComments from "../../requests/getComments";
import { CommentItemType, GetCommentsResponse } from "@/types/types";
import CommentItem from "../CommentItem/CommentItem.vue";
import CommentForm from "../CommentForm/CommentForm.vue";
import postComment from "@/requests/postComment";
import PreLoader from "../PreLoader/PreLoader.vue";

type ModalWindowProps = {
  imgId: number;
  closeModal: () => void;
};

type ModalData = {
  isLoading: boolean;
  content: GetCommentsResponse;
};

const props = defineProps<ModalWindowProps>();

const modalData: Ref<ModalData> = ref({
  isLoading: false,
  content: {
    id: 0,
    url: "",
    comments: [],
  },
});

const handleSubmit = (comment: CommentItemType) => {
  postComment(props.imgId, comment.text);
  modalData.value.content.comments.push(comment);
};

onMounted(() => {
  modalData.value.isLoading = true;
  getComments(props.imgId).then(({ id, comments, url }) => {
    modalData.value.content.id = id;
    modalData.value.content.url = url;
    modalData.value.content.comments = comments;
    modalData.value.isLoading = false;
  });
});
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 50px;
  width: 700px;
  height: calc(100vh - 20px);
  background-color: #ffffff;
  border-radius: 10px;
  @media (max-width: 1600px) {
    padding: 30px 20px;
    width: 600px;
    gap: 10px;
  }
  @media (max-width: 1023px) {
    width: 450px;
  }
  @media (max-width: 575px) {
    width: 300px;
  }
  &__img {
    max-width: 600px;
    max-height: 400px;
    border-radius: 20px;
    @media (max-width: 1600px) {
      max-width: 450px;
    }
    @media (max-width: 1199px) {
      width: 350px;
    }
    @media (max-width: 575px) {
      width: 200px;
    }
  }
  &__comments {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #31fad8;
    }
  }
}
</style>
