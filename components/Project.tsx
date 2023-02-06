import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {
  projectDemo: string;
  projectImage: any;
  projectNumber: number;
  numberOfProjects: number;
  projectName: string;
  projectTools: any;
  projectDescription: string;
};

export default function Project({
  projectDemo,
  projectImage,
  projectNumber,
  numberOfProjects,
  projectName,
  projectTools,
  projectDescription,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4  items-center justify-start sm:px-20 md:px-44 h-full "
    >
      <motion.a
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        target="_blank"
        href={projectDemo}
        rel="noopener noreferrer"
        className="group flex items-center justify-center max-w-[80vw] "
      >
        <motion.div className="h-[30vh] md:h-[40vh] xl:h-[50vh] ">
          {projectImage}
        </motion.div>
        <h3 className=" absolute scale-0 group-hover:scale-100 p-4 border border-gray-300 rounded-full bg-gray-500 bg-opacity-30 text-3xl duration-200 text-center whitespace-nowrap ">
          Link To Project
        </h3>
      </motion.a>
      <h4 className="text-xl sm:text-4xl font-semibold text-center">
        <span className="underline decoration-[#FFE55C]/50">
          Project {projectNumber} of {numberOfProjects}:
        </span>{" "}
        {projectName}
      </h4>
      <div className="flex items-center space-x-4 projectTools ">
        {projectTools}
      </div>
      <p className="text-sm max-w-[80vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga nam
        illo enim culpa nemo error voluptatem maiores? Itaque vitae corrupti
        distinctio aliquid porro dolorem dolor nam rem repellendus libero?
      </p>
    </motion.div>
  );
}
