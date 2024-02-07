const BASE_URL = "https://api.slingacademy.com";

export const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/v1/sample-data/blog-posts`);
    const data = (await response.json()) as BlogResponse;
    return data.blogs;
  } catch (error) {
    return [];
  }
};
