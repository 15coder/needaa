import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s) return s === "dark";
    } catch {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  /* Scroll reveal — IntersectionObserver on .reveal elements */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    const tick = () => document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    const id = setTimeout(tick, 100);
    return () => { clearTimeout(id); io.disconnect(); };
  }, []);

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
      <main>
        <HeroSection dark={dark} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
