import React, { useRef } from "react";
import { FaGithub, FaJava, FaReact, FaUnity } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import {
  SiJest,
  SiNextdotjs,
  SiPhp,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
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
      company: "Jayiza",
      jobTitle: "Frontend Engineer",
      companyLogo: "/jayiza-logo.png",
      tools: [
        <SiNextdotjs
          color="black"
          className="h-14 w-14"
          fill="white"
          key={0}
        />,

        <FaReact className="h-14 w-14 text-[#61DBFB]" key={1} />,
        <SiTypescript
          className="bg-white h-14 w-14 rounded-xl"
          color="#007acc"
          key={2}
        />,
        <SiJest className="h-14 w-14 text-[#C63D14]" key={3} />,
        <SiSelenium className="h-14 w-14 text-[#7BC769]" key={4} />,
        <Image
          width={56}
          height={56}
          src="/figma-logo.png"
          alt="Figma Logo"
          key={5}
          className="h-14 w-14"
        />,
      ],
      jobDate: {
        from:
          months[new Date("June 2023").getMonth()] +
          " " +
          new Date("March 2023").getFullYear(),
        to: "Present",
      },
      jobDuties: [
        "Led the design and implementation of the frontend/UI for a SaaS product, utilizing Figma designs as a central repository for project assets. Implemented these assets and designs using Next.js (React), TypeScript, and various other tools.",
        "Engineered and implemented middleware for seamless interaction with API endpoints responsible for CRUD operations, ensuring secure communication between the frontend and backend. These enhance- ments improved the efficiency of backend procedural calls, such as user login and verification.",
        "Established automated CI/CD pipelines using tools such as GitHub Actions, automating testing and deployment upon code commits to minimize manual intervention.",
        "Coordinated the setup of comprehensive testing environments, including unit and integration tests, utilizing the Jest testing framework. Additionally, implemented seamless end-to-end testing automation pipelines with Selenium, resulting in a 17.5% reduction in the average application response time.",
      ],
    },
    {
      company: "Code Ninjas",
      jobTitle: "Coding Instructor",
      companyLogo: "/code-ninjas-logo.png",
      tools: [
        <IoLogoJavascript
          className="h-14 w-14 bg-[#F0DB4F]"
          color="#323330 "
          key={0}
        />,
        <Image
          width={56}
          height={56}
          src="/python-logo.png"
          alt="Python Logo"
          className="bg-transparent"
          key={1}
        />,
        <FaUnity color="black" className="h-14 w-14" fill="white" key={2} />,
        <FaGithub className="h-14 w-14" key={3} />,
        <Image
          width={56}
          height={56}
          src="/virtualbox-logo.png"
          alt="VirtualBox Logo"
          className="bg-transparent"
          key={4}
        />,
      ],
      jobDate: {
        from:
          months[new Date("March 2023").getMonth()] +
          " " +
          new Date("March 2023").getFullYear(),
        to: "Present",
      },
      jobDuties: [
        "Customized Windows laptops for optimal functionality within the educational context, managing the activation and deactivation of specific OS features to align with user requirements.",
        "Delivered comprehensive lessons on essential programming concepts, offering in-depth guidance on JavaScript, Python, and Unity, fostering a robust foundational understanding among students.",
        "Facilitated student growth by identifying and resolving project errors, offering constructive feedback, and ensuring optimal learning center functionality through effective troubleshooting of technical issues.",
      ],
    },
    {
      company: "AL Concrete",
      jobTitle: "Web Developer",
      tools: [
        <SiTypescript
          className="bg-white h-14 w-14 rounded-xl"
          color="#007acc"
          key={-1}
        />,
        <FaReact className="h-14 w-14 text-[#61DBFB]" key={0} />,
        <SiTailwindcss color="#38bdf8" className="h-14 w-14" key={1} />,
        <FaGithub className="h-14 w-14" key={2} />,
        <SiPhp className="h-14  w-14" color="#8993be" key={3} />,
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
        "Took the lead in conceptualizing and executing the frontend/UI design for a concrete company's online presence. Managed design assets and guidelines, effectively implementing them to create a visually appealing website using React, complemented by a curated selection of packages and tools.",
        "Implemented advanced SEO optimization techniques, resulting in a 30% increase in website traffic and user engagement. Utilized industry-standard tools like Google Analytics and Ahrefs to conduct in-depth keyword research and competitor analysis, leading to the successful implementation of a data-driven content strategy.",
        "Established and managed the company's online presence, including the creation of a Google Business Profile and the implementation of various marketing strategies to enhance brand visibility.",
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
