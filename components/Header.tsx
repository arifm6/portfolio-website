import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  //note this is not a good way to do this but due to the low amount of items and time constraint, it is fine for now
  const [whatIsHovered, setWhatIsHovered] = useState(-1);
  const handleMouseEnter = (target: any) => {
    setWhatIsHovered(target);
  };
  const handleMouseExit = () => {
    setWhatIsHovered(-1);
  };
  return (
    <header className="sticky top-0 p-3 sm:p-5 flex items-center justify-between mx-auto max-w-7xl text-white z-10">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center transition-colors duration-1000"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/ahmadmarif/"
          fgColor={`${whatIsHovered === 0 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseExit()}
        />
        <SocialIcon
          url="https://github.com/arifm6"
          fgColor={`${whatIsHovered === 1 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseExit()}
        />
        <SocialIcon
          url=""
          fgColor={`${whatIsHovered === 2 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseExit()}
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseExit()}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor={`${whatIsHovered === 3 ? "#F7AB0A" : "gray"}`}
          bgColor="transparent"
        />
        <p className="hidden sm:inline-flex text-sm uppercase">Contact Me!</p>
      </motion.div>
    </header>
  );
}
