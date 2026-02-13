"use client";

import { useTheme } from "@/context/themeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      aria-label="Theme Toggle"
      className="hover:bg-secondary/20 cursor-pointer rounded-md p-2 transition-colors transition-transform duration-300"
      onClick={handleToggle}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
