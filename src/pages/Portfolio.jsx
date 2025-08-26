// src/pages/Portfolio.jsx
import { useEffect } from "react";
import Background from "../components/layout/Background";
import Nav from "../components/layout/Nav";

import Hero from "../components/sections/Hero";
import ScrollCue from "../components/atoms/ScrollCue";
import About from "../components/sections/About";
import Achievements from "../components/sections/Achievements";
import Skills from "../components/sections/Skills";
import ExperienceEducation from "../components/sections/ExperienceEducation";
import ProjectsResearch from "../components/sections/ProjectsResearch";
import Blogs from "../components/sections/Blogs";
import Footer from "../components/layout/Footer"; // Contact

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark", "font-mono");
  }, []);

  return (
    <>
      <Background />
      <main className="relative z-10 min-h-screen text-white scroll-smooth">
        <Nav />

        {/* HERO */}
        <Hero />

        {/* tiny gap + scroll cue to About */}
        <section className="py-6">
          <ScrollCue href="#about" />
        </section>

        {/* ==== ORDERED SECTIONS ==== */}
        <section id="about" className="section scroll-mt-24">
          <About />
        </section>

        <section id="achievements" className="section scroll-mt-24">
          <Achievements />
        </section>

        <section id="skills" className="section scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="section scroll-mt-24">
          <ExperienceEducation />
        </section>

        <section id="projects" className="section scroll-mt-24">
          <ProjectsResearch />
        </section>

        <section id="Blogs" className="section scroll-mt-24">
          <Blogs />
        </section>

        {/* CONTACT / FOOTER */}
        <Footer />
      </main>
    </>
  );
}
