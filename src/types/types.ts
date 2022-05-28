export type GetCommentsResponse = {
  id: number;
  url: string;
  comments: Array<{ id: number; text: string; date: number } | never>;
};

export type CommentItemType = {
  id: number;
  text: string;
  date: number;
};
