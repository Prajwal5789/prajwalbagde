
import { useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  MapPin,
  Terminal,
  Database,
  ShieldCheck,
  Globe,
  Laptop,
  Send,
  Sparkles,
  ExternalLink,
  Calendar,
  FolderCode,
  Cloud,
  FileText,
  CheckCircle2,
  Palette,
  Monitor,
  Lock
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

/* ================================
   ANIMATION SETTINGS
================================ */

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const viewportSettings = {
  once: true,
  amount: 0.15
};

/* ================================
   THEMES
================================ */

const themes = {
  blue: {
    name: "Ocean Blue",
    primary: "#4285ff",
    secondary: "#42d9ef",
    background: "#080e1b",
    surface: "#101d31",
    surfaceHover: "#14243b",
    text: "#f4f7ff",
    muted: "#9aa9bf",
    border: "rgba(255,255,255,0.09)"
  },

  purple: {
    name: "Royal Purple",
    primary: "#a855f7",
    secondary: "#ec4899",
    background: "#160d24",
    surface: "#251438",
    surfaceHover: "#321b4b",
    text: "#faf5ff",
    muted: "#c4b5d5",
    border: "rgba(216,180,254,0.14)"
  },

  green: {
    name: "Emerald Green",
    primary: "#10b981",
    secondary: "#34d399",
    background: "#071b17",
    surface: "#102c25",
    surfaceHover: "#173b31",
    text: "#ecfdf5",
    muted: "#a7c9bc",
    border: "rgba(110,231,183,0.13)"
  },

  red: {
    name: "Crimson Red",
    primary: "#ef4444",
    secondary: "#fb923c",
    background: "#1c0b10",
    surface: "#30151d",
    surfaceHover: "#401c27",
    text: "#fff1f2",
    muted: "#d6aab2",
    border: "rgba(252,165,165,0.13)"
  },

  orange: {
    name: "Sunset Orange",
    primary: "#f97316",
    secondary: "#facc15",
    background: "#1c1208",
    surface: "#302011",
    surfaceHover: "#422b15",
    text: "#fff7ed",
    muted: "#d6c0a3",
    border: "rgba(253,186,116,0.14)"
  }
};

/* ================================
   PROJECT DATA
================================ */

const projects = [
  {
    id: 1,
    number: "01",
    title: "USB Device Activity Monitor",
    category: "Cyber Security",
    description:
      "A USB device monitoring and forensic logging application that records device connection and disconnection activities with important device information.",
    technologies: ["Python", "Flask", "SQLite", "Cyber Forensics"],
    status: "Completed",
    icon: ShieldCheck
  },
  {
    id: 2,
    number: "02",
    title: "FairFlow",
    category: "IoT / Web Development",
    description:
      "An intelligent water distribution management system that monitors household water usage and manages authorized water allocation using IoT.",
    technologies: ["React", "Python", "IoT", "Supabase"],
    status: "In Progress",
    icon: Database
  },
  {
    id: 3,
    number: "03",
    title: "Risk Assessment System",
    category: "Python Development",
    description:
      "A probability-based risk assessment application that calculates risk scores and displays risk information through a web dashboard.",
    technologies: ["Python", "Flask", "SQLite"],
    status: "Completed",
    icon: Lock
  },
  {
    id: 4,
    number: "04",
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A responsive personal portfolio website showcasing my projects, technical skills, education and certifications.",
    technologies: ["React", "Vite", "CSS", "JavaScript"],
    status: "In Progress",
    icon: Laptop
  }
];

/* ================================
   SKILLS DATA
================================ */

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["C", "Python", "JavaScript"]
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["HTML", "CSS", "React", "Flask"]
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    items: [
      "Cyber Forensics",
      "Network Security",
      "Linux Basics"
    ]
  },
  {
    title: "Data & Tools",
    icon: Database,
    items: ["Power BI", "Tableau", "Excel", "Git", "GitHub"]
  }
];

/* ================================
   CERTIFICATES DATA
================================ */

