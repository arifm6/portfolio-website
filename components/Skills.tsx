import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen pt-20 overflow-visible"
    >
      <h3 className="sectionHeading">Skills</h3>
      <div className="flex items-center justify-center h-[calc(100vh_-_8rem)] z-20">
        <div className="grid grid-cols-4 gap-2 sm:gap-5  ">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </motion.article>
  );
}
