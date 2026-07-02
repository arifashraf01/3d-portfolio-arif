# Arif Ashraf — Portfolio Website

This repository contains the source code for my personal portfolio built with React, TypeScript, Three.js, React Three Fiber, and GSAP. It includes animated page sections, an interactive character scene, custom cursor interactions, and smooth transitions designed for a modern portfolio experience.

Live site: [https://arifashraf01.github.io/3d-portfolio-arif/](https://arifashraf01.github.io/3d-portfolio-arif/)

![Portfolio Preview](public/images/preview1.png)

## About Me

I am a Software Engineer focused on architecting scalable backends and high-performance REST APIs. Proficient in Java, Spring Boot, and Django, driving features through Agile cycles. Dedicated to optimizing complex systems and writing clean, reliable code.

- **Education:** BE in Computer Science and Engineering, SEA College of Engineering and Technology (2022-2026)
- **Skills:** Java, Python, C++, Spring Boot, Django, PostgreSQL, MongoDB, React, AWS EC2
- **Experience:** Software Developer Intern at Netpy Technologies

## Portfolio Features

- Responsive one-page portfolio layout with reusable section components.
- Interactive character scene rendering powered by React Three Fiber and Three.js.
- GSAP-powered animations and transitions for interactive storytelling.
- Custom cursor, hover interactions, and scroll-driven visual effects.
- Organized component architecture with dedicated utilities and style modules.

## Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation and Rendering
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Project Structure

```text
.
├── public/                    # Static assets
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # Scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Main page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers (loading state, etc.)
│   ├── data/                  # Static data/content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arifashraf01/3d-portfolio-arif.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Starts Vite dev server.
- `npm run build`: Type-checks and builds a production-ready bundle.
- `npm run preview`: Serves the production build locally.
- `npm run lint`: Runs ESLint checks across the project.

## Troubleshooting

- **Blank screen in development:** Check browser console for module import errors and verify all dependencies are installed.
- **Performance issues on low-end devices:** Reduce scene complexity and post-processing effects in the character/scene utilities.
- **GSAP plugin errors:** Ensure you have the correct plugin package and license configuration for your target environment.
- **TypeScript build failures:** Run `npm run build` and address reported type errors before deploying.

## License

This project is open source and available under the [MIT License](LICENSE).
