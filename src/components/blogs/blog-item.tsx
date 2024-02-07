import { getRandomDate } from "@/lib/utils";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import NextImage from "next/image";
interface IBlogItemProps {
  blog: Blog;
}

export default function BlogsItem({ blog }: IBlogItemProps) {
  const { id, title, url } = blog;
  const date = getRandomDate().toDateString();
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 "
      shadow="sm"
    >
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny light:font-bold light:text-black uppercase font-bold">
          Blog #{id}
        </p>
        <h4 className="text-black dark:text-white font-medium text-large">
          {title}
        </h4>
      </CardHeader>
      <Image
        as={NextImage}
        height={600}
        width={600}
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={url}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 ">
        <p className="text-tiny text-white">{date}</p>
      </CardFooter>
    </Card>
  );
}
