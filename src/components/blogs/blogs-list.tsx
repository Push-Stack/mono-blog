import { getBlogs } from "@/lib/api";
import BlogsItem from "./blog-item";

export default async function BlogsList() {
  const blogs = await getBlogs();

  if (!Boolean(blogs.length)) {
    return (
      <div className="text-center text-danger-500 p-4 border rounded">
        Something went wrong. Please try again later.
      </div>
    );
  }

  const renderBlogsContent = blogs.map((blog) => (
    <div className="col-span-12 sm:col-span-4" key={blog.id}>
      <BlogsItem blog={blog} />
    </div>
  ));

  return <div className="gap-2 grid grid-cols-12 ">{renderBlogsContent}</div>;
}
