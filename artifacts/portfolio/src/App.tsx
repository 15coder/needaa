import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";

function MeshBg({ dark }: { dark: boolean }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0,
      pointerEvents: "none", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        width: "min(720px,100vw)", height: "min(720px,100vw)",
        borderRadius: "50%", top: "-25%", right: "-18%",
        background: dark
          ? "radial-gradient(circle, rgba(10,132,255,.20) 0%, transparent 65%)"
          : "radial-gradient(circle, rgba(0,122,255,.13) 0%, transparent 65%)",
        filter: "blur(72px)",
        animation: "orb 26s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: "min(620px,90vw)", height: "min(620px,90vw)",
        borderRadius: "50%", bottom: "5%", left: "-18%",
        background: dark
          ? "radial-gradient(circle, rgba(191,90,242,.17) 0%, transparent 65%)"
          : "radial-gradient(circle, rgba(175,82,222,.10) 0%, transparent 65%)",
        filter: "blur(80px)",
        animation: "orbAlt 32s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: "min(520px,85vw)", height: "min(520px,85vw)",
        borderRadius: "50%", top: "38%", left: "28%",
        background: dark
          ? "radial-gradient(circle, rgba(100,210,255,.10) 0%, transparent 65%)"
          : "radial-gradient(circle, rgba(90,200,250,.07) 0%, transparent 65%)",
        filter: "blur(90px)",
        animation: "orb 21s 5s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: "min(400px,70vw)", height: "min(400px,70vw)",
        borderRadius: "50%", top: "65%", right: "8%",
        background: dark
          ? "radial-gradient(circle, rgba(255,55,95,.07) 0%, transparent 65%)"
          : "radial-gradient(circle, rgba(255,45,85,.04) 0%, transparent 65%)",
        filter: "blur(70px)",
        animation: "orbAlt 24s 9s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: "min(320px,60vw)", height: "min(320px,60vw)",
        borderRadius: "50%", bottom: "25%", left: "40%",
        background: dark
          ? "radial-gradient(circle, rgba(48,209,88,.06) 0%, transparent 65%)"
          : "radial-gradient(circle, rgba(52,199,89,.05) 0%, transparent 65%)",
        filter: "blur(65px)",
        animation: "orb 18s 12s ease-in-out infinite",
      }} />
    </div>
  );
}

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

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.10 }
    );
    const tick = () => document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    const id = setTimeout(tick, 100);
    return () => { clearTimeout(id); io.disconnect(); };
  }, []);

  return (
    <>
      <MeshBg dark={dark} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar dark={dark} onToggle={() => setDark(d => !d)} />
        <main>
          <HeroSection dark={dark} />
          <SkillsSection />
          <ProjectsSection />
          <FaqSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
