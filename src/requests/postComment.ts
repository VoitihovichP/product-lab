const postComment = async (id: number, text: string) => {
  await fetch(
    ` https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-type": "appLication/json",
      },
      body: JSON.stringify({ name: "user", comment: text }),
    }
  );
};

export default postComment;
