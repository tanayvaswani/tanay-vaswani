import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import one from "@/public/one.jpg";
import two from "@/public/two.jpg";
import three from "@/public/three.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Contact Management System",
    description:
      "A contact management system's backend having user authentication & authorization features, access tokens, password hashing.",
    tags: ["JavaScript", "Node.js", "Express.js", "JWT", "MongoDB"],
    imageUrl: one,
  },
  {
    title: "Balancer Robin",
    description:
      "Implementation of round robin fashion of sending requests to serve on the server, same type of fashion of sending messages that is used by Apache Kafka.",
    tags: ["GO", "Mux", "HTTP", "MongoDB"],
    imageUrl: one,
  },
  {
    title: "gRPC-GO",
    description:
      "Implementation of demo working of gRPC, methods of communication between client & server in all forms (Unary API, Client-Side Streaming, Server-Side Streaming, Bi-Directional Streaming).",
    tags: ["GO", "gRPC", "Protocol Buffers"],
    imageUrl: one,
  },
  {
    title: "PC Book App",
    description:
      "A PC book app that generates the random templates for PC/Laptops using CPU, GPU, Keyboard, etc. data provided by compiling proto having gRPC.",
    tags: ["GO", "gRPC", "Protocol Buffers", "MongoDB"],
    imageUrl: one,
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript",
  "TypeScript",
  "GO",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "Express.js",
  "Framer Motion",
  "Elasticsearch",
] as const;