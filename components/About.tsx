import { motion } from "framer-motion";
import React from "react";
import { FaBasketballBall } from "react-icons/fa";
import { GiTennisRacket, GiSushis } from "react-icons/gi";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen pt-20 overflow-hidden"
    >
      <h3 className="sectionHeading ">About</h3>

      <div className="space-y-4 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          src="./mememan.jpeg"
          alt=""
          className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-4  md:px-10 w-full px-4 overflow-y-auto h-[calc(100vh_-_26rem)] text-center md:text-left md:h-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
          <h4 className="text-4xl font-semibold">Here is a background of me</h4>
          <p className="text-base">
            I&apos;m{" "}
            <span className="underline decoration-[#FFE55C]/50 name-hover cursor-pointer">
              Ahmad
            </span>
            <span className="phonetic-name text-[#F7AB0A]">
              {" "}
              &nbsp; &#40;Pronounced "Aw-mid"&#41;
            </span>
            . Some people know me as{" "}
            <span className="underline decoration-[#FFE55C]/50 name-hover cursor-pointer">
              Massih
            </span>
            <span className="phonetic-name text-[#F7AB0A]">
              {" "}
              &nbsp; &#40;Pronounced &quot;Ma-Sea&quot; or
              &quot;Ma-Seeh&quot;&#41;
            </span>
            . I am a software developer that recently graduated from McMaster
            University{" "}
            <img
              className="h-[1.5rem] inline-block"
              src="./mcmaster-logo.png"
              alt=""
            />{" "}
            with a Bachelors of Science in Computer Science and Mathematics. I
            have always been interested in various areas of study such as
            cryptography, web development, and big data. I am a self taught
            front-end web developer that is continuously looking for new
            opportunities whether it be in full time work or contract/freelance
            projects. I enjoy challenges and am constantly looking to learn new
            things. Outside of work, I like to play different sports such as
            basketball{" "}
            <FaBasketballBall className="inline h-[1.5rem]" color="#ee6730" />{" "}
            and tennis{" "}
            <GiTennisRacket className="inline h-[1.5rem]" color="#dfff4f" /> . I
            like to go outside my comfort zone and try new hobbies, sports,
            foods <GiSushis className="inline h-[1.5rem]" color="#ff7e79" />, or
            anything really.
          </p>
        </div>
      </div>
    </motion.article>
  );
}
