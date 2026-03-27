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
      "Owned end-to-end development of finance batch monitoring dashboards (React, Node.js, PostgreSQL) as sole frontend developer, introducing WebSocket live updates that eliminated manual refresh cycles across 3 business units.",
      "Designed multi-level approval workflows with role-based access and audit logging, achieving 99.5% data accuracy across 10K+ monthly financial records.",
      "Built ERP Wiki — full-stack knowledge platform (Next.js, Node.js/Express, Oracle DB) serving 18+ enterprise modules with CRUD interfaces, Azure AD SSO (MSAL), and an AI Agent (Azure OpenAI GPT-4.1) for natural language ERP querying.",
    ],
  },
  {
    title: "Application Development Engineer-I",
    companyName: "NCR Atleos",
    icon: ncratleos,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Present",
    points: [
      "Developed AIS (Automated Invoice System) — enterprise AP automation using Next.js, Node.js/TypeScript, Oracle DB, Azure AI Document Intelligence, Azure OpenAI (GPT-4.1-mini), and Oracle Fusion Cloud REST APIs, automating invoice processing across 6+ countries.",
      "Built Finance Reconciliation Dashboard connecting 5+ Oracle databases — multi-system reconciliation (Titan↔ERP, EBS↔Fusion Cloud, Zuora↔ERP), Oracle BI Publisher SOAP/XML integration, automated batch retrigger via SSH, and SOX-compliant SAR reports with ServiceNow integration.",
      "Developed real-time dashboards with Chart.js, Socket.IO, Redux Toolkit & WebSockets — live invoice status, mismatch audit reports, BU-wise analytics, Critical Jobs Monitoring, and AI confidence tier analysis.",
      "Implemented Microsoft Entra ID (Azure AD) SSO with OAuth2/Passport.js; multi-agent AI validation pipeline with Azure OpenAI producing tiered accuracy metrics.",
      "Automated File Transfer System (FTS) reducing data latency by 60%; maintained Oracle R12 enterprise apps on OCI with 99.9% uptime; wrote integration tests (Jest/Supertest) and API contract tests with Postman collections for CI validation.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "NexusAI — Document Intelligence",
    description:
      "Full-stack AI platform with RAG architecture enabling natural language Q&A over enterprise documents. Built with Next.js frontend, Python/FastAPI backend, Ollama (Llama 3) for local LLM generation, ChromaDB for vector search, and PostgreSQL for metadata. Features document chunking pipeline, citation tracking, and benchmarked at 94% answer relevance across 1,200+ chunks. Fully self-hosted — zero API costs.",
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
      "Real-time collaborative project management SaaS with live cursors, Kanban boards, and team chat. Architected with Next.js 14, TypeScript, NextAuth (OAuth + JWT), Prisma ORM with PostgreSQL, Redis for pub/sub, and WebSocket server. Load-tested to 50+ concurrent connections at <100ms sync latency.",
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
      "Distributed infrastructure monitoring platform tracking 26 simulated microservices with real-time health checks, latency percentile dashboards (p50/p95/p99), and anomaly detection. Built with Node.js ingestion layer, Kafka for event streaming, TimescaleDB for time-series data, and Next.js dashboard. Benchmarked at 12.4k msg/s throughput with automated alerting via WebSocket.",
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

// Testimonials section intentionally left empty — not rendered in app
const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, testimonials, projects };
