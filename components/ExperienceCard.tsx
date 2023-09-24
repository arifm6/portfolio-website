import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import icon from "./alconcrete-logo.png";
type Props = {
  company?: string;
  companyLogo?: string;
  tools?: any;
  jobDate?: any;
  jobTitle?: string;
  jobDuties?: Array<string>;
  isInView: boolean;
};

export default function ExperienceCard({
  company,
  companyLogo,
  tools,
  jobDate,
  jobTitle,
  jobDuties,
  isInView,
}: Props) {
  return (
    <div className="w-screen h-[calc(100vh_-_13rem)] flex flex-col rounded-lg items-center flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 pt-4 space-y-4 overflow-hidden  ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.25 }}
        animate={isInView && { y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {" "}
        <Image
          width={128}
          height={128}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-fit "
          src={companyLogo || "/generic-company-logo.png"}
          alt={`${company} logo`}
        />
      </motion.div>
      <div className=" w-[80%] sm:w-[85%] space-y-2 h-[calc(65vh_-_6.5rem)] overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-xl sm:text-4xl font-light">{jobTitle}</h4>
        <p className="text-lg font-bold sm:text-2xl">{company}</p>
        <div className="flex space-x-2">{tools}</div>
        <p className="uppercase text-gray-500">
          {jobDate?.from} - {jobDate?.to}
        </p>
        <ul className="flex flex-col list-disc text-lg pl-4 pr-8 space-y-4">
          {jobDuties?.map((jobDuty, i) => {
            return <li key={i}>{jobDuty}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
