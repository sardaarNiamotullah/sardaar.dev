"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  containerVariants,
  itemVariants,
  imageVariants,
  Divider,
} from "../utils/animations";

interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
}

interface Project {
  title: string;
  description: string;
  tech: TechStack;
  github?: string;
  demo?: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Hajj Aday",
    description:
      "Hajj Aday is a freelance project I developed for a travel agency in Bangladesh that assists pilgrims throughout their Hajj journey. The app provides a smooth and user-friendly interface. Built with Next.js, it leverages features like optimized image loading, loading screen, and other nextjs features to enhance performance.",
    tech: {
      frontend: ["NextJS", "ReactJS"],
      backend: ["ExpressJS", "NodeJS"],
      database: ["Postgres"],
    },
    github: "",
    demo: "https://youtube.com/watch?v=example1",
    live: "https://example.com",
    image: "/project-snapshots/hajjaday2.png",
  },
  {
    title: "Instant Chat App",
    description:
      "Instant Chat App is one of my favorite pet projects where I explored real-time communication using WebSocket (Socket.IO). It’s a fully functional chat application that supports instant messaging and stores all conversations in a PostgreSQL database via Prisma ORM. The backend is built with ExpressJS and includes user authentication using OAuth2 and PassportJS for secure access. This setup ensures both real-time responsiveness and persistent message history across sessions.",
    tech: {
      frontend: ["NextJS", "ReactJS"],
      backend: ["ExpressJS", "NodeJS", "Socket.IO", "PassportJS", "OAuth2"],
      database: ["Postgres", "Prisma"],
    },
    github: "https://github.com/sardaarNiamotullah/chatApp",
    demo: "https://youtube.com/watch?v=example2",
    live: "",
    image: "/project-snapshots/chatapp.png",
  },
  {
    title: "ToDo: Mobile App",
    description:
      "ToDo is a personal mobile app project built using Flutter and Dart. It helps users manage their daily tasks and assign them to others with ease. The backend is powered by ExpressJS, which handles the API endpoints efficiently, and PostgreSQL is used for storing all task-related data reliably. This setup ensures quick response times and a stable data layer for both solo and collaborative task management.",
    tech: {
      frontend: ["Flutter", "Dart"],
      backend: ["ExpressJS", "NodeJS"],
      database: ["Postgres"],
    },
    github: "https://github.com/sardaarNiamotullah/todo_MobileApp",
    demo: "https://youtube.com/watch?v=example3",
    live: "",
    image: "/project-snapshots/todoapp.png",
  },
];

const renderActionButtons = (project: Project, isMobile: boolean = false) => {
  const hasGithub = !!project.github;
  const hasDemo = !!project.demo;
  const showBothInRow = hasGithub && hasDemo;

  return (
    <motion.div
      variants={containerVariants}
      className={`flex flex-col gap-3 ${isMobile ? "w-full" : "w-full"}`}
    >
      {/* Top Row - GitHub and Demo */}
      {(hasGithub || hasDemo) && (
        <motion.div variants={itemVariants} className="w-full">
          <div className={`flex ${showBothInRow ? 'justify-between' : 'justify-center'} w-full gap-4`}>
            {hasGithub && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className={showBothInRow ? '' : 'w-full'}
              >
                <Link
                  href={project.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${showBothInRow ? '' : 'w-full justify-center'}`}
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
            )}
            
            {hasDemo && (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className={showBothInRow ? '' : 'w-full'}
              >
                <Link
                  href={project.demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${showBothInRow ? '' : 'w-full justify-center'}`}
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
                  <span>View Project</span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Bottom Row - Live Site */}
      {project.live && (
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M8 12a4 4 0 0 1 4-4 3.99 3.99 0 0 1 3.764 2.674 4.002 4.002 0 0 1-5.438 5.438A3.99 3.99 0 0 1 8 12z" />
              <path d="M12 8a3.99 3.99 0 0 1 2.672 1.036l-5.636 5.636A3.99 3.99 0 0 1 8 12c0-2.206 1.794-4 4-4z" />
            </svg>
            <span>Visit Project</span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

const renderMobileView = (project: Project, index: number) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
  >
    <motion.div
      variants={imageVariants}
      className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 mb-6 group"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-115"
        priority={index === 0}
        loading={index > 0 ? "lazy" : undefined}
      />
      <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
      <Link
        href={project.demo!}
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
    </motion.div>
    <motion.h3
      variants={itemVariants}
      className="text-[var(--textColor_3)] text-2xl font-medium mb-4 text-center"
    >
      {project.title}
    </motion.h3>

    <motion.p
      variants={itemVariants}
      className="text-[var(--textColor_3)] text-sm leading-relaxed mb-6"
    >
      {project.description}
    </motion.p>

    <motion.div variants={itemVariants}>
      {renderActionButtons(project, true)}
    </motion.div>

    <motion.div variants={containerVariants} className="space-y-4 mt-6">
      {Object.entries(project.tech).map(([category, items]) => (
        <motion.div key={category} variants={itemVariants}>
          <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2 capitalize">
            {category}
          </h4>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-2"
          >
            {(items as string[]).map((tech, i) => (
              <motion.span
                key={`${category}-${i}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const renderDesktopView = (project: Project, index: number) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className="w-full flex flex-row items-start gap-8 bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
  >
    <motion.div
      variants={containerVariants}
      className="w-1/2 flex flex-col gap-6"
    >
      <motion.div
        variants={imageVariants}
        className="relative w-full h-100 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 group"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-115"
          priority={index === 0}
          loading={index > 0 ? "lazy" : undefined}
        />
        <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>

        <Link
          href={project.demo!}
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
      </motion.div>
      <motion.div variants={itemVariants}>
        {renderActionButtons(project)}
      </motion.div>
    </motion.div>

    <motion.div variants={containerVariants} className="w-1/2 space-y-6">
      <motion.div variants={itemVariants}>
        <h3 className="text-[var(--textColor_3)] text-2xl font-medium">
          {project.title}
        </h3>
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-[var(--textColor_3)] text-sm leading-relaxed"
      >
        {project.description}
      </motion.p>
      <motion.div variants={containerVariants} className="space-y-4">
        {Object.entries(project.tech).map(([category, items]) => (
          <motion.div key={category} variants={itemVariants}>
            <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2 capitalize">
              {category}
            </h4>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {(items as string[]).map((tech, i) => (
                <motion.span
                  key={`${category}-${i}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-[var(--themeColor_3)] text-lg mb-2 tracking-widest uppercase"
          >
            Browse my recent
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="md:hidden space-y-8">
            {projects.map((project, index) => renderMobileView(project, index))}
          </div>
          <div className="hidden md:block space-y-8">
            {projects.map((project, index) =>
              renderDesktopView(project, index)
            )}
          </div>
        </div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}