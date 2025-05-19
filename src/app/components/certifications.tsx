// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// interface Certification {
//   title: string;
//   organization: string;
//   year: string;
//   certificateUrl: string;
//   description: string;
//   image: string;
// }

// export default function Certifications() {
//   const certifications: Certification[] = [
//     {
//       title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
//       organization: "Udemy",
//       year: "2024",
//       certificateUrl:
//         "https://www.udemy.com/certificate/UC-b1f5c083-6918-40cf-a1c3-2102da7af9f2/",
//       description:
//         "Mastered advanced React patterns, state management with Redux, and modern frontend architecture.",
//       image: "/certifications/nodebackend.jpg",
//     },
//     {
//       title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
//       organization: "Udemy",
//       year: "2024",
//       certificateUrl:
//         "https://www.udemy.com/certificate/UC-3b501e83-7a56-4be7-877f-49a547f3a0cd/",
//       description:
//         "Comprehensive training in building scalable backend services with Node.js, Express, and MongoDB.",
//       image: "/certifications/ultimatereact.jpg",
//     },
//     {
//       title: "The Complete Flutter Development Bootcamp with Dart",
//       organization: "Udemy",
//       year: "2024",
//       certificateUrl:
//         "https://www.udemy.com/certificate/UC-cb30d9b9-8067-4d7b-adce-22f444b142ac/",
//       description:
//         "Learned cross-platform mobile development with Flutter framework and Dart programming language.",
//       image: "/certifications/flutterbootcamp.jpg",
//     },
//     {
//       title: "Master Spring Boot 3 & Spring Framework 6 with Java",
//       organization: "Udemy",
//       year: "2024",
//       certificateUrl:
//         "https://www.udemy.com/certificate/UC-49b6390e-2183-4d49-96f9-3116f4669dcb/",
//       description:
//         "Learned cross-platform mobile development with Flutter framework and Dart programming language.",
//       image: "/certifications/springboot.jpg",
//     },
//     {
//       title: "The Complete 2023 Web Development Bootcamp",
//       organization: "Udemy",
//       year: "2023",
//       certificateUrl:
//         "https://www.udemy.com/certificate/UC-ad942bcb-58c4-4fca-a7f3-6603e965a68f/",
//       description:
//         "Fundamental to advanced JavaScript concepts including ES6+ features and async programming.",
//       image: "/certifications/thebootcamp_2023.jpg",
//     },
//   ];

//   const renderActionButton = (certificateUrl: string) => (
//     <Link
//       href={certificateUrl}
//       target="_blank"
//       className="flex items-center gap-2 text-[var(--textColor_2)] hover:text-[var(--textColor_3)] transition-colors"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         className="text-[var(--themeColor_2)] hover:text-[var(--themeColor_3)]"
//       >
//         <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
//       </svg>
//       <span>View Certificate</span>
//     </Link>
//   );

//   const renderMobileView = (certification: Certification, index: number) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="w-full flex flex-col items-center gap-6 p-6 rounded-xl bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/50 transition-all"
//     >
//       {/* Title - Centered */}
//       <h3 className="text-[var(--textColor_2)] text-2xl font-bold text-center w-full">
//         {certification.title}
//       </h3>

//       {/* Organization and Year */}
//       <div className="flex gap-4 text-[var(--textColor_3)]">
//         <span>{certification.organization}</span>
//         <span>•</span>
//         <span>{certification.year}</span>
//       </div>

//       {/* Certificate Image */}
//       <div className="w-full h-48 relative rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30">
//         <Image
//           src={certification.image}
//           alt={`${certification.title} certificate`}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
//         <Link
//           href={certification.certificateUrl}
//           target="_blank"
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="40"
//             height="40"
//             viewBox="0 0 24 24"
//             fill="rgba(255,255,255,0.8)"
//             className="hover:scale-110 transition-transform"
//           >
//             <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
//           </svg>
//         </Link>
//       </div>

