import { siteInfo, navbarLinks, socialLinks } from "@/constants";
import Link from "next/link";
import {
  Button,
  Link as NextUILink,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../theme/theme-switcher";

export default function Header() {
  const socialLinksContent = socialLinks.map(({ Icon, title, href }, index) => (
    <NavbarItem key={title}>
      <NextUILink color="foreground" href={href} title={title}>
        {<Icon />}
      </NextUILink>
    </NavbarItem>
  ));

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
          <Link href="/" className="text-xl sm:text-2xl font-bold font-brand">
            {siteInfo.brand}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="end">
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarLinks.map(({ name, href }, index) => (
          <NavbarItem key={`${name}-${index}`}>
            <NextUILink color="foreground" href={href}>
              {name}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {socialLinksContent}
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarMenu className="flex justify-content-center items-center gap-6 pt-8">
        {navbarLinks.map(({ name, href }, index) => (
          <NavbarMenuItem key={`${name}-${index}`}>
            <NextUILink
              color="foreground"
              className="w-full"
              href={href}
              size="lg"
            >
              {name}
            </NextUILink>
          </NavbarMenuItem>
        ))}
        <div className="flex gap-4">{socialLinksContent}</div>
      </NavbarMenu>
    </Navbar>
  );
}
