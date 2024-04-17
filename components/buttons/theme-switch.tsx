"use client";
import {
  ThemeContext,
  useThemeContext,
} from "@/context-api/theme-switch-context";
import React, { useContext, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function ThemeSwitch() {
  const { theme, switchTheme } = useThemeContext();

  return (
    <button
      onClick={switchTheme}
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-900 w-[3rem] h-[3rem] rounded-full flex items-center justify-center border border-gray-300 border-opacity-40 hover:scale-[1.15] active:scale-[1.05] transition-all backdrop-blur-[0.5rem] shadow-2xl"
    >
      {theme === "light" ? (
        <BsSun className="text-md" />
      ) : (
        <BsMoon className="text-md" />
      )}
    </button>
  );
}

export default ThemeSwitch;
