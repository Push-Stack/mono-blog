const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/photos`);
    const data = (await response.json()) as Blog[];
    return data;
  } catch (error) {
    return [];
  }
};
