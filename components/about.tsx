"use client";
import React from "react";
import Heading from "./heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        Currently an <strong>Engineering Undergraduate</strong> from New Delhi,
        India who hopes to get more and more great opportunities in the field of{" "}
        <strong>Web Development, Cloud Computing & DevOps</strong>. I have
        experience with building projects around{" "}
        <strong>
          Node.js backend using Express.js framework & GoLang backend using Gin
          or Mux framework alongwith MongoDB or PostgreSQL as database
        </strong>
        . My depth of building applications can vary from writing basic CRUD
        APIs to building full fledged working applications. Currently getting
        comfortable with <strong>React.js & Next.js</strong>.
      </p>
      <p className="mb-3">
        In addition to my passion for programming, I have a profound love for
        photography, I love capturing moments frozen in time. Moreover, I
        indulge in playing football on weekends.
      </p>
    </motion.section>
  );
}
