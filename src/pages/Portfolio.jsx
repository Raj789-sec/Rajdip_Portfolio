import Background from "../components/layout/Background";
import CursorGlow from "../components/effects/CursorGlow";
import Nav from "../components/layout/Nav";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Achievements from "../components/sections/Achievements";
import Skills from "../components/sections/Skills";
import ExperienceEducation from "../components/sections/ExperienceEducation";
import ProjectsResearch from "../components/sections/ProjectsResearch";
import Blogs from "../components/sections/Blogs";
import Footer from "../components/layout/Footer";

export default function Portfolio() {
  return (
    <>
      <Background />
      <CursorGlow />
      <main className="relative z-10 min-h-screen text-white">
        <Nav />
        <Hero />

        <section id="about" className="section scroll-mt-24">
          <About />
        </section>

        <section id="services" className="section scroll-mt-24">
          <Services />
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

        <Footer />
      </main>
    </>
  );
}
