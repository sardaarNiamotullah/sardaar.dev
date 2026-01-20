"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  Divider,
} from "../utils/animations";

interface Certification {
  title: string;
  organization: string;
  year: string;
  certificateUrl: string;
  description: string;
  image: string;
  highlights: string[];
}

const certifications: Certification[] = [
  {
    title: "The Complete Flutter Development Bootcamp with Dart",
    organization: "Udemy",
    year: "2024",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-cb30d9b9-8067-4d7b-adce-22f444b142ac/",
    description:
      "Learned how to build beautiful and responsive cross-platform mobile apps using Flutter and Dart. Worked on various real-world projects with state management.",
    image: "/certifications/flutterbootcamp.jpg",
    highlights: ["Flutter", "Dart", "State Management", "Mobile UI"],
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    organization: "Udemy",
    year: "2024",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-b1f5c083-6918-40cf-a1c3-2102da7af9f2/",
    description:
      "Completed hands-on training in building modern backend applications using Node.js, Express, and MongoDB. Covered key concepts like REST API design, authentication, and deployment.",
    image: "/certifications/nodebackend.jpg",
    highlights: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    organization: "Udemy",
    year: "2024",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-3b501e83-7a56-4be7-877f-49a547f3a0cd/",
    description:
      "Gained practical experience with modern React development, including Next.js, Redux, and TypeScript. Focused on building scalable and maintainable frontend applications.",
    image: "/certifications/ultimatereact.jpg",
    highlights: ["React", "Next.js", "Redux", "TypeScript", "React Hooks"],
  },
];

const renderActionButton = (certificateUrl: string) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/20 transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
      <span>View Certificate</span>
    </Link>
  </motion.div>
);

const renderMobileView = (certification: Certification, index: number) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    // className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
    className="w-full p-8 transition-all"
  >
    <motion.h3
      variants={itemVariants}
      className="text-[var(--textColor_3)] text-2xl font-medium mb-4 text-center"
    >
      {certification.title}
    </motion.h3>

    <motion.div
      variants={itemVariants}
      className="flex justify-center gap-4 text-[var(--textColor_2)] text-sm mb-3"
    >
      <span>{certification.organization}</span>
      <span>•</span>
      <span>{certification.year}</span>
    </motion.div>

    <motion.div
      variants={imageVariants}
      className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 mb-4 group"
    >
      <Image
        src={certification.image}
        alt={`${certification.title} certificate`}
        fill
        className="object-cover object-bottom transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
      <Link
        href={certification.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      ></Link>
    </motion.div>

    <motion.div variants={itemVariants} className="flex justify-center mb-5">
      {renderActionButton(certification.certificateUrl)}
    </motion.div>

    <motion.p
      variants={itemVariants}
      className="text-[var(--textColor_3)] text-sm leading-relaxed mb-6"
    >
      {certification.description}
    </motion.p>

    <motion.div variants={itemVariants} className="mb-6">
      <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2.5">
        Highlights
      </h4>
      <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
        {certification.highlights.map((skill, i) => (
          <motion.span
            key={`highlight-${i}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_1)] text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:border-[var(--themeColor_2)]/50 transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
);

const renderDesktopView = (certification: Certification, index: number) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    // className="w-full flex flex-row items-start gap-8 bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
    className="w-full flex flex-row items-start gap-8 p-8 transition-all"
  >
    <motion.div
      variants={containerVariants}
      className="w-1/2 flex flex-col gap-6"
    >
      <motion.div
        variants={imageVariants}
        className="relative w-full h-64 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 group"
      >
        <Image
          src={certification.image}
          alt={`${certification.title} certificate`}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
        <Link
          href={certification.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        ></Link>
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center">
        {renderActionButton(certification.certificateUrl)}
      </motion.div>
    </motion.div>

    <motion.div variants={containerVariants} className="w-1/2 space-y-6">
      <motion.div variants={itemVariants}>
        <h3 className="text-[var(--textColor_3)] text-2xl font-medium">
          {certification.title}
        </h3>
        <div className="flex gap-4 text-[var(--textColor_2)] text-sm mt-2">
          <span>{certification.organization}</span>
          <span>•</span>
          <span>{certification.year}</span>
        </div>
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-[var(--textColor_3)] text-sm leading-relaxed"
      >
        {certification.description}
      </motion.p>
      <motion.div variants={itemVariants}>
        <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2.5">
          Highlights
        </h4>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-2"
        >
          {certification.highlights.map((skill, i) => (
            <motion.span
              key={`highlight-${i}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              // className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
              className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_1)] text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:border-[var(--themeColor_2)]/50 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-24">
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
            My Learning Journey
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Certifications
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="md:hidden space-y-8">
            {certifications.map((certification, index) =>
              renderMobileView(certification, index),
            )}
          </div>
          <div className="hidden md:block space-y-8">
            {certifications.map((certification, index) =>
              renderDesktopView(certification, index),
            )}
          </div>
        </div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
