import { getRandomDate } from "@/lib/utils";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

interface IBlogItemProps {
  blog: Blog;
}

export default function BlogsItem({ blog }: IBlogItemProps) {
  const { id, title, url } = blog;
  const date = getRandomDate().toDateString();
  return (
    <Card isBlurred>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny  uppercase font-bold">Blog #{id}</p>
        <h4 className="text-white font-medium text-large">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={url}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
        <p className="text-tiny text-white/80">{date}</p>
      </CardFooter>
    </Card>
  );
}
