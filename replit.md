# Needaa Al-Rahman Aboud — Portfolio

A 100% static, client-side 3D personal portfolio website with a dark cyberpunk / digital forensics lab aesthetic. Fully in Arabic (RTL), featuring animated 3D particle fields, GSAP scroll animations, and glassmorphism bento grid layouts.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (static, no backend calls)
- Styling: Tailwind CSS + custom CSS variables (cyberpunk theme)
- 3D: Three.js + @react-three/fiber + @react-three/drei (with CSS fallback when WebGL unavailable)
- Animation: GSAP + ScrollTrigger
- Font: Cairo (Google Fonts, Arabic) + Share Tech Mono

## Where things live

- `artifacts/portfolio/src/App.tsx` — root app (single-page, no router needed)
- `artifacts/portfolio/src/index.css` — all CSS variables, utility classes, theme
- `artifacts/portfolio/src/components/ParticleField.tsx` — Three.js 3D scene + CSS fallback
- `artifacts/portfolio/src/components/HeroSection.tsx` — animated hero with GSAP letter stagger
- `artifacts/portfolio/src/components/SkillsSection.tsx` — 3D bento grid skills
- `artifacts/portfolio/src/components/ProjectsSection.tsx` — projects with Telegram download links
- `artifacts/portfolio/src/components/ContactSection.tsx` — email + WhatsApp contact
- `artifacts/portfolio/public/projects/` — drop project screenshots here (nidaa-shield.png, mujahed-pos.png)

## Architecture decisions

- Fully static: zero API calls, zero database, all data hardcoded in components
- WebGL fallback: ParticleField detects WebGL availability; falls back to CSS particle animation
- RTL throughout: `direction: rtl` on body, Cairo font from Google Fonts
- GSAP ScrollTrigger registered once per section component

## Product

A personal portfolio showcasing Needaa Al-Rahman Aboud's expertise in Digital Forensics, Cybersecurity, Mobile Software Engineering, and GSM Server Management. Features two downloadable Android apps (Nidaa Shield, Mujahed POS) with direct Telegram links.

## User preferences

- Language: Arabic (RTL), using Cairo font
- Theme: Dark cyberpunk — cyber blacks, neon green (#00ffcc), electric blue (#00aaff)
- No backend, no database — purely static

## Gotchas

- WebGL is not available in the Replit preview iframe; the CSS fallback activates automatically
- Drop project screenshots into `public/projects/nidaa-shield.png` and `public/projects/mujahed-pos.png`
- All personal data (name, links, phone) is hardcoded directly in component files

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
