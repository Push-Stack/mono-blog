import { socialLinks } from "@/constants";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { FaFacebookF } from "react-icons/fa";

const menuItems = ["Faq", "Contact"];

export default function Header() {
  const socialLinksContent = socialLinks.map(({ Icon, title, href }, index) => (
    <NavbarItem key={title}>
      <Link color="foreground" href={href} title={title}>
        {<Icon />}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">Mono Blog.</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Mono Blog.</p>
        </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {socialLinksContent}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex gap-4">{socialLinksContent}</div>
      </NavbarMenu>
    </Navbar>
  );
}
