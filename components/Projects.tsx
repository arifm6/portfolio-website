import React, { useEffect } from "react";
import { SiReact } from "react-icons/si";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      projectDemo: "https://amazon-clone-arifm6.vercel.app/",
      projectImage: <img src="amazon-project.png" className="w-full h-full" />,
      projectName: "Amazon Clone",
      projectDescription:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem nam placeat aliquid dicta vero labore, laborum similique mollitia alias temporibus quae quidem, ullam cumque laboriosam pariatur excepturi eius totam!",
      projectTools: [<SiReact color="#61DBFB" key={0} />],
    },
    {
      projectDemo: "https://netflix-clone-45ea5.web.app/",
      projectImage: <img src="netflix-project.png" className="w-full h-full" />,
      projectName: "Netflix Clone",
      projectDescription:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem nam placeat aliquid dicta vero labore, laborum similique mollitia alias temporibus quae quidem, ullam cumque laboriosam pariatur excepturi eius totam!",
    },
  ];
  return (
    <article className="relative h-screen pt-20 overflow-hidden">
      <h3 className="sectionHeading ">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-[calc(100vh_-_8rem)] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              projectNumber={i + 1}
              numberOfProjects={projects.length}
              projectDemo={project.projectDemo}
              projectImage={project.projectImage}
              projectName={project.projectName}
              projectTools={project.projectTools}
              projectDescription={project.projectDescription}
            />
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[50vh] -skew-y-12"></div>
    </article>
  );
}
