import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";

const stats = [
  { value: "500+", label: "DSA Problems Solved", icon: "🧠", link: "https://github.com/AmnaKhan1323" },
  { value: "99.9%", label: "System Uptime Achieved", icon: "⚡", link: "https://www.ncratleos.com" },
  { value: "80%", label: "Effort Reduction via Automation", icon: "🚀", link: "https://linkedin.com/in/amna-khan-38843b204" },
  { value: "6★", label: "HackerRank Problem Solving", icon: "🏆", link: "https://www.hackerrank.com/profile/AmnaKhan1323" },
];

const achievements = [
  {
    title: "6★ Problem Solving on HackerRank",
    description: "Achieved 6-star rating in Problem Solving and 5-star in C++ Programming.",
    icon: "🏅",
    link: "https://www.hackerrank.com/profile/AmnaKhan1323",
  },
  {
    title: "500+ DSA Problems",
    description:
      "Solved 500+ Data Structures & Algorithms problems across LeetCode, HackerRank, and other competitive platforms.",
    icon: "💻",
    link: "https://github.com/AmnaKhan1323",
  },
  {
    title: "Shipped Production Systems at Scale",
    description: "Built Titan Dashboard & File Transfer System at NCR Atleos — live in production, used by finance teams across global operations.",
    icon: "🏭",
    link: "https://www.ncratleos.com",
  },
  {
    title: "B.Tech CS — CGPA 8.06/10",
    description:
      "Graduated from Dr. A.P.J. Abdul Kalam Technical University with distinction in Computer Science.",
    icon: "🎓",
    link: "https://aktu.ac.in/",
  },
  {
    title: "Cloud & DevOps Proficient",
    description:
      "Production experience with OCI, AWS, Docker, CI/CD pipelines, and infrastructure monitoring across distributed microservices.",
    icon: "☁️",
    link: "https://github.com/AmnaKhan1323",
  },
  {
    title: "AI Integration & Python",
    description:
      "Built AI-powered platforms with Python, FastAPI, Ollama (local LLMs), and RAG architecture using ChromaDB vector databases.",
    icon: "🤖",
    link: "https://github.com/AmnaKhan1323",
  },
];

const Achievements = () => {
  return (
    <div className="relative">
      <div className="css-particles css-particles-violet" />
      <div className="relative z-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have accomplished</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((stat, index) => (
          <a
            key={stat.label}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable
              glareColor="#915EFF"
              glareMaxOpacity={0.1}
              perspective={800}
            >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              className="stat-card cursor-pointer rounded-2xl p-6 text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <p className="text-[36px]" style={{ transform: "translateZ(30px)" }}>{stat.icon}</p>
              <h3 className="mt-2 text-[32px] font-black text-white" style={{ transform: "translateZ(20px)" }}>
                {stat.value}
              </h3>
              <p className="text-secondary mt-1 text-[14px]" style={{ transform: "translateZ(10px)" }}>{stat.label}</p>
            </motion.div>
            </Tilt>
          </a>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <a
            key={achievement.title}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareColor="#915EFF"
              glareMaxOpacity={0.08}
              perspective={1000}
            >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="achievement-badge flex items-start gap-4 rounded-2xl p-6 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-[32px]" style={{ transform: "translateZ(25px)" }}>{achievement.icon}</span>
              <div className="flex-1" style={{ transform: "translateZ(15px)" }}>
                <div className="flex items-center justify-between">
                  <h4 className="text-[18px] font-bold text-white">
                    {achievement.title}
                  </h4>
                  <span className="text-[#915EFF] text-[12px] ml-2 shrink-0">↗</span>
                </div>
                <p className="text-secondary mt-1 text-[14px] leading-[22px]">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
            </Tilt>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
