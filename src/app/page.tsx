import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Tools from "./components/tools";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
