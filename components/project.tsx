"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: scaleProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="hover:bg-gray-200 sm:group-even:pl-8 bg-gray-100  dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] border-black/5 overflow-hidden relative sm:pr-8 sm:h-[24rem]">
        <div className=" pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[19rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70 sm:mt-auto">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Projects that I have worked on"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] hidden sm:block rounded-t-lg shadow-2xl
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-3
        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-3
        group-hover:scale-[1.04]
        transition
        group-even:right-[initial]
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
