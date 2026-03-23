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
    feedbacks: TSection;
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
    p: ["Full Stack Engineer | React · Node · Cloud · AI", "Building distributed systems & AI-powered platforms"],
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
      content: `I'm a Full Stack Engineer with ~2 years at NCR Atleos, where I
      build and maintain enterprise apps for global financial operations — things
      like real-time dashboards, automated file transfer systems, and ERP tooling.
      Day-to-day I work with React, Next.js, Node.js, TypeScript, Python, and
      cloud infrastructure (OCI, AWS, Docker). On the side, I've built an AI-powered
      document Q&A platform using RAG architecture (Ollama + ChromaDB + FastAPI),
      a real-time collaborative workspace with WebSockets, and a distributed
      infrastructure monitoring system with Kafka. I've solved 500+ DSA problems
      and hold a 6-star HackerRank rating in Problem Solving. I care about writing
      clean, well-tested code that actually ships.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Each project below is a complete full-stack application with its own
    GitHub repo, README with system design diagrams, and production-grade architecture.
    Click the GitHub icon on any card to explore the source code.`,
    },
  },
};
