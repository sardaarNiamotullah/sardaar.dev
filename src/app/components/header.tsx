"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-16 py-10 lg:px-20 lg:py-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Website Name - Left */}
          <Link href="/" className="text-[var(--textColor_2)] font-bold text-xl">
            <span className="text-[var(--textColor_3)]">sardaar</span>.dev
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="border-b border-[var(--textColor_2)] hover:border-transparent text-[var(--textColor_3)] hover:text-[var(--textColor_2)] px-1 py-1 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Always visible */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-[var(--textColor_3)] hover:text-[var(--textColor_2)] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Circular Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 overflow-hidden">
          {/* Circular overlay */}
          <div 
            className="absolute bg-[var(--themeColor_1)] rounded-full animate-circular-overlay"
            style={{
              top: buttonRef.current ? buttonRef.current.offsetTop + buttonRef.current.offsetHeight/2 : '50%',
              left: buttonRef.current ? buttonRef.current.offsetLeft + buttonRef.current.offsetWidth/2 : '50%',
              transform: 'translate(-50%, -50%) scale(0)',
            }}
          ></div>
          
          {/* Menu content - only visible after animation */}
          <div className="relative z-50 h-full w-full flex flex-col items-center justify-center opacity-0 animate-fade-in-delay">
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="border-b border-[var(--textColor_2)] px-4 py-1 text-[var(--textColor_3)] hover:text-[var(--textColor_3)] text-2xl font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}