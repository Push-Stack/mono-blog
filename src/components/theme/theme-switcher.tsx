"use client";

import { Button, NavbarItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  };

  if (!mounted) return null;

  return (
    <NavbarItem>
      <Button isIconOnly onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </Button>
    </NavbarItem>
  );
}
