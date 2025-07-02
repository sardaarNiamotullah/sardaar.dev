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
  database?: string[];
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
    demo: "",
    live: "https://www.hajjaday.com/",
    image: "/project-snapshots/hajjaday2.png",
  },
  {
    title: "AI ChatBot",
    description:
      "A full-stack AI-powered chatbot platform that serves as a virtual customer service representative. Built with Ollama-Llama3.2 for intelligent responses, it features secure Google OAuth2.0 authentication, real-time chat interface, and persistent conversation storage.",
    tech: {
      frontend: ["NextJS", "ReactJS"],
      backend: [
        "Ollama-Llama3.2",
        "ExpressJS",
        "NodeJS",
        "PassportJS",
        "OAuth2",
      ],
      database: ["Postgres", "Prisma"],
    },
    github: "https://github.com/sardaarNiamotullah/ai_chatbot",
    demo: "https://youtu.be/aXXc6IYGcr4",
    live: "",
    image: "/project-snapshots/chatbot.png",
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
    demo: "https://youtu.be/S1g5dhajORE",
    live: "",
    image: "/project-snapshots/chatapp.png",
  },
  {
    title: "ToDo: Mobile App",
    description:
      "ToDo is a personal mobile app project built using Flutter and Dart. It helps users manage their daily tasks and assign them to others with ease. The backend is powered by ExpressJS, which handles the API endpoints efficiently, and PostgreSQL is used for storing all task-related data reliably. This setup ensures quick response times and a stable data layer for both solo and collaborative task management.",
    tech: {
      frontend: ["Flutter", "Dart", "Material UI"],
      backend: ["ExpressJS", "NodeJS"],
      database: ["Postgres"],
    },
    github: "https://github.com/sardaarNiamotullah/todo_MobileApp",
    demo: "https://youtu.be/clWtqwgM5TE",
    live: "",
    image: "/project-snapshots/todoapp.png",
  },
  {
    title: "AItinerary",
    description:
      "AItinerary is an AI-powered travel itinerary builder that generates personalized, weather-aware day-wise travel plans. Users provide a city and a travel date, and the app uses real-time weather data and the Groq API to generate intelligent itineraries. The project showcases full-stack development with Django REST API and a React frontend, emphasizing clean design and effective prompt engineering.",
    tech: {
      frontend: ["Vite", "ReactJS", "TailwindCSS", "Motion", "Axios"],
      backend: ["Django", "Groq API", "Weather API"],
      // database: [],
    },
    github: "https://github.com/sardaarNiamotullah/AItinerary",
    demo: "https://www.youtube.com/watch?v=QWFeunya20k", // Add a YouTube link here if available
    live: "https://travel-aitinerary.vercel.app/", // Add the deployed site link here if available
    image: "/project-snapshots/aitinerary.png", // Replace with your actual image path
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
          <div
            className={`flex ${
              showBothInRow ? "justify-between" : "justify-center"
            } w-full gap-4`}
          >
            {hasGithub && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={showBothInRow ? "" : "w-full"}
              >
                <Link
                  href={project.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${
                    showBothInRow ? "" : "w-full justify-center"
                  }`}
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
                className={showBothInRow ? "" : "w-full"}
              >
                <Link
                  href={project.demo!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${
                    showBothInRow ? "" : "w-full justify-center"
                  }`}
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
              fill="#7b77f7"
              width="24"
              height="24"
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M38.251 9.482c-40.067 11.274-39.759 66.555.429 77.023 3.157.822 7.446 1.495 9.53 1.495H52V77.2c0-11.691-.582-13.2-5.095-13.2-2.414 0-2.735-.417-3.076-4l-.382-4H52v-8H36v-4c0-3.376.322-4 2.066-4C42.505 40 44 38.228 44 32.965V28h4.566c3.772 0 7.455-1.017 9.276-2.561.188-.16.896-1.9 1.573-3.869l1.23-3.578 4.73 3.133C73.436 26.464 80 37.398 80 45.485c0 3.16 6.71 9.433 7.603 7.108 1.947-5.076-2.032-20.27-7.305-27.892C71.647 12.199 52.817 5.383 38.251 9.482m-1.382 8.423c-5.683 2.223-10.863 6.088-14.432 10.767l-2.698 3.537 4.13 4.131L28 40.471v-3.036C28 33.655 29.583 32 33.2 32c2.645 0 2.8-.245 2.8-4.429C36 21.339 37.693 20 45.571 20 51.333 20 52 19.793 52 18c0-2.661-8.436-2.714-15.131-.095m-20.46 24.47c-1.154 3.01.235 14.032 2.381 18.883 3.638 8.224 13.362 16.084 22.46 18.154 4.286.975 4.177-6.578-.12-8.358C37.959 69.74 36 66.353 36 62.183c0-3.78-18.546-22.531-19.591-19.808M60 60.027v19.214l4.555-3.732c2.505-2.053 4.704-3.57 4.885-3.371.182.199 2.013 4.253 4.069 9.01l3.737 8.647 3.627-1.505c1.995-.828 3.939-1.693 4.32-1.922.381-.228-1.081-4.275-3.25-8.991C79.774 72.66 78 68.621 78 68.4c0-.22 2.354-.4 5.23-.4h5.23l-9.48-9.572c-5.214-5.265-11.618-11.382-14.23-13.593L60 40.814v19.213"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
            <span>Visit Site</span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

const renderMobileView = (project: Project, index: number) => {
  // Determine the link to use: demo -> live -> github
  const link = project.demo || project.live || project.github || "#";
  const isLinkDisabled = link === "#";

  return (
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
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 flex items-center justify-center ${
            isLinkDisabled ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.8)"
            whileHover={{ scale: isLinkDisabled ? 1 : 1.1 }}
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
};

const renderDesktopView = (project: Project, index: number) => {
  // Determine the link to use: demo -> live -> github
  const link = project.demo || project.live || project.github || "#";
  const isLinkDisabled = link === "#";

  return (
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
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 flex items-center justify-center ${
              isLinkDisabled ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,0.8)"
              whileHover={{ scale: isLinkDisabled ? 1 : 1.1 }}
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
};

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
