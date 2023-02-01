import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 pb-4 items-center justify-center sm:p20 md:p-44"
    >
      <a
        target="_blank"
        href="https://github.com"
        rel="noopener noreferrer"
        className="group flex items-center justify-center max-w-[80vw] "
      >
        <motion.img
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          src="./mememan.jpeg"
          alt=""
        />
        <h3 className=" absolute scale-0 group-hover:scale-100 p-4 border border-gray-300 rounded-full bg-gray-500 bg-opacity-30 text-3xl duration-200 text-center whitespace-nowrap ">
          Link To Project
        </h3>
      </a>
      <h4 className="text-xl sm:text-4xl font-semibold text-center">
        <span className="underline decoration-[#FFE55C]/50">
          Project 1 of 5:
        </span>{" "}
        Project Name
      </h4>
      <div className="flex items-center space-x-4 ">
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
          src="./mememan.jpeg"
          alt=""
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
          src="./mememan.jpeg"
          alt=""
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
          src="./mememan.jpeg"
          alt=""
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
          src="./mememan.jpeg"
          alt=""
        />
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
          src="./mememan.jpeg"
          alt=""
        />
      </div>
      <p className="text-sm max-w-[80vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga nam
        illo enim culpa nemo error voluptatem maiores? Itaque vitae corrupti
        distinctio aliquid porro dolorem dolor nam rem repellendus libero?
      </p>
    </motion.div>
  );
}
