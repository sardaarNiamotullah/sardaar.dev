import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";
import Tools from "./components/sections/tools";
import Certifications from "./components/sections/certifications";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";

import Image from "next/image";

// Artificial delay function for test purpose
// function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home() {
  // Add delay second delay before rendering
  // await delay(1000);

  return (
    <main className="relative w-full min-h-screen">
      {/* Background image - fixed to viewport */}
      <div className="fixed inset-0 -z-50">
        <Image
          src="/backdrops/backdrop_2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay - fixed to viewport */}
      <div className="fixed inset-0 -z-40 bg-[var(--themeColor_1)]/80" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
