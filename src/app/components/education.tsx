"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Education() {
  return (
    <section id="education" className="w-full py-24">
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
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-[var(--textColor_3)] text-4xl font-light mb-4">
            Education
          </h2>
          <div className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"></div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-[var(--themeColor_1)] p-8 rounded-lg border border-[var(--themeColor_2)]/20">
            {/* Main Degree Info */}
            <div className="mb-6">
              <h3 className="text-[var(--textColor_3)] text-2xl font-light mb-2">
                B.Sc. in Computer Science & Engineering
              </h3>
              <Link
                href="https://www.bracu.ac.bd/"
                target="_blank"
                className="text-[var(--themeColor_2)] hover:text-[var(--textColor_3)] transition-colors text-sm flex items-center gap-1"
              >
                <span>BRAC University</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 11l-3 3v-2h-4v-2h4v-2l3 3zm5.292-8.292l-11 11c-.63.629-.927 1.473-.927 2.292v6c0 1.104.896 2 2 2h6c.819 0 1.663-.297 2.292-.927l11-11c1.534-1.534 1.534-4.066 0-5.6-1.534-1.534-4.066-1.534-5.6 0zm-1.4 4.2l2.6 2.6-9.874 9.874c-.097.097-.225.146-.353.146h-4.586v-4.586c0-.128.049-.256.146-.353l9.874-9.874 2.6 2.6zm-4.2-4.2l1.4 1.4-2.6 2.6-1.4-1.4 2.6-2.6z" />
                </svg>
              </Link>
            </div>

            {/* CGPA and Session - Separate Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-[var(--themeColor_2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--themeColor_3)] text-xs uppercase tracking-wider">
                    CGPA
                  </p>
                  <p className="text-[var(--textColor_3)]">3.26</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
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
                    Session
                  </p>
                  <p className="text-[var(--textColor_3)]">
                    Summer &apos;19 - Fall &apos;24
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-[var(--themeColor_3)] text-sm leading-relaxed space-y-3">
              <p>
                Comprehensive curriculum covering Algorithms, Computer Networks,{" "}
                <span className="text-[var(--themeColor_2)]">
                  Software Engineering,
                </span>
                &nbsp;Artificial Intelligence,&nbsp;
                <span className="text-[var(--themeColor_2)]">
                  Database Management System,
                </span>
                &nbsp;Compiler Design, Computer Graphics, and many more with
                hands-on project experience.
              </p>
              <p>
                Active participation in research initiatives and complementing
                academic coursework.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom divider */}
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
