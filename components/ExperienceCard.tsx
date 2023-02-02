import { motion } from "framer-motion";
import React from "react";
import icon from "./alconcrete-logo.png";
type Props = {
  companyLogo?: string;
};

export default function ExperienceCard({ companyLogo }: Props) {
  console.log(companyLogo);
  return (
    <div className="w-screen h-[calc(100vh_-_13rem)] flex flex-col rounded-lg items-center flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 pt-4 space-y-4 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.25 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-fit "
        src={companyLogo || "./mememan.jpeg"}
        alt=""
      />
      <div className=" w-[80%] sm:w-[85%] space-y-2 h-[calc(65vh_-_6.5rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-xl sm:text-4xl font-light">Job Title</h4>
        <p className="text-lg font-bold sm:text-2xl">Company Name</p>
        <div className="flex space-x-2">
          <img className="h-14 w-14 rounded-full" src="./mememan.jpeg" alt="" />
          <img className="h-14 w-14 rounded-full" src="./mememan.jpeg" alt="" />
          <img className="h-14 w-14 rounded-full" src="./mememan.jpeg" alt="" />
          <img className="h-14 w-14 rounded-full" src="./mememan.jpeg" alt="" />
        </div>
        <p className="uppercase text-gray-500">Jan 1, 2022 - Dec 31, 2022 </p>
        <ul className="flex flex-col list-disc text-lg pl-4 pr-8 space-y-4">
          <li>
            This is an example description of the roles that I performed at the
            job. Consider whether it should only be allowed to take up one line
            or possibly more
          </li>
          <li>
            This is an example description of the roles that I performed at the
            job
          </li>
          <li>
            This is an example description of the roles that I performed at the
            job
          </li>
          <li>
            This is an example description of the roles that I performed at the
            job
          </li>
          <li>
            This is an example description of the roles that I performed at the
            job
          </li>
        </ul>
      </div>
    </div>
  );
}
