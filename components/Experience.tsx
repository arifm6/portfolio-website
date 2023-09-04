import React, { useRef } from "react";
import { FaGithub, FaJava, FaReact, FaUnity } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import { SiNextdotjs, SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useInView } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import Image from "next/image";
type Props = {};

export default function Experience({}: Props) {
  const experienceRef = useRef(null);
  const experienceIsInView = useInView(experienceRef, { once: true });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  //format:
  const Experiences = [
    
    {
      company: "Code Ninjas",
      jobTitle: "Coding Instructor",
      companyLogo: "/code-ninjas-logo.png",
      tools: [
        <IoLogoJavascript className="h-14 w-14 bg-[#F0DB4F]" color="#323330 " key={0} />,
        <Image
        width={56}
        height={56}
        src="/python-logo.png"
        alt="Python Logo"
        className="bg-transparent"
        key={1}
      />,
        <FaUnity
          color="black"
          className="h-14 w-14"
          fill="white"
          key={2}
        />,
        <FaGithub className="h-14 w-14" key={3} />,
      ],
      jobDate: {
        from:
          months[new Date("March 2023").getMonth()] +
          " " +
          new Date("March 2023").getFullYear(),
        to: "Present"
      },
      jobDuties: [
        "Built wireframes and mock designs for a website landing page. This includes page layout, colour scheme,and any necessary features for the business.",
        "Developed user interfaces with modern JavaScript libraries/frameworks (React/NextJS), HTML5, andCSS3, which greatly improved page performance.",
        "Created a mobile responsive user experience with CSS Flexbox and CSS grid allowing web access fromvarying screen sizes",
        "Deployed website landing page and updated and maintained any changes per client request",
      ],
    },
    {
      company: "AL Concrete",
      jobTitle: "Web Developer",
      tools: [
        <SiTypescript className="bg-white h-14 w-14 rounded-xl" color="#007acc" key={-1}/>,
        <FaReact className="h-14 w-14 text-[#61DBFB]" key={0} />,
        <SiNextdotjs
          color="black"
          className="h-14 w-14"
          fill="white"
          key={1}
        />,
        <SiTailwindcss color="#38bdf8" className="h-14 w-14" key={2} />,
        <FaGithub className="h-14 w-14" key={3} />,
        <SiPhp className="h-14  w-14" color="#8993be" key={4} />,
      ],
      jobDate: {
        from:
          months[new Date("May 2022").getMonth()] +
          " " +
          new Date("May 2022").getFullYear(),
        to:
          months[new Date("August 2022").getMonth()] +
          " " +
          new Date("August 2022").getFullYear(),
      },
      jobDuties: [
        "Built wireframes and mock designs for a website landing page. This includes page layout, colour scheme,and any necessary features for the business.",
        "Developed user interfaces with modern JavaScript libraries/frameworks (React/NextJS), HTML5, andCSS3, which greatly improved page performance.",
        "Created a mobile responsive user experience with CSS Flexbox and CSS grid allowing web access fromvarying screen sizes",
        "Deployed website landing page and updated and maintained any changes per client request",
      ],
    },
  ];
  return (
    <article className="h-screen pt-20 overflow-hidden" ref={experienceRef}>
      <h3 className="sectionHeading ">Experience</h3>
      <div className=" flex flex-row w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {Experiences.map((experience, i) => {
          return (
            <ExperienceCard
              key={i}
              company={experience.company}
              companyLogo={experience.companyLogo}
              tools={experience.tools}
              jobDate={experience.jobDate}
              jobTitle={experience.jobTitle}
              jobDuties={experience.jobDuties}
              isInView={experienceIsInView}
            />
          );
        })}
      </div>
    </article>
  );
}
