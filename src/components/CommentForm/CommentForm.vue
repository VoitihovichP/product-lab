<template>
  <form @submit.prevent="onSubmit" class="comment-form">
    <textarea
      v-model="commentText"
      required
      placeholder="Добавьте комментарий"
      class="comment-form__textarea"
    />
    <button class="comment-form__submit">Добавить комментарий</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import type { Ref } from "vue";
import { CommentItemType } from "@/types/types";

const commentText: Ref<string> = ref("");

const emit = defineEmits<{
  (e: "onSubmit", value: CommentItemType): void;
}>();

const onSubmit = () => {
  emit("onSubmit", {
    id: Math.round(Math.random() * 30),
    text: commentText.value,
    date: new Date(Date.now()).getTime(),
  });
  commentText.value = "";
};
</script>

<style lang="scss" scoped>
.comment-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__textarea {
    width: 100%;
    font-size: 20px;
    padding: 20px 27px;
    margin-bottom: 20px;
    border-radius: 15px;
    border: 1px solid #014c40;
    font-family: Comic Sans MS;
    resize: none;
    @media (max-width: 1600px) {
      padding: 10px 20px;
      font-size: 18px;
    }
    @media (max-width: 1199px) {
      font-size: 14px;
    }
  }
  &__submit {
    padding: 5px 5px 6px 5px;
    align-self: flex-end;
    max-width: 165px;
    font-family: Comic Sans MS;
    border: 1px solid #014c40;
    border-radius: 10px;
    background: none;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      background-color: #014c40;
      color: #ffffff;
    }
  }
}
</style>
