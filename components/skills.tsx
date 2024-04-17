"use client";
import React from "react";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
function Skills() {
  const { ref } = useSectionInView({ threshold: 0.75, sectionName: "Skills" });
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeader>Skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="bg-white borderBlack dark:bg-gray-800 dark:text-gray-200 dark:border-opacity-90 rounded-xl px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
