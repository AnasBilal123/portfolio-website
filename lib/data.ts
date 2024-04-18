import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import theClassroomDoor from "@/public/theclassroomdoor.png";
import zensionTec from "@/public/zensiontec.png";
import Aegis from "@/public/Aegis.png";
import NotaryCam from "@/public/NotaryCam.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Associate Software Engineer - Rolustech",
        location: "Lahore, Pakistan",
        description:
            // "I got the job as a Associate Software Engineer at Rolustech before my gaduation. I learned ReactJs, Angular, NodeJs, Tailwind, Scss, Material UI, NextJs as technical skills along with major communication and professional skills during 2 whole years tenure",
            "As an Associate Software Engineer at Rolustech, I secured the position before graduation. Over two years, I mastered ReactJS, Angular, NodeJS, Tailwind, SCSS, Material UI, and NextJS. I also developed strong communication and professional skills.",
        icon: React.createElement(LuGraduationCap),
        date: "2021(June) - 2023(June)",
    },
    {
        title: "Software Engineer - Cinnova",
        location: "Lahore, Pakistan",
        description:
            // "I worked as a full-stack Software Engineer for 3 months. I got the chance to learn NestJs, Redux-toolkit and Ionic Framework during that time",
            "As a full-stack Software Engineer for three months, I delved into NestJS, Redux Toolkit, and Ionic Framework, expanding my skill set within a short timeframe",
        icon: React.createElement(FaReact),
        date: "2023(June) - 2023(August)",
    },
    {
        title: "Software Engineer - Stewart",
        location: "Houston, Texes",
        description:
            // "I am working at stewart since August(2023). I appointed as a Senior Software Engineer(Angular Developer) and my role is to build new features of Notarycam App and train fresh graduates.",
            "Since August 2023, I've been serving as a Senior Software Engineer (Angular Developer) at Stewart. In this role, I focus on developing new features for the Notarycam App while also mentoring fresh graduates.",
        icon: React.createElement(FaAngular),
        date: "2023(August) - present",
    },
] as const;

export const projectsData = [
    {
        title: "TheClassroomDoor",
        description:
            // "I worked as a full-stack developer on this project for 6 months. This was the online classroom app where teachers sets hourly based charges and the student has to pay the tuition fee to book appointment for the specified subject teacher",
            "As a full-stack developer, I contributed to a 6-month project involving the development of an online classroom app. The platform allowed teachers to set hourly charges, enabling students to book appointments with subject-specific instructors upon payment of tuition fees.",
        tags: ["React", "JavaScript", "Firebase", "Scss", "Zoom SDK"],
        imageUrl: theClassroomDoor,
    },
    {
        title: "ZensionTec",
        description:
            // "I worked around 1.5 year on this project as a frontend developer. Zension allows the user to buy tech devices on subscription based model and to tradeIn as well.",
            "During my 1.5-year tenure as a frontend developer, I contributed to Zension, a platform enabling users to purchase tech devices on a subscription-based model and facilitating trade-ins.",
        tags: ["Angular", "TypeScript", "Material UI", "NodeJS", "MySQL", "AWS"],
        imageUrl: zensionTec,
    },
    {
        title: "Aegis",
        description:
            // " I worked around 3 months on this project. Aegis allows the users to create proposal for the installation of tech cameras and hire security men for buildings.",
            "In a 3-month project stint, I collaborated on Aegis, a platform enabling users to create proposals for tech camera installations and hire security personnel for buildings.",
        tags: ["Angular", "Nest.Js", "MySQL", "Tailwind", "Redux", "AzureDevOps"],
        imageUrl: Aegis,
    },
    {
        title: "NotaryCam",
        description:
            // "I am currently working on Notarycam since 8 months. Notarycam allows the users to notarize legal documents online completely",
            "Currently, I am engaged in Notarycam for 8 months. Notarycam provides users with a seamless online platform for notarizing legal documents.",
        tags: ["Angular", "TypeScript", "MongoDB", "Material UI", "Redis", "AWS", "NodeJs"],
        imageUrl: NotaryCam,

    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Material UI",
    "Prime NG",
    "Redux",
    "Express",
    "PostgreSQL",
    "NestJs",
    "Angular",
    "Framer Motion",
] as const;
