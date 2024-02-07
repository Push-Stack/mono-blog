import Link from "next/link";
import Container from "./container";

export default function Footer() {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <span className="text-sm text-black tracking-wider sm:text-center dark:text-gray-100">
          © {new Date().getFullYear()}
          <Link href="/" className="hover:underline mx-1">
            Mono Blog™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </Container>
  );
}
