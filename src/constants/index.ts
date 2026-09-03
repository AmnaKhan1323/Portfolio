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
  postgresql,
  git,
  docker,
  aws,
  redux,
  ncratleos,
  nexusai,
  coderise,
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
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "AI & LLM Integration",
    icon: mobile,
  },
  {
    title: "Backend & API Developer",
    icon: backend,
  },
  {
    title: "Cloud & Enterprise Systems",
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
      "Owned frontend delivery for finance monitoring dashboards (React, JavaScript) as sole engineer, shipping reusable modules, responsive layouts, and real-time updates that eliminated 15+ hours/week across 3 business units.",
      "Delivered a multi-step approval workflow UI with role-based views and REST API integration, sustaining 99.5% data accuracy across 10K+ monthly records.",
      "Shipped ERP Wiki (Next.js 14 + React 18) covering 18+ modules with full-text search and CRUD flows, applying modern React patterns (hooks, context, suspense) and accessibility-first design.",
    ],
  },
  {
    title: "Application Development Engineer-I",
    companyName: "NCR Atleos",
    icon: ncratleos,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Present",
    points: [
      "Spearheaded core interfaces for an Automated Invoice System (React, Next.js, TypeScript, Tailwind CSS), unblocking compliance and reporting workflows for production users across 6+ locales.",
      "Built a Finance Reconciliation Dashboard with a reusable component library (data tables, filters, comparison views), cutting manual reconciliation effort and sustaining cross-browser support (Chrome, Firefox, Safari, Edge).",
      "Optimized frontend performance via code splitting, lazy loading, and memoization, cutting bundle size by 40%, improving load speed by 50%, and sustaining 90+ Lighthouse scores in production.",
      "Engineered real-time monitoring dashboards with React, WebSockets, and optimistic UI patterns; drove test coverage to 85%+ through automated tests and peer review, safeguarding release quality.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "NexusAI — Document Intelligence",
    description:
      "Developed a document intelligence platform with Retrieval-Augmented Generation (RAG), enabling natural-language Q&A with citation-backed, hallucination-resistant responses over uploaded PDF/DOCX documents. Implemented chunking, embedding, and vector search pipelines (ChromaDB, Ollama) with asynchronous processing and scalable multi-session chat management.",
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
    name: "CodeRise — Interview Prep Platform",
    description:
      "Architected a full-stack DSA interview-prep platform with 280+ curated problems across 4 languages, structured learning roadmaps, gamified progress tracking, and a full admin CMS. Built a sandboxed multi-language code execution engine (client-side JS/Python, Judge0-backed Java/C++), timed contests with live leaderboards, and an AI tutoring assistant - built solo, end-to-end.",
    tags: [
      {
        name: "next.js-typescript",
        color: "blue-text-gradient",
      },
      {
        name: "prisma-postgresql",
        color: "green-text-gradient",
      },
      {
        name: "openai-judge0",
        color: "pink-text-gradient",
      },
    ],
    image: coderise,
    sourceCodeLink: "https://coderise-ten-lake.vercel.app",
  },
  {
    name: "Sentinel — Infrastructure Monitor",
    description:
      "Designed and built a distributed infrastructure monitoring platform covering 26 microservices, with real-time health checks, p50/p95/p99 latency dashboards, and automated anomaly detection. Architected an event-driven ingestion pipeline (Kafka, TimescaleDB) supporting high-throughput telemetry and sub-second WebSocket updates.",
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
];

// Testimonials section intentionally left empty — not rendered in app
const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, testimonials, projects };
