"use client";

import { useSectionInView } from "@/lib/hooks/sectionInView";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Profile from "../public/Profile_pic.jpg";
import { useActiveSectionContext } from "@/context-api/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView({ threshold: 0.5, sectionName: "Home" });
  const { setActiveSection, setTimeClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Profile}
              alt="Anas Portrait"
              quality="100"
              width={500}
              height={500}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 100,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-2xl !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, This is Anas Bilal.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">website & apps</span>. I am
        experienced
        <span className="underline"> MERN/MEAN Stack Developer</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 items-center justify-center px-4 font-medium text-sm"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 px-6 py-3 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-800"
          onClick={() => {
            setActiveSection("Contact");
            setTimeClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="group-hover:translate-x-1 hover:opacity-80 transition" />
        </Link>
        <a
          className="group bg-white px-6 py-3 dark:shadow-2xl flex items-center gap-2 rounded-full 
         outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
         border border-b-gray-800/10 dark:border-none dark:bg-white/10 dark:text-white/90
        "
          href="/Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-80 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          className="group bg-white p-4 text-gray-800  dark:text-gray-200 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
        border border-b-gray-800/10 dark:border-none dark:bg-white/10 dark:text-white/90 dark:shadow-2xl
        "
          href="https://www.linkedin.com/in/anasbilal786/"
          target="_blank"
        >
          <BsLinkedin className="opacity-80 group-hover:scale-110 transition hover:text-black dark:hover:text-gray-200" />
        </a>
        <a
          className="group p-4 bg-white text-gray-800 dark:text-gray-200 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
        border border-b-gray-800/10 dark:border-none dark:bg-white/10 dark:text-white/90 dark:shadow-2xl
        "
          href="https://github.com/AnasBilal123/"
          target="_blank"
        >
          <FaGitSquare className="hover:text-black dark:hover:text-gray-200 opacity-80 group-hover:scale-110 transition" />
        </a>
      </motion.div>
    </section>
  );
}
