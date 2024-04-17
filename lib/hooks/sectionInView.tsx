import { useActiveSectionContext } from "@/context-api/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "../data";

type useSectionInViewProps = {
  threshold: number;
  sectionName: (typeof links)[number]["name"];
};

export function useSectionInView({
  threshold,
  sectionName,
}: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeClick]);
  return { ref };
}
