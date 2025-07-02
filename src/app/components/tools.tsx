"use client";

import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
  iconVariants,
  Divider,
} from "../utils/animations";

const skillCategories = [
  {
    title: "Languages",
    confident: ["TypeScript", "Dart", "Python", "C++"],
    familiar: ["Java"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Frontend",
    confident: ["Flutter", "ReactJS", "NextJS", "TailwindCSS", "SASS", "Vite"],
    familiar: ["Bootstrap", "React Native"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
      </svg>
    ),
  },
  {
    title: "Backend",
    confident: ["ExpressJS", "NodeJS", "Django"],
    familiar: ["Spring Boot"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
          clipRule="evenodd"
        />
        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path
          fillRule="evenodd"
          d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Databases",
    confident: ["PostgreSQL", "MySQL", "Supabase"],
    familiar: ["MongoDB"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.366C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.122.009-.245.025-.366a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
        <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.366 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.122.009-.245.025-.366a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
        <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.366 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.122.009-.245.025-.366a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
      </svg>
    ),
  },
  {
    title: "Essentials",
    confident: ["Git", "GitHub", "Terminal", "Postman"],
    familiar: ["Docker"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
          clipRule="evenodd"
        />
        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path
          fillRule="evenodd"
          d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Tools = () => {
  return (
    <section id="tools" className="w-full py-24">
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
            Technologies I Work With
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            My Toolbox
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
            >
              <motion.div
                variants={containerVariants}
                className="flex items-center gap-4 mb-8"
              >
                <motion.div
                  variants={iconVariants}
                  className="text-[var(--themeColor_2)] p-3 bg-[var(--themeColor_1)] rounded-lg border border-[var(--themeColor_2)]/20"
                >
                  {category.icon}
                </motion.div>
                <motion.h3
                  variants={itemVariants}
                  className="text-[var(--textColor_3)] text-2xl font-medium"
                >
                  {category.title}
                </motion.h3>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Confident Skills */}
                <motion.div variants={itemVariants}>
                  <motion.div
                    variants={containerVariants}
                    className="flex items-center gap-3 mb-4"
                  >
                    <motion.div
                      variants={itemVariants}
                      className="w-3 h-3 rounded-full bg-green-500"
                    ></motion.div>
                    <motion.h4
                      variants={itemVariants}
                      className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider"
                    >
                      Experienced in
                    </motion.h4>
                  </motion.div>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-3"
                  >
                    {category.confident.map((skill, skillIndex) => (
                      <motion.span
                        key={`confident-${skillIndex}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Familiar Skills */}
                {category.familiar.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <motion.div
                      variants={containerVariants}
                      className="flex items-center gap-3 mb-4"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="w-3 h-3 rounded-full bg-yellow-500"
                      ></motion.div>
                      <motion.h4
                        variants={itemVariants}
                        className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider"
                      >
                        Hands-on exposure to
                      </motion.h4>
                    </motion.div>
                    <motion.div
                      variants={containerVariants}
                      className="flex flex-wrap gap-3"
                    >
                      {category.familiar.map((skill, skillIndex) => (
                        <motion.span
                          key={`familiar-${skillIndex}`}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_1)] text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:border-[var(--themeColor_2)]/50 transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
};

export default Tools;