//       {/* Action Button */}
//       <div className="w-full flex justify-center">
//         {renderActionButton(certification.certificateUrl)}
//       </div>

//       {/* Description */}
//       <p className="text-[var(--textColor_3)] text-justify">
//         {certification.description}
//       </p>
//     </motion.div>
//   );

//   const renderDesktopView = (certification: Certification, index: number) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="w-full flex flex-row items-start gap-8 p-6 rounded-xl bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/50 transition-all"
//     >
//       {/* Left Column - Image */}
//       <div className="w-1/2 flex flex-col gap-4">
//         {/* Certificate Image */}
//         <div className="w-full h-64 relative rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30">
//           <Image
//             src={certification.image}
//             alt={`${certification.title} certificate`}
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
//           <Link
//             href={certification.certificateUrl}
//             target="_blank"
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="48"
//               height="48"
//               viewBox="0 0 24 24"
//               fill="rgba(255,255,255,0.8)"
//               className="hover:scale-110 transition-transform"
//             >
//               <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
//             </svg>
//           </Link>
//         </div>

//         {/* Action Button - Below Image */}
//         <div className="w-full flex justify-center">
//           {renderActionButton(certification.certificateUrl)}
//         </div>
//       </div>

//       {/* Right Column - Content */}
//       <div className="w-1/2 space-y-4">
//         <div>
//           <h3 className="text-[var(--textColor_2)] text-2xl font-bold">
//             {certification.title}
//           </h3>
//           <div className="flex gap-4 text-[var(--textColor_3)] mt-2">
//             <span>{certification.organization}</span>
//             <span>•</span>
//             <span>{certification.year}</span>
//           </div>
//         </div>

//         <p className="text-[var(--textColor_3)] text-justify">
//           {certification.description}
//         </p>
//       </div>
//     </motion.div>
//   );

//   return (
//     <section id="certifications" className="w-full py-16">
//       <div className="w-full max-w-3xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-8">
//           <p className="text-[var(--themeColor_3)] text-lg mb-2">
//             My Learning Journey
//           </p>
//           <h2 className="text-[var(--textColor_2)] text-4xl font-bold mb-4">
//             Certifications
//           </h2>
//           <div className="w-1/4 h-1 bg-[var(--themeColor_2)] rounded ml-8"></div>
//         </div>

//         {/* Certifications List */}
//         <div className="space-y-16 px-8">
//           {/* Mobile View */}
//           <div className="md:hidden space-y-16">
//             {certifications.map((certification, index) =>
//               renderMobileView(certification, index)
//             )}
//           </div>

//           {/* Desktop/Tablet View */}
//           <div className="hidden md:block space-y-16">
//             {certifications.map((certification, index) =>
//               renderDesktopView(certification, index)
//             )}
//           </div>
//         </div>

