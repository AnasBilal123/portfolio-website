"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeClick: number;
  setTimeClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeClick, setTimeClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeClick, setTimeClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be inside the ActiveSectionContextProvider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;
