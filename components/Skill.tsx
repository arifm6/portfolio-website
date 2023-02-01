import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="./mememan.jpeg"
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-100 ease-in-out group-hover:bg-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-base sm:text-xl md:text-2xl xl:text-3xl font-bold text-black">
            Firebase
          </p>
        </div>
      </div>
    </div>
  );
}
