import BlogsList from "@/components/blogs/blogs-list";
import Container from "@/components/common/container";
import { getBlogs } from "@/lib/api";

export const revalidate = 60;

export default async function HomePage() {
  const blogs = await getBlogs();
  return (
    <main>
      <Container>
        <div className="mt-6">
          <BlogsList blogs={blogs} />
        </div>
      </Container>
    </main>
  );
}
