import BlogsList from "@/components/blogs/blogs-list";
import Container from "@/components/common/container";
import { getBlogs } from "@/lib/api";

export default async function HomePage() {
  const data = await getBlogs();
  console.log(data);
  return (
    <main>
      <Container>
        <BlogsList />
      </Container>
    </main>
  );
}
