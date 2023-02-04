import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  skillIcon: any;
  toolName: string;
};

export default function Skill({ directionLeft, skillIcon, toolName }: Props) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      {skillIcon}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-100 ease-in-out group-hover:bg-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold text-black">
            {toolName}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