const certificates = [
  {
    id: 1,
    title: "Data Analytics Job Simulation",
    organization: "Deloitte · Forage",
    date: "October 1, 2026",
    category: "Data Analytics",
    file: "/certificates/data-analytics-deloitte.pdf"
  },
  {
    id: 2,
    title: "Cyber Job Simulation",
    organization: "Deloitte · Forage",
    date: "September 28, 2026",
    category: "Cyber Security",
    file: "/certificates/cyber-job-deloitte.pdf"
  },
  {
    id: 3,
    title: "Android Developer Virtual Internship",
    organization: "Google for Developers · EduSkills",
    date: "January – March 2025",
    category: "Android Development",
    file: "/certificates/google-android-internship.pdf"
  },
  {
    id: 4,
    title: "Introduction to Cyber Security",
    organization: "Simplilearn SkillUp",
    date: "September 30, 2026",
    category: "Cyber Security",
    file: "/certificates/introduction-cyber-security.pdf"
  },
  {
    id: 5,
    title: "AI in Cyber Security",
    organization: "EduSkills Academy",
    date: "March 2, 2026",
    category: "Artificial Intelligence",
    file: "/certificates/ai-in-cyber-security.pdf"
  },
  {
    id: 6,
    title: "Cloud Virtual Internship",
    organization: "AWS Academy · EduSkills",
    date: "April – June 2025",
    category: "Cloud Computing",
    file: "/certificates/aws-cloud-internship.pdf"
  },
  {
    id: 7,
    title: "Zero Trust Cloud Security Virtual Internship",
    organization: "Zscaler · EduSkills",
    date: "July – September 2025",
    category: "Cloud Security",
    file: "/certificates/zscaler-zero-trust.pdf"
  }
];

/* ================================
   SECTION HEADING
================================ */

function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

