import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ahmad Arif",
      "NextJS-Web-Develepor",
      "<ButEnjoysOtherStuffToo />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <article className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src="./mememan.jpeg"
        alt=""
      />

      <div className="space-y-4 z-20 ">
        <h2 className="tracking-[10px] text-sm uppercase text-gray-500 mt-4 sm:tracking-[15px]  ">
          Software Engineer
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl px-10 font-semibold h-12 w-full sm:h-24  2xl:h-1/3  ">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </article>
  );
}
