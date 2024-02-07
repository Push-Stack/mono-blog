import BlogsList from "@/components/blogs/blogs-list";
import Container from "@/components/common/container";
import { getBlogs } from "@/lib/api";

export default async function HomePage() {
  return (
    <main>
      <Container>
        <BlogsList />
      </Container>
    </main>
  );
}
