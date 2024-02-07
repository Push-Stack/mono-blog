import { siteInfo, navbarLinks, socialLinks } from "@/constants";
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
          <p className="font-bold text-inherit">{siteInfo.brand}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">{siteInfo.brand}</p>
        </NavbarBrand>

        {navbarLinks.map(({ name, href }, index) => (
          <NavbarItem key={`${name}-${index}`}>
            <Link color="foreground" href={href}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {socialLinksContent}
      </NavbarContent>

      <NavbarMenu>
        {navbarLinks.map(({ name, href }, index) => (
          <NavbarMenuItem key={`${name}-${index}`}>
            <Link color="foreground" className="w-full" href={href} size="lg">
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex gap-4">{socialLinksContent}</div>
      </NavbarMenu>
    </Navbar>
  );
}
