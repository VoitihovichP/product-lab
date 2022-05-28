<template>
  <div class="comment">
    <img src="@/assets/UserIcon.svg" alt="photo" class="comment__avatar" />
    <div class="comment__wrapper">
      <p class="comment__text">{{ props.commentText }}</p>
      <p class="comment__date">{{ convertDate() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type CommentItemProps = {
  commentText: string;
  commentDate: number;
};

const props = defineProps<CommentItemProps>();

const convertDate = (): string => {
  const date = new Date(props.commentDate);
  const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
  const month = date.getMonth() + 1;
  const correctDate = `${day}.${
    month > 9 ? month : `0${month}`
  }.${date.getFullYear()}`;
  return correctDate;
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  background-color: #bcf1e8;
  border-radius: 10px;
  &__avatar {
    width: 40px;
  }
  &__text {
    overflow-wrap: anywhere;
    font-family: Comic Sans MS;
    font-size: 20px;
  }
  &__date {
    font-family: Comic Sans MS;
    color: #7c7c7c;
    font-size: 16px;
  }
}
</style>
