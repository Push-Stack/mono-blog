const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getBlogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/photos`);
    const data = (await response.json()) as Blog[];

    // We're trimming the array because the JSONPlaceholder API lacks pagination support. Showing all 5000 photos simultaneously would strain performance, so we need to use list virtualization. However, implementing this feature isn't within the scope of the current page.

    return data.slice(0, 25);
  } catch (error) {
    return [];
  }
};
