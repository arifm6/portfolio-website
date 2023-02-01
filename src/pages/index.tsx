import About from "components/About";
import Experience from "components/Experience";
import Header from "components/Header";
import Hero from "components/Hero";
import Projects from "components/Projects";
import Skills from "components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
      <Head>
        <title>Ahmad Arif Portfolio Website</title>
        <meta name="description" content="Ahmad Arif's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./mememan.jpeg" />
      </Head>

      {/**Header */}

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start"></section>
    </div>
  );
}
