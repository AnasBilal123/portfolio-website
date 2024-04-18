"use client";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";

function AboutUs() {
  const { ref } = useSectionInView({ threshold: 1, sectionName: "About" });

  return (
    <motion.div
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        <span className="font-medium bold">JavaScript/TypeScript</span>{" "}
        developer with 3 years of experience specializing in scalable B2B and
        B2C applications, encompassing both monolithic and event-driven
        architectures.
      </p>

      <p>
        I possess a keen understanding of client visual design intent and excel
        in creating and maintaining reusable code bases. Motivated by a passion
        for leveraging leading-edge technologies, I am dedicated to crafting
        software solutions with optimal performance using JavaScript and
        TypeScript on a large scale.
      </p>
    </motion.div>
  );
}

export default AboutUs;
