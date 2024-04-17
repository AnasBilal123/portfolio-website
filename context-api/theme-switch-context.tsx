"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeSwitchContextProps = {
  children: React.ReactNode;
};

type ThemeSwitchProps = {
  theme: Theme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeSwitchProps | null>(null);

export default function ThemeSwitchContext({
  children,
}: ThemeSwitchContextProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return;
    }
    setTheme("light");
    window.localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemeContext must be inside the ThemeContextProvider");
  }
  return context;
}