//         <div className="flex justify-end mt-8">
//           <div className="w-1/4 h-1 bg-[var(--themeColor_2)] rounded mr-8"></div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  organization: string;
  year: string;
  certificateUrl: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      organization: "Udemy",
      year: "2024",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-b1f5c083-6918-40cf-a1c3-2102da7af9f2/",
      description:
        "Comprehensive training in building scalable backend services with Node.js, Express, and MongoDB.",
      image: "/certifications/nodebackend.jpg",
      highlights: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
    },
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      organization: "Udemy",
      year: "2024",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-3b501e83-7a56-4be7-877f-49a547f3a0cd/",
      description:
        "Mastered advanced React patterns, state management with Redux, and modern frontend architecture.",
      image: "/certifications/ultimatereact.jpg",
      highlights: ["React", "Next.js", "Redux", "TypeScript", "React Hooks"],
    },
    {
      title: "The Complete Flutter Development Bootcamp with Dart",
      organization: "Udemy",
      year: "2024",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-cb30d9b9-8067-4d7b-adce-22f444b142ac/",
      description:
        "Learned cross-platform mobile development with Flutter framework and Dart programming language.",
      image: "/certifications/flutterbootcamp.jpg",
      highlights: ["Flutter", "Dart", "State Management", "Mobile UI", "Firebase"],
    },
    {
      title: "Master Spring Boot 3 & Spring Framework 6 with Java",
      organization: "Udemy",
      year: "2024",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-49b6390e-2183-4d49-96f9-3116f4669dcb/",
      description:
        "Gained expertise in building robust backend applications using Spring Boot and Spring Framework with Java.",
      image: "/certifications/springboot.jpg",
      highlights: ["Spring Boot", "Java", "Spring MVC", "Hibernate", "Microservices"],
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      organization: "Udemy",
      year: "2023",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-ad942bcb-58c4-4fca-a7f3-6603e965a68f/",
      description:
        "Fundamental to advanced JavaScript concepts including ES6+ features and async programming.",
      image: "/certifications/thebootcamp_2023.jpg",
      highlights: ["JavaScript", "ES6", "HTML", "CSS", "Async Programming"],
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

  const renderActionButton = (certificateUrl: string) => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={certificateUrl}
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
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
        <span>View Certificate</span>
      </Link>
    </motion.div>
  );

  const renderMobileView = (certification: Certification, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="w-full bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/50 transition-all"
    >
      {/* Title */}
      <h3 className="text-[var(--textColor_3)] text-2xl font-medium mb-4 text-center">
        {certification.title}
      </h3>

      {/* Organization and Year */}
      <div className="flex justify-center gap-4 text-[var(--textColor_3)] text-sm mb-6">
        <span>{certification.organization}</span>
        <span>•</span>
        <span>{certification.year}</span>
      </div>

      {/* Certificate Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 mb-6">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
        <Link
          href={certification.certificateUrl}
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
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </motion.svg>
        </Link>
      </div>

      {/* Description */}
      <p className="text-[var(--textColor_3)] text-sm leading-relaxed text-justify mb-6">
        {certification.description}
      </p>

      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2">
          Highlights
        </h4>
        <div className="flex flex-wrap gap-2">
          {certification.highlights.map((skill, i) => (
            <motion.span
              key={`highlight-${i}`}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        {renderActionButton(certification.certificateUrl)}
      </div>
    </motion.div>
  );

  const renderDesktopView = (certification: Certification, index: number) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="w-full flex flex-row items-start gap-8 bg-[var(--themeColor_1)]/70 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/50 transition-all"
    >
      {/* Left Column - Image and Button */}
      <div className="w-1/2 flex flex-col gap-6">
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30">
          <Image
            src={certification.image}
            alt={`${certification.title} certificate`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
          <Link
            href={certification.certificateUrl}
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
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </motion.svg>
          </Link>
        </div>
        <div className="flex justify-center">
          {renderActionButton(certification.certificateUrl)}
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="w-1/2 space-y-6">
        <div>
          <h3 className="text-[var(--textColor_3)] text-2xl font-medium">
            {certification.title}
          </h3>
          <div className="flex gap-4 text-[var(--textColor_3)] text-sm mt-2">
            <span>{certification.organization}</span>
            <span>•</span>
            <span>{certification.year}</span>
          </div>
        </div>
        <p className="text-[var(--textColor_3)] text-sm leading-relaxed text-justify">
          {certification.description}
        </p>
        <div>
          <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2">
            Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.highlights.map((skill, i) => (
              <motion.span
                key={`highlight-${i}`}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="w-full py-24">
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
            MY LEARNING JOURNEY
          </p>
          <h2 className="text-[var(--textColor_3)] text-4xl font-light mb-4">
            Certifications
          </h2>
          <div className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"></div>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            {certifications.map((certification, index) =>
              renderMobileView(certification, index)
            )}
          </div>

          {/* Desktop/Tablet View */}
          <div className="hiddenmehidden md:block space-y-8">
            {certifications.map((certification, index) =>
              renderDesktopView(certification, index)
            )}
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