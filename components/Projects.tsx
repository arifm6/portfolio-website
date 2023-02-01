import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <article className="relative h-screen pt-20 overflow-hidden">
      <h3 className="sectionHeading ">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 h-[calc(100vh_-_8rem)] ">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[50vh] -skew-y-12"></div>
    </article>
  );
}