/* ================================
   MAIN APP
================================ */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useState("blue");
  const [themeOpen, setThemeOpen] = useState(false);

  const currentTheme = themes[theme];

  const themeStyles = {
    "--primary": currentTheme.primary,
    "--primary-light": currentTheme.primary,
    "--cyan": currentTheme.secondary,
    "--bg": currentTheme.background,
    "--bg-secondary": currentTheme.background,
    "--card": currentTheme.surface,
    "--card-hover": currentTheme.surfaceHover,
    "--text": currentTheme.text,
    "--muted": currentTheme.muted,
    "--border": currentTheme.border,
    "--gradient": `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`
  };

  const filters = [
    "All",
    "Cyber Security",
    "Web Development",
    "IoT / Web Development",
    "Python Development"
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Certificates", "#certificates"],
    ["Education", "#education"],
    ["Contact", "#contact"]
  ];

  return (
    <div
      className="portfolio"
      style={themeStyles}
    >

      {/* ================================
          NAVBAR
      ================================= */}

      <motion.header
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            PB<span>.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </motion.header>

      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="hero section" id="home">

        <div className="hero-glow"></div>

        <div className="container hero-container">

          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.div variants={fadeUp}>
              <div className="availability">
                <span className="availability-dot"></span>
                Open to Internship Opportunities
              </div>
            </motion.div>

            <motion.p className="hero-intro" variants={fadeUp}>
              HELLO, I'M
            </motion.p>

            <motion.h1 variants={fadeUp}>
              Prajwal <span>Bagde.</span>
            </motion.h1>

            <motion.h2 variants={fadeUp}>
              Computer Science <span>Engineering</span> Student
            </motion.h2>

            <motion.p className="hero-description" variants={fadeUp}>
              Passionate about technology, cybersecurity, digital
              forensics and web development. I enjoy building
              practical solutions and exploring new technologies.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>

              <a href="#projects" className="primary-btn">
                Explore Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/Prajwal_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Download Resume
                <Download size={17} />
              </a>

            </motion.div>

            <motion.div className="hero-socials" variants={fadeUp}>

              <a
                href="https://github.com/Prajwal5789"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-bagde5789/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Globe size={19} />
              </a>

              <a
                href="mailto:prajwalbagde5789@gmail.com"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>

            </motion.div>

          </motion.div>

          {/* PROFILE IMAGE */}

          <motion.div
            className="hero-visual"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9 }}
          >

            <motion.div
              className="profile-orbit"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="profile-orbit orbit-two"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="profile-card"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.025 }}
            >

              <div className="profile-avatar">
                <img
                  src="/profile.jpg.jpeg"
                  alt="Prajwal Bagde"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="profile-card-info">
                <span>COMPUTER SCIENCE ENGINEERING</span>
                <h3>Prajwal Bagde</h3>
                <p>Nagpur, Maharashtra, India</p>
              </div>

            </motion.div>

            <motion.div
              className="floating-card floating-card-one"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              <ShieldCheck size={19} />
              Cybersecurity
            </motion.div>

            <motion.div
              className="floating-card floating-card-two"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity
              }}
            >
              <Code2 size={19} />
              Web Developer
            </motion.div>

          </motion.div>

        </div>

        <motion.div
          className="hero-bottom"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </motion.div>

      </section>

      {/* ================================
          ABOUT SECTION
      ================================= */}

      <section className="section about-section" id="about">

        <div className="container">

          <SectionHeading
            label="ABOUT ME"
            title={<>A little <span>introduction.</span></>}
            description="Get to know more about my background, interests and goals."
          />

          <div className="about-grid">

            <motion.div
              className="about-main"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              <div className="about-icon">
                <GraduationCap size={30} />
              </div>

              <h3>Who Am I?</h3>

              <p>
                I am a Computer Science Engineering student at
                S. B. Jain Institute of Technology, Management
                and Research, Nagpur.
              </p>

              <p>
                I have an interest in cybersecurity, digital
                forensics, web development and software
                technologies. I enjoy learning by building
                practical projects and solving real-world problems.
              </p>

              <p>
                My goal is to continuously improve my technical
                abilities and gain practical industry experience.
              </p>

            </motion.div>

            <motion.div
              className="about-details"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              <motion.div className="detail-card" variants={cardAnimation}>
                <GraduationCap />
                <div>
                  <span>EDUCATION</span>
                  <h4>B.Tech Computer Science</h4>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={cardAnimation}>
                <MapPin />
                <div>
                  <span>LOCATION</span>
                  <h4>Nagpur, Maharashtra</h4>
                </div>
              </motion.div>

              <motion.div className="detail-card" variants={cardAnimation}>
                <Calendar />
                <div>
                  <span>GRADUATION</span>
                  <h4>2023 — 2027</h4>
                </div>
              </motion.div>

              <motion.div
                className="detail-card career-interest-card"
                variants={cardAnimation}
              >

                <BriefcaseBusiness />

                <div className="career-interest-content">

                  <span>CAREER INTEREST</span>

                  <div className="career-interest-list">

                    <div className="career-interest-item">
                      <ShieldCheck size={18} />
                      <h4>Cybersecurity & Digital Forensics</h4>
                    </div>

                    <div className="career-interest-item">
                      <Code2 size={18} />
                      <h4>Web Development & UI Design</h4>
                    </div>

                    <div className="career-interest-item">
                      <Terminal size={18} />
                      <h4>Software Testing & Automation</h4>
                    </div>

                  </div>
                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================================
          PROJECTS SECTION
      ================================= */}

      <section className="section projects-section" id="projects">

        <div className="container">

          <SectionHeading
            label="MY WORK"
            title={<>Featured <span>Projects.</span></>}
            description="Some of the projects I have worked on and developed."
          />

          <div className="project-filters">

            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`filter ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}

          </div>

          <motion.div
            className="projects-grid"
            layout
          >

            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project) => {

                const ProjectIcon = project.icon;

                return (
                  <motion.article
                    className="project-card"
                    key={project.id}
                    layout
                    variants={cardAnimation}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: 20
                    }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35 }}
                  >

                    <div className="project-top">

                      <span className="project-number">
                        {project.number}
                      </span>

                      <div className="project-icon">
                        <ProjectIcon size={23} />
                      </div>

                    </div>

                    <div className="project-status">
                      <span></span>
                      {project.status}
                    </div>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tech-list">

                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}

                    </div>

                  </motion.article>
                );

              })}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>

      {/* ================================
          SKILLS SECTION
      ================================= */}

      <section className="section skills-section" id="skills">

        <div className="container">

          <SectionHeading
            label="MY EXPERTISE"
            title={<>Technical <span>Skills.</span></>}
            description="Technologies and tools I have been learning and working with."
          />

          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >

            {skills.map((skill) => {

              const SkillIcon = skill.icon;

              return (
                <motion.div
                  className="skill-card"
                  key={skill.title}
                  variants={cardAnimation}
                  whileHover={{ y: -8 }}
                >

                  <motion.div
                    className="skill-icon"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <SkillIcon size={27} />
                  </motion.div>

                  <h3>{skill.title}</h3>

                  <div className="skill-tags">

                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}

                  </div>

                </motion.div>
              );

            })}

          </motion.div>

        </div>

      </section>

      {/* ================================
          EDUCATION SECTION
      ================================= */}

      <section className="section education-section" id="education">

        <div className="container">

          <SectionHeading
            label="MY JOURNEY"
            title={<>Educational <span>Background.</span></>}
            description="My academic journey and educational qualifications."
          />

          <div className="timeline">

            <motion.div
              className="timeline-item"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              <div className="timeline-marker"></div>

              <div className="timeline-card">

                <span className="timeline-date">2023 — 2027</span>

                <h3>Bachelor of Technology</h3>

                <h4>
                  S. B. Jain Institute of Technology, Management
                  and Research, Nagpur
                </h4>

                <p>Computer Science Engineering</p>

                <span className="timeline-tag">
                  Currently Pursuing
                </span>

              </div>

            </motion.div>

            <motion.div
              className="timeline-item"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              <div className="timeline-marker"></div>

              <div className="timeline-card">

                <span className="timeline-date">Class XII</span>

                <h3>Higher Secondary Education</h3>

                <h4>Nirala College</h4>

                <p>Higher Secondary Education</p>

              </div>

            </motion.div>

            <motion.div
              className="timeline-item"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              <div className="timeline-marker"></div>

              <div className="timeline-card">

                <span className="timeline-date">Class X</span>

                <h3>Secondary Education</h3>

                <h4>Podar International School</h4>

                <p>Secondary School Education</p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================================
          CERTIFICATES SECTION
      ================================= */}

      <section
        className="section certification-section"
        id="certificates"
      >

        <div className="container">

          <SectionHeading
            label="ACHIEVEMENTS"
            title={<>My <span>Certifications.</span></>}
            description="Courses, training programs and virtual internships."
          />

          <motion.div
            className="timeline certification-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >

            {certificates.map((certificate) => (

              <motion.div
                className="timeline-item certification-timeline-item"
                key={certificate.id}
                variants={cardAnimation}
              >

                <div className="timeline-marker certification-marker">
                  <Award size={17} />
                </div>

                <div className="timeline-card certification-timeline-card">

                  <span className="timeline-date">
                    {certificate.date}
                  </span>

                  <span className="certification-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>

                  <h4>{certificate.organization}</h4>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-view-btn"
                  >
                    View Certificate
                    <ExternalLink size={15} />
                  </a>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* ================================
          CONTACT SECTION
      ================================= */}

      <section className="section contact-section" id="contact">

        <div className="container">

          <motion.div
            className="contact-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's build something <span>together.</span>
            </h2>

            <p>
              I am open to internship opportunities, collaborations
              and connecting with people in technology.
              Feel free to contact me.
            </p>

            <a
              href="mailto:prajwalbagde5789@gmail.com"
              className="primary-btn"
            >
              Send Me a Message
              <Send size={17} />
            </a>

            <div className="contact-details">

              <a href="mailto:prajwalbagde5789@gmail.com">
                <Mail size={18} />
                prajwalbagde5789@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/prajwal-bagde5789/"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={18} />
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/Prajwal5789"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} />
                GitHub Profile
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================================
          FOOTER
      ================================= */}

      <footer className="footer">

        <div className="container footer-content">

          <p>
            © {new Date().getFullYear()} Prajwal Bagde. All rights reserved.
          </p>

          <a href="#home" className="back-top">
            Back to Top ↑
          </a>

        </div>

      </footer>

      {/* ================================
          THEME CUSTOMIZER
      ================================= */}

      <AnimatePresence>

        {themeOpen && (

          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
          >

            <div className="theme-panel-header">

              <div>
                <h3>Customize Theme</h3>
                <p>Choose your dashboard color</p>
              </div>

              <button
                className="theme-close"
                onClick={() => setThemeOpen(false)}
                aria-label="Close theme panel"
              >
                <X size={17} />
              </button>

            </div>

            <div className="theme-options">

              {Object.entries(themes).map(([key, value]) => (

                <button
                  key={key}
                  className={`theme-option ${theme === key ? "active" : ""}`}
                  onClick={() => setTheme(key)}
                  style={{
                    background: `linear-gradient(135deg, ${value.primary}, ${value.secondary})`
                  }}
                  title={value.name}
                  aria-label={`${value.name} theme`}
                />

              ))}

            </div>

            <div className="current-theme">
              <span>Current Theme</span>
              <strong>{currentTheme.name}</strong>
            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* THEME TOGGLE BUTTON */}

      <motion.button
        className="theme-toggle"
        onClick={() => setThemeOpen(!themeOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Customize website theme"
        title="Customize Theme"
      >
        {themeOpen ? <X size={22} /> : <Palette size={22} />}
      </motion.button>

    </div>
  );
}

export default App;
