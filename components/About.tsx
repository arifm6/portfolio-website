import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen pt-24 overflow-hidden"
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
        <div className="space-y-4 px-0 md:px-10 overflow-scroll h-[calc(100vh_-_26rem)] text-center md:text-left md:h-auto ">
          <h4 className="text-4xl font-semibold">Here is a background of me</h4>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            molestiae laudantium iste temporibus excepturi aliquam enim
            laboriosam impedit sequi ducimus, aliquid omnis optio obcaecati
            repellendus reiciendis repellat ullam eius. Consectetur!Lorem Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsa
            voluptas! Ratione reprehenderit nulla dolorum aspernatur,
            dignissimos neque. Mollitia voluptatibus sed magni, aperiam alias
            odit et doloribus illo sint iusto.
          </p>
        </div>
      </div>
    </motion.article>
  );
}
