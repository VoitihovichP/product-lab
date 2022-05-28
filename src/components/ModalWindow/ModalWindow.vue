<template>
  <div class="overlay">
    <div class="modal">
      <close-modal-btn :close-fn="props.closeModal" />
      <img :src="modalData.content.url" alt="photo" class="modal__img" />
      <div class="modal__comments">
        <comment-item
          v-for="comment in modalData.content.comments"
          :key="comment.id"
          :commentText="comment.text"
          :commentDate="comment.date"
        />
      </div>
      <comment-form @onSubmit="handleSubmit" />
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
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 700px;
  max-height: calc(100vh - 20px);
  background-color: #ffffff;
  border-radius: 10px;
  &__img {
    max-width: 600px;
    max-height: 400px;
    border-radius: 20px;
  }
  &__comments {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    overflow: auto;
  }
}
</style>
