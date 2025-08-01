"use client";

import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
  cardVariants,
  Divider,
} from "../utils/animations";

export default function Experience() {
  const getDurationInMonths = (startDate: string): string => {
    const start = new Date(startDate);
    const now = new Date();

    const yearDiff = now.getFullYear() - start.getFullYear();
    const monthDiff = now.getMonth() - start.getMonth();

    const totalMonths = yearDiff * 12 + monthDiff + 1; // Include both months

    return totalMonths <= 1 ? "1 mo" : `${totalMonths} mos`;
  };

  const durationText = getDurationInMonths("2025-07-31");

  return (
    <section id="experience" className="w-full py-24">
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
            Professional Journey
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative"
        >
          <motion.div
            variants={containerVariants}
            className="relative bg-[var(--themeColor_1)]/10 backdrop-blur-sm p-8 rounded-lg border border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/30"
          >
            {/* Job Title and Company */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-[var(--textColor_3)] text-2xl font-light mb-2">
                Intern Mobile App Developer
              </h3>
              <p className="text-base text-[var(--textColor_2)] flex items-center gap-1">
                InShirah Tech
                <span className="text-[var(--textColor_2)]">· Full Time</span>
              </p>
            </motion.div>

            {/* Duration */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="text-[var(--themeColor_2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--themeColor_3)] text-xs uppercase tracking-wider">
                    Duration
                  </p>
                  <p className="text-[var(--textColor_3)]">
                    Jul 2025 - Present · <span className="text-[var(--textColor_2)]">{durationText}</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div variants={containerVariants} className="mt-6">
              <motion.h4
                variants={itemVariants}
                className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2 capitalize"
              >
                Key Responsibilities
              </motion.h4>
              <motion.ul
                variants={itemVariants}
                className="list-disc list-inside text-[var(--themeColor_3)] text-sm leading-relaxed space-y-2"
              >
                <li>
                  Developing cross-platform mobile and web applications using
                  Flutter.
                </li>
                <li>
                  Integrating remote databases such as Firebase and Supabase for
                  real-time data, authentication, and storage.
                </li>
                <li>Working with REST APIs to enable backend communication.</li>
                <li>
                  Implementing Google Maps and other location-based features.
                </li>
                <li>
                  Translating Figma designs into pixel-perfect, responsive UIs
                  using Flutter.
                </li>
                <li>
                  Collaborating with the team to deliver clean, maintainable
                  code.
                </li>
                <li>
                  Exploring and working on various aspects of mobile
                  development, and many more.
                </li>
              </motion.ul>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={containerVariants} className="space-y-4 mt-6">
              <motion.div variants={itemVariants}>
                <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-3 capitalize">
                  Tools & Technologies
                </h4>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {[
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "Supabase",
                    "REST API",
                    "Git",
                    "Figma to Code",
                    "Basic Mobile Development Essentials",
                  ].map((tech, i) => (
                    <motion.span
                      key={`tech-${i}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
