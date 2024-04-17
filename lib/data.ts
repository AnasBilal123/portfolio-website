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
            "I got the job as Associate Software Engineer at Rolustech before the gaduation. I learned ReactJs, Angular, NodeJs, Tailwind, Scss, Material UI, NextJs as technical skills along with major communication and professional skills during 2 whole years tenure",
        icon: React.createElement(LuGraduationCap),
        date: "2021(June) - 2023(June)",
    },
    {
        title: "Software Engineer - Cinnova",
        location: "Lahore, Pakistan",
        description:
            "I worked as a full-stack Software Engineer for 3 months. I got the chance to learn NestJs, Redux-toolkit and Ionic Framework",
        icon: React.createElement(FaReact),
        date: "2023(June) - 2023(August)",
    },
    {
        title: "Software Engineer - Stewart",
        location: "Houston, TX",
        description:
            "I am working at stewart since August(2023). I was appointed as a Senior Software Engineer(Angular Developer) and my role is to build new features of Notarycam App and train new college graduates.",
        icon: React.createElement(FaAngular),
        date: "2023(August) - present",
    },
] as const;

export const projectsData = [
    {
        title: "TheClassroomDoor",
        description:
            "I worked as a full-stack developer on this project for 6 months. This was the online classroom app where teachers sets hourly based charges and the student has to pay the tuision fee to book appointment of the specified subject teacher",
        tags: ["React", "JavaScript", "Firebase", "Scss", "Zoom SDK"],
        imageUrl: theClassroomDoor,
    },
    {
        title: "ZensionTec",
        description:
            "I worked around 1.5 year on this project as a frontend developer. Zension allows the user to buy tech devices on subscription based model and allows to tradeIn as well.",
        tags: ["Angular", "TypeScript", "Material UI", "NodeJS", "MySQL", "AWS"],
        imageUrl: zensionTec,
    },
    {
        title: "Aegis",
        description:
            " Worked around 3 months on this project. Aegis allows the users to create proposal for the installation of tech cameras and hire security men for buildings.",
        tags: ["Angular", "Nest.Js", "MySQL", "Tailwind", "Redux", "AzureDevOps"],
        imageUrl: Aegis,
    },
    {
        title: "NotaryCam",
        description:
            "I am currently working on notarycam since 8 months. Notarycam allows the users to notarize legal documents online completely",
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
