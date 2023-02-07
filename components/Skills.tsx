import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Skill from "./Skill";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  IoIosMore,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoPython,
} from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiAdobephotoshop,
  SiOpengl,
} from "react-icons/si";

type Props = {};

export default function Skills({}: Props) {
  const skillsRef = useRef(null);
  const skillsIsInView = useInView(skillsRef, { once: true });

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
    {
      toolName: "SQL",
      skillIcon: <img src="sql-logo.png" alt="SQL Logo" />,
    },

    {
      toolName: "Photoshop",
      skillIcon: <img src="photoshop-logo.webp" alt="Photoshop Logo" />,
    },
    {
      toolName: "OpenGL",
      skillIcon: <SiOpengl fill="#283A57" className="bg-white" />,
    },
    {
      toolName: "and more!",
      skillIcon: <IoIosMore />,
    },
  ];
  const animationDirection = (i: number) => {
    return i >= 8 ? true : false;
  };
  return (
    <article className="h-screen pt-20 overflow-visible" ref={skillsRef}>
      <h3 className="sectionHeading">Skills</h3>
      <div className="flex items-center justify-center h-[calc(100vh_-_8rem)] z-20">
        <div className="grid grid-cols-4 gap-2 sm:gap-5  ">
          {skills.map((skill, i) => {
            return (
              <Skill
                key={i}
                skillIcon={skill.skillIcon}
                toolName={skill.toolName}
                directionLeft={animationDirection(i)}
                isInView={skillsIsInView}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
