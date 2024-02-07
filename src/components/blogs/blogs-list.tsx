import { cn } from "@/lib/utils";
import BlogsItem from "./blog-item";

interface IBlogsListProps {
  blogs: Blog[];
}

export default async function BlogsList({ blogs }: IBlogsListProps) {
  if (!Boolean(blogs.length)) {
    return (
      <div className="text-center text-danger-500 p-4 border rounded">
        Something went wrong. Please try again later.
      </div>
    );
  }
  const renderBlogsContent = blogs.map((blog, index) => {
    const randomSpan = [
      "lg:row-span-1",
      "lg:col-span-1",
      "lg:row-span-2",
      "lg:col-span-2",
    ];

    const indexN = Math.floor(Math.random() * 4);

    return (
      <div
        className={cn("p-4 h-full w-full", `${randomSpan[indexN]}`)}
        key={blog.id}
      >
        <BlogsItem blog={blog} />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 sm:gap-4 grid-flow-row-dense">
      {renderBlogsContent}
    </div>
  );
}
