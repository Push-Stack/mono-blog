import { formatDate, getRandomDate } from "@/lib/utils";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";
interface IBlogItemProps {
  blog: Blog;
}

export default function BlogsItem({ blog }: IBlogItemProps) {
  const { title, content_text, photo_url, created_at } = blog;

  const date = new Date(created_at);
  return (
    <Card
      radius="none"
      fullWidth={true}
      shadow="sm"
      className="border-none h-full !bg-foreground-100  "
    >
      <CardHeader className=" flex flex-col items-start gap-4 !relative">
        <Image
          as={NextImage}
          height={800}
          width={1500}
          alt={title}
          className="z-0  rounded-none  object-cover overflow-clip"
          style={{ maxWidth: "100%", maxHeight: "600px" }}
          src={photo_url}
        />
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-200 ">
          {formatDate(date)}
        </p>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-700 dark:text-white break-words leading-loose h-min">
          {content_text.length > 280
            ? content_text.slice(0, 280) + "..."
            : content_text}
        </p>
      </CardBody>
      <CardFooter>
        <Button className="bg-transparent underline p-0 uppercase tracking-widest  text-gray-500 dark:text-gray-200">
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
}
