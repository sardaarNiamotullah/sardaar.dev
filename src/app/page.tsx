import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Image from "next/image";

export default function Home() {
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
      </div>
  
    </main>
  );
}