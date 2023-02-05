import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { SiTypescript, SiReact, SiNextdotjs, SiPhp } from "react-icons/si";

type Props = {};

export default function Skills({}: Props) {
  const skills = [
    {
      toolName: "HTML5",
      skillIcon: <AiFillHtml5 className="bg-[#e34c26]" />,
    },
    {
      toolName: "CSS3",
      skillIcon: <IoLogoCss3 className="bg-white" color="#264de4" />,
    },
    {
      toolName: "JS",
      skillIcon: <IoLogoJavascript className="bg-[#F0DB4F]" color="#323330" />,
    },
    {
      toolName: "TS",
      skillIcon: <SiTypescript className="bg-white" color="#007acc" />,
    },
    {
      toolName: "Python",
      skillIcon: (
        <img src="./python-logo.png" alt="Python Logo" className="bg-white" />
      ),
    },
    {
      toolName: "Java",
      skillIcon: (
        <img src="./java-logo.png" alt="Java Logo" className="bg-white" />
      ),
    },
    {
      toolName: "C++",
      skillIcon: (
        <img src="./cplusplus-logo.png" alt="C++ Logo" className="bg-white" />
      ),
    },
    {
      toolName: "C",
      skillIcon: <img src="./c-logo.png" alt="C Logo" className="bg-white" />,
    },
    {
      toolName: "PHP",
      skillIcon: <SiPhp color="#8993be" />,
    },

    {
      toolName: "Git",
      skillIcon: <AiFillGithub className="bg-white" fill="black" />,
    },

    {
      toolName: "React",
      skillIcon: <SiReact color="#61DBFB" />,
    },
    {
      toolName: "Next.js",
      skillIcon: <SiNextdotjs color="black" className="bg-white" />,
    },
  ];
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
        <div className="grid grid-cols-4 gap-1 sm:gap-5  ">
          {skills.map((skill, i) => {
            return (
              <Skill
                key={i}
                skillIcon={skill.skillIcon}
                toolName={skill.toolName}
              />
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
