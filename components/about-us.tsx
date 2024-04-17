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
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        <span className="font-medium bold">JavaScript/TypeScript </span>{" "}
        developer with 3 years of experience working on scalable B2B and B2C
        monolithic and event-driven applications
      </p>

      <p>
        I have experience in understanding client visual design intent. The main
        motive is to create and maintain better reusable code bases. Motivated
        to build software with leading technologies like JavaScript and
        TypeScript on a larger scale with the best performance experience
      </p>
    </motion.div>
  );
}

export default AboutUs;
