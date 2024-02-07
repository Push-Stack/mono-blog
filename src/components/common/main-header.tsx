import { Link } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import { siteInfo, mainHeaderLinks } from "@/constants";
import Container from "./container";

export default function MainHeader() {
  return (
    <Container>
      <header className="flex justify-content-center items-center flex-col gap-10  my-8 ">
        <h2 className="text-xl hidden sm:block sm:text-2xl font-bold font-brand">
          {siteInfo.brand}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
          {mainHeaderLinks.map(({ href, name }, index) => (
            <Link
              key={name}
              color="foreground"
              href={href}
              className="tracking-wider text-sm sm:text-md uppercase font-semibold"
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
