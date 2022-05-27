type GetPhotosResponse = {
  id: number;
  url: string;
};

const getPhotos = async (): Promise<Array<GetPhotosResponse>> => {
  const response: Response = await fetch(
    "https://boiling-refuge-66454.herokuapp.com/images"
  );
  return await response.json();
};

export default getPhotos;
