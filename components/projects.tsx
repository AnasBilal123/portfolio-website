"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import React from "react";
import Project from "./project";
import SectionHeader from "./section-header";

function Projects() {
  const { ref } = useSectionInView({ threshold: 0.4, sectionName: "Projects" });

  return (
    <section className="scroll-mt-28 transition mb-28" id="projects" ref={ref}>
      <SectionHeader>Worked on Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
