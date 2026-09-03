type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks?: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Amna Khan — Portfolio",
    fullName: "Amna Khan",
    email: "amnakhan1323690@gmail.com",
  },
  hero: {
    name: "Amna Khan",
    p: ["Software Engineer", "Building scalable web systems & AI-powered platforms"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Software Engineer with 2+ years of experience shipping production web
      systems serving 500+ users across 35+ countries at NCR Atleos. I deliver
      high-performance React/Next.js/TypeScript applications (40% smaller bundles,
      50% faster loads) and distributed, event-driven backend systems using Kafka,
      Redis, and WebSockets. At NCR Atleos I've built an Automated Invoice System,
      a Finance Reconciliation Dashboard, real-time monitoring dashboards, and an
      internal ERP Wiki knowledge platform covering 18+ modules. On the side, I've
      built Sentinel (a distributed infrastructure monitoring platform), NexusAI
      (a Retrieval-Augmented Generation document Q&A platform), and CodeRise (a
      full-stack DSA interview-prep platform with live code execution, timed
      contests, and an AI tutoring assistant). I'm strong in data structures,
      algorithms, and system design, and care about writing clean, well-tested
      code that actually ships.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks section removed — not rendered in app
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Each project below is a complete full-stack application with its own
    GitHub repo, README with system design diagrams, and production-grade architecture.
    Click the GitHub icon on any card to explore the source code.`,
    },
  },
};
