import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  python,
  mongodb,
  postgresql,
  git,
  docker,
  aws,
  ncratleos,
  pathfinding,
  wemeet,
  nexusai,
  syncboard,
  sentinel,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Engineer",
    icon: mobile,
  },
  {
    title: "Backend & API Developer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer Intern",
    companyName: "NCR Atleos",
    icon: ncratleos,
    iconBg: "#FFFFFF",
    date: "Feb 2024 - Sep 2024",
    points: [
      "Developed Titan Dashboard, reducing manual finance batch tracking effort by 80%.",
      "Designed real-time monitoring dashboard, improving batch movement visibility by 50%.",
      "Implemented data validation & approval processes, ensuring 99.5% accuracy.",
      "Created ERP Wiki, consolidating Cloud, Treasury, Legacy Apps, Planning & Forecasting.",
    ],
  },
  {
    title: "Application Development Engineer-I",
    companyName: "NCR Atleos",
    icon: ncratleos,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Present",
    points: [
      "Engineered and optimized Titan Dashboard & ERP Wiki, improving system performance by 40%.",
      "Developed and maintained Oracle R12 apps on OCI & On-Prem, ensuring 99.9% uptime.",
      "Led IAM integration for Titan and Trident, automating access control & security protocols.",
      "Automated File Transfer System (FTS), enhancing data processing speed by 60%.",
      "Managed dynamic database configurations for BOC applications, reducing deployment issues by 35%.",
      "Spearheaded RevPro financial testing, ensuring 100% compliance with revenue standards.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "NexusAI — Document Intelligence",
    description:
      "Full-stack AI platform with RAG architecture enabling natural language Q&A over enterprise documents. Built with Next.js frontend, Python/FastAPI backend, Ollama (Llama 3) for local LLM generation, ChromaDB for vector search, and PostgreSQL for metadata. Features document chunking pipeline, citation tracking, and 94% answer accuracy across 1,200+ document chunks. 100% free — no paid APIs.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "python-fastapi",
        color: "green-text-gradient",
      },
      {
        name: "ollama-rag",
        color: "pink-text-gradient",
      },
    ],
    image: nexusai,
    sourceCodeLink: "https://github.com/AmnaKhan1323/nexusai",
  },
  {
    name: "SyncBoard — Collaborative Workspace",
    description:
      "Real-time collaborative project management SaaS with live cursors, Kanban boards, and team chat. Architected with Next.js 14, TypeScript, NextAuth (OAuth + JWT), Prisma ORM with PostgreSQL, Redis for pub/sub, and WebSocket server handling 50+ concurrent connections with <100ms sync latency. Deployed on AWS with CI/CD pipeline.",
    tags: [
      {
        name: "next.js-typescript",
        color: "blue-text-gradient",
      },
      {
        name: "websocket-redis",
        color: "green-text-gradient",
      },
      {
        name: "postgresql-prisma",
        color: "pink-text-gradient",
      },
    ],
    image: syncboard,
    sourceCodeLink: "https://github.com/AmnaKhan1323/syncboard",
  },
  {
    name: "Sentinel — Infrastructure Monitor",
    description:
      "Distributed cloud infrastructure monitoring platform tracking 26 microservices with real-time health checks, latency percentile dashboards (p50/p95/p99), and intelligent anomaly detection. Built with Node.js ingestion layer, Kafka for event streaming, TimescaleDB for time-series data, and Next.js dashboard. Processes 12.4k req/s with automated alerting via WebSocket.",
    tags: [
      {
        name: "node.js-kafka",
        color: "blue-text-gradient",
      },
      {
        name: "timescaledb",
        color: "green-text-gradient",
      },
      {
        name: "aws-docker",
        color: "pink-text-gradient",
      },
    ],
    image: sentinel,
    sourceCodeLink: "https://github.com/AmnaKhan1323/sentinel",
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "Interactive algorithm visualization tool featuring Dijkstra's, A*, BFS, and DFS with real-time rendering. Engineered a responsive UI with dynamic grid manipulation, wall placement, and weighted nodes for optimal route planning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: pathfinding,
    sourceCodeLink: "https://amnakhan1323.github.io/Pathfinding-Visualizer/",
  },
  {
    name: "We Meet — Video Conferencing",
    description:
      "Real-time video conferencing platform with WebRTC-powered HD video/audio streams, intelligent bandwidth management, and sub-200ms latency. Integrated Agora RTC for communication and RTM API for instant messaging.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "agora-webrtc",
        color: "green-text-gradient",
      },
      {
        name: "real-time",
        color: "pink-text-gradient",
      },
    ],
    image: wemeet,
    sourceCodeLink: "https://github.com/AmnaKhan1323/WeMeet",
  },
];

export { services, technologies, experiences, testimonials, projects };
