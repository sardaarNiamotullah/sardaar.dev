"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  quoteVariants,
  Divider,
} from "../../utils/animations";

export default function About() {
  return (
    <section id="about" className="w-full py-24">
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
            className="text-[var(--themeColor_3)] text-lg mb-2 tracking-widest"
          >
            GET TO KNOW MORE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          <div className="relative bg-[var(--themeColor_1)]/10 backdrop-blur-sm p-8 rounded-lg border border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/30">
            <motion.p
              variants={quoteVariants}
              className="text-[var(--textColor_2)] text-center text-xl italic mb-8 font-light"
            >
              &ldquo;A passionate coder who also loves to run.&rdquo;
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="text-[var(--textColor_3)] space-y-6 leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                I&apos;m a developer who finds joy where tech meets human
                connection. For me, coding isn&apos;t just logic—it&apos;s a
                creative craft, much like my morning trail runs. Fresh air
                clears my mind and sparks ideas in ways a screen never could.
              </motion.p>

              <motion.p variants={itemVariants}>
                When I&apos;m not building or debugging, I&apos;m usually deep
                in conversation with friends—usually about tech, whether
                it&apos;s a new framework, AI trends, or tools we&apos;re
                geeking out over. Those chats often turn into impromptu
                brainstorming sessions.
              </motion.p>

              <motion.p variants={itemVariants}>
                I&apos;m excited by how technology can solve real problems and
                bring people together. I love digging into tough challenges, but
                I&apos;m just as driven by collaboration, curiosity, and
                building things that matter.
              </motion.p>

              <motion.p variants={itemVariants}>
                At the end of the day, great software isn&apos;t just clean
                code—it&apos;s thoughtful, adaptable, and human. That&apos;s
                where I feel most at home.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
