"use client";

import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../custom.scss/timeline.css";

import { experiencesData } from "@/lib/data";
import SectionHeader from "./section-header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import { useThemeContext } from "@/context-api/theme-switch-context";

export default function Experience() {
  const refView = useRef<HTMLDivElement>(null);
  const { theme, switchTheme } = useThemeContext();

  const { scrollYProgress } = useScroll({
    target: refView,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const { ref } = useSectionInView({
    threshold: 0.75,
    sectionName: "Experience",
  });

  return (
    <div id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeader>My experience</SectionHeader>
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: scaleProgress }}
      >
        <section>
          <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background:
                      theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    animation: "ease-in-out",
                    visibility: "visible",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255,255,255,0.05)",
                    visibility: "visible",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: theme === "light" ? "white" : "#161616",
                    fontSize: "1.5rem",
                    visibility: "visible",
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal italic !mt-0 ">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </section>
      </motion.div>
    </div>
  );
}
