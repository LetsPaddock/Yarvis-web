"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Roadmap from "./components/Roadmap";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="h-screen overflow-hidden bg-adaptive">
      <div className="h-full flex flex-col">
        {/* Header */}
        <header className="flex-shrink-0 flex justify-between items-center p-8 relative z-20 header-responsive">
          <div className="relative z-30">
            <h1
              className="text-6xl md:text-8xl font-light drop-shadow-2xl text-white dark:text-white relative z-30"
              style={{ color: "#747677" }}
            >
              <span className="dark:!text-white">Yarvis</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-2 font-light relative z-30">
              A new screensaver from{" "}
              <a
                href="https://x.com/LetsPaddock"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-bold transition-all duration-200 hover:text-gray-800 dark:hover:text-gray-100"
              >
                Paddock
              </a>
            </p>
          </div>
        </header>

        {/* Hero Section with Overlapping Layout */}
        <section className="flex-1 relative px-8 py-8 min-h-0">
          {/* Desktop Layout - Overlapping */}
          <div className="hidden lg:block">
            {/* Mockup Image - Center Left */}
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-3/5">
              {/* Light mode mockup */}
              <Image
                src="/Light-mode-mockup.webp"
                alt="Yarvis Screensaver Mockup"
                width={2400}
                height={1600}
                className="w-full h-auto max-h-[70vh] min-w-[700px] min-h-[480px] object-contain drop-shadow-2xl dark:hidden mockup-image-responsive"
                priority
              />
              {/* Dark mode mockup */}
              <Image
                src="/Dark-mode-mockup.webp"
                alt="Yarvis Screensaver Mockup"
                width={2400}
                height={1600}
                className="w-full h-auto max-h-[70vh] min-w-[700px] min-h-[480px] object-contain drop-shadow-2xl hidden dark:block"
                priority
              />
            </div>

            {/* Content - Center Right with Overlap */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-1/2">
              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
                  Experience the Future of
                  <span className="block text-gray-600 dark:text-gray-300">
                    macOS Screensavers
                  </span>
                </h2>
                <p
                  className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed line-clamp-2"
                  style={{
                    fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
                    lineHeight: "1.4",
                  }}
                >
                  Yarvis brings intelligent, beautiful, and customizable
                  screensavers to your Mac.
                  <br /> Transform your idle screen into a personalized
                  experience.
                </p>

                {/* Call to Action */}
                <div className="space-y-3">
                  <a
                    href="https://gumroad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Get Yarvis on Gumroad
                  </a>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Available now for macOS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Stacked */}
          <div className="lg:hidden flex flex-col items-center justify-center h-full space-y-2 md:space-y-0">
            {/* Mockup Image */}
            <div className="w-full max-w-2xl">
              {/* Light mode mockup */}
              <Image
                src="/Light-mode-mockup.webp"
                alt="Yarvis Screensaver Mockup"
                width={2400}
                height={1600}
                className="w-full h-auto max-h-[50vh] object-contain drop-shadow-2xl dark:hidden"
                priority
              />
              {/* Dark mode mockup */}
              <Image
                src="/Dark-mode-mockup.webp"
                alt="Yarvis Screensaver Mockup"
                width={2400}
                height={1600}
                className="w-full h-auto max-h-[50vh] object-contain drop-shadow-2xl hidden dark:block"
                priority
              />
            </div>

            {/* Content Below */}
            <div className="w-full max-w-lg text-center px-4 md:-mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
                Experience the Future of
                <span className="block text-gray-600 dark:text-gray-300">
                  macOS Screensavers
                </span>
              </h2>
              <p
                className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed line-clamp-2 md:hidden"
                style={{
                  fontSize: "clamp(0.875rem, 1.8vw, 1.125rem)",
                  lineHeight: "1.4",
                }}
              >
                Yarvis brings intelligent, beautiful, and customizable
                screensavers to your Mac. Transform your idle screen into a
                personalized experience.
              </p>

              {/* Call to Action */}
              <div className="space-y-3">
                <a
                  href="https://gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Get Yarvis on Gumroad
                </a>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Available now for macOS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="flex-shrink-0 py-8 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Roadmap />
          </div>
        </section>

        {/* Footer */}
        <footer className="flex-shrink-0 text-center py-4 px-8">
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            Made with ❤��� for macOS enthusiasts
          </p>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            Request a Feature on Twitter
          </a>
        </footer>
      </div>
    </main>
  );
}
