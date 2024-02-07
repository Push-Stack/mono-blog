import { Link } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import { siteInfo, mainHeaderLinks } from "@/constants";
import Container from "./container";

export default function MainHeader() {
  return (
    <Container>
      <header className="flex justify-content-center items-center flex-col gap-10  my-8 ">
        <h2 className="text-xl sm:text-2xl font-bold">{siteInfo.brand}</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {mainHeaderLinks.map(({ href, name }, index) => (
            <Link
              key={name}
              color="foreground"
              href={href}
              className="tracking-widest text-sm sm:text-md uppercase"
            >
              {name}
              <span>
                <AiOutlinePlus className="text-sm ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </header>
    </Container>
  );
}
