"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
}

interface Project {
  title: string;
  description: string;
  tech: TechStack;
  github: string;
  demo: string;
  live: string;
  image: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Hajj Aday",
      description: "A productivity app with task management, time tracking, and team collaboration features.",
      tech: {
        frontend: ["NextJS", "ReactJS"],
        backend: ["ExpressJS", "NodeJS"],
        database: ["Postgres"],
      },
      github: "https://github.com/yourusername/taskflow",
      demo: "https://youtube.com/watch?v=example1",
      live: "https://example.com",
      image: "/project-snapshots/hajjaday.jpg",
    },
    {
      title: "Instant Chat App",
      description: "An e-commerce platform for sustainable products with carbon footprint calculator.",
      tech: {
        frontend: ["NextJS", "ReactJS"],
        backend: ["ExpressJS", "NodeJS", "Web Socket"],
        database: ["Postgres"],
      },
      github: "https://github.com/yourusername/ecomarket",
      demo: "https://youtube.com/watch?v=example2",
      live: "",
      image: "/project-snapshots/ecomarket.jpg",
    },
    {
      title: "ToDo: Mobile App",
      description: "AI-powered health monitoring system with wearable device integration.",
      tech: {
        frontend: ["Flutter", "Dart"],
        backend: ["ExpressJS", "NodeJS"],
        database: ["Postgres"],
      },
      github: "https://github.com/yourusername/healthtrack",
      demo: "https://youtube.com/watch?v=example3",
      live: "https://example.com",
      image: "/project-snapshots/healthtrack.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const renderActionButtons = (project: Project, isMobile: boolean = false) => (
    <div className={`flex flex-col gap-3 ${isMobile ? 'w-full' : 'w-full'}`}>
      {/* First Row: View Code (Left) and View Demo (Right) */}
      <div className="flex justify-between w-full">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/10 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/20 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>View Code</span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/10 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/20 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FF0000"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z" />
              <path d="M9 16l8-4-8-4z" fill="white" />
            </svg>
            <span>View Demo</span>
          </Link>
        </motion.div>
      </div>

      {/* Second Row: Visit Site (Full Width) */}
      {project.live && (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/10 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/20 transition-all w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              <path d="M8 12a4 4 0 0 1 4-4 3.99 3.99 0 0 1 3.764 2.674 4.002 4.002 0 0 1-5.438 5.438A3.99 3.99 0 0 1 8 12z"/>
              <path d="M12 8a3.99 3.99 0 0 1 2.672 1.036l-5.636 5.636A3.99 3.99 0 0 1 8 12c0-2.206 1.794-4 4-4z"/>
            </svg>
            <span>Visit Site</span>
          </Link>
        </motion.div>
      )}
    </div>
  );

  const renderMobileView = (project: Project, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="w-full bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/50 transition-all"
    >
      {/* Title */}
      <h3 className="text-[var(--textColor_3)] text-2xl font-medium mb-4 text-center">
        {project.title}
      </h3>

      {/* Project Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.8)"
            whileHover={{ scale: 1.1 }}
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </motion.svg>
        </Link>
      </div>

      {/* Description */}
      <p className="text-[var(--textColor_3)] text-sm leading-relaxed text-justify mb-6">
        {project.description}
      </p>

      {/* Action Buttons */}
      {renderActionButtons(project, true)}

      {/* Tech Stack */}
      <div className="space-y-4 mt-6">
        {Object.entries(project.tech).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2 capitalize">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(items as string[]).map((tech, i) => (
                <motion.span
                  key={`${category}-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderDesktopView = (project: Project, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="w-full flex flex-row items-start gap-8 bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/50 transition-all"
    >
      {/* Left Column - Image and Buttons */}
      <div className="w-1/2 flex flex-col gap-6">
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,0.8)"
              whileHover={{ scale: 1.1 }}
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </motion.svg>
          </Link>
        </div>
        {renderActionButtons(project)}
      </div>

      {/* Right Column - Content */}
      <div className="w-1/2 space-y-6">
        <h3 className="text-[var(--textColor_3)] text-2xl font-medium">
          {project.title}
        </h3>
        <p className="text-[var(--textColor_3)] text-sm leading-relaxed text-justify">
          {project.description}
        </p>
        <div className="space-y-4">
          {Object.entries(project.tech).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((tech, i) => (
                  <motion.span
                    key={`${category}-${i}`}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="w-full py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--themeColor_3)] text-lg mb-2 tracking-widest">
            BROWSE MY RECENT
          </p>
          <h2 className="text-[var(--textColor_3)] text-4xl font-light mb-4">
            Projects
          </h2>
          <div className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"></div>
        </motion.div>

        {/* Projects List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            {projects.map((project, index) => renderMobileView(project, index))}
          </div>

          {/* Desktop/Tablet View */}
          <div className="hidden md:block space-y-8">
            {projects.map((project, index) => renderDesktopView(project, index))}
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-3/4 h-px bg-[var(--themeColor_2)] rounded mx-auto mt-16 origin-right"
        />
      </div>
    </section>
  );
}