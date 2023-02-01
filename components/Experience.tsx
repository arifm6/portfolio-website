import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <article className="h-screen pt-20 overflow-hidden ">
      <h3 className="sectionHeading ">Experience</h3>
      <div className="flex flex-row w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </article>
  );
}
