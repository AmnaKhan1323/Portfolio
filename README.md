# Amna Khan — 3D Developer Portfolio

<!-- GitHub badges -->

[![Top Language](https://img.shields.io/github/languages/top/AmnaKhan1323/portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/github/license/AmnaKhan1323/portfolio?color=dddddd&labelColor=000000)](https://github.com/AmnaKhan1323/portfolio/blob/main/LICENSE)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)

## 🌐 Live Demo

> _Deploy URL will be added once hosted on Vercel._

## 📝 Description

My personal developer portfolio — a fully responsive, interactive 3D website built with **React 18**, **Three.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Showcases my work experience at NCR Atleos, 3 production-grade full-stack projects (NexusAI, SyncBoard, Sentinel), achievements, and a working contact form via EmailJS.

### ✨ Key Features

- 🎮 Interactive 3D computer model & Earth globe (Three.js + React Three Fiber)
- 🌊 Glassmorphism navbar with scroll-aware transparency
- 📊 Achievements section with stats grid and parallax tilt cards
- 💼 5 project cards with GitHub links and live demos
- 📧 Working contact form (EmailJS integration)
- 📄 Resume download button
- 🎯 Hover tooltips on tech stack icons
- ⚡ CSS particle effects replacing WebGL overhead
- 📱 Fully responsive across all devices

<details><summary><b>Folder Structure</b></summary>

```bash
reactjs18-3d-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   ├── Works.tsx
├   ├   ├   └── page.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── logo.png
├   └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>



## ✨ Technologies Used

[![Technologies Used](https://skillicons.dev/icons?i=ts,react,vite,threejs,tailwind,vercel)](https://skillicons.dev)

| Technology | Purpose |
|:-----------|:--------|
| React 18 | UI framework with hooks & concurrent features |
| TypeScript | Type safety across the codebase |
| Three.js / R3F | 3D models, scenes, and animations |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Page transitions and scroll animations |
| Vite | Lightning-fast dev server and build |
| EmailJS | Client-side contact form emails |
| Vercel | Deployment and hosting |

## 🧰 Get Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+)
- [Git](https://git-scm.com/downloads)

### Installation

```bash
git clone https://github.com/AmnaKhan1323/portfolio.git
cd portfolio
npm install
```

Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=your_access_token
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Scripts

| Script | Action |
|:-------|:-------|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run ts:check` | TypeScript type-checking |

## 🚀 Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push this repo to GitHub
2. Import on Vercel → Add env vars → Deploy

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## 📞 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Amna%20Khan-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/amna-khan-38843b204)
[![GitHub](https://img.shields.io/badge/GitHub-AmnaKhan1323-181717?style=flat&logo=github)](https://github.com/AmnaKhan1323)
[![Email](https://img.shields.io/badge/Email-amnakhan1323690%40gmail.com-red?style=flat&logo=gmail)](mailto:amnakhan1323690@gmail.com)

## 📋 License

This project is open source under the [MIT License](LICENSE).
