"use client";

import Image from "next/image";
import React from "react";
import Dp from "@/public/Dp.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
              src={Dp}
              alt="DisplayingPicture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="">
          Hello! I am Tanay. <strong>MERN Stack Developer</strong> with
          expertise in <strong>Backend Development</strong> & Cloud Native
          Technologies, having <strong>1+ year of experience</strong>. I enjoy
          building stuff, currently learning React.js & Next.js.
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
      >
        <Link
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          href="#contact"
        >
          Contact Me <BsArrowRight />
        </Link>

        <a className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full">
          Resume <HiDownload />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
          href="https://github.com/tanayvaswani"
        >
          <BsGithub />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
          href="https://twitter.com/iTanayVaswani"
        >
          <BsTwitter />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full"
          href="https://linkedin.com/in/tanayvaswani"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
