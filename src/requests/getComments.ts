import { GetCommentsResponse } from "@/types/types";

const getComments = async (id: number): Promise<GetCommentsResponse> => {
  const response: Response = await fetch(
    `https://boiling-refuge-66454.herokuapp.com/images/${id}`
  );
  return await response.json();
};

export default getComments;
