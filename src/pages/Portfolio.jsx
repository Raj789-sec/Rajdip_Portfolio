import React, { useEffect } from "react";
import { YOU } from "../data/profile";
import Nav from "../components/layout/Nav";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Research from "../components/sections/Research";
import Blogs from "../components/sections/Blogs";
import Certifications from "../components/sections/Certifications";
import Achievements from "../components/sections/Achievements";
import Footer from "../components/layout/Footer";

function runSmokeTests() {
  try {
    console.group("Portfolio smoke tests");
    console.assert(typeof YOU.name === "string" && YOU.name.length > 0, "YOU.name should be a non-empty string");
    console.assert(YOU.social.github?.startsWith("http"), "Github link should be absolute");
    console.assert(YOU.social.linkedin?.includes("linkedin.com/in/rdsarkar"), "LinkedIn should be /in/rdsarkar");

    const requiredIds = ["about","skills","experience","education","projects","research","blogs","certifications","achievements","contact"];
    requiredIds.forEach((id) => {
      const el = document.getElementById(id) || document.querySelector(`[href='#${id}']`);
      console.assert(!!el, `Section or link for #${id} should exist`);
    });

    const boot = document.getElementById("bootmsg");
    console.assert(boot && boot.textContent?.trim().startsWith(">"), "Boot message should start with '>'");
    console.log("All basic assertions passed.");
    console.groupEnd();
  } catch (e) {
    console.error("Smoke test failed:", e);
  }
}

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.add("font-mono");
    runSmokeTests();
  }, []);

  return (
    <main className="min-h-screen scroll-smooth bg-[#0a1222] text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education /> 
      <Projects />
      <Research />
      <Blogs />
      <Certifications />
      <Achievements />
      <Footer />
    </main>
  );
}
