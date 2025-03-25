"use client";
import { useEffect, useState, useRef } from "react"; // Added useRef
import { motion } from "framer-motion";

const tabs = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const timeoutRef = useRef(null); // Added ref for timeout

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          // Clear previous timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          // Set new timeout with debounce
          timeoutRef.current = setTimeout(() => {
            setActiveTab(entry.target.id);
          }, 200);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      // Clear timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-5 absolute right-0 left-0">
      <div className="bg-[#721e1e]/30 mix-blend-exclusion max-h-[48px] w-max mx-auto transition-all duration-600 text-[10px] md:text-xs origin-center font-mono font-bold rounded-r-full rounded-l-full md:gap-2 p-2 md:p-4 flex flex-row items-center justify-center">
        {tabs.map((tab) => (
          <button // Changed from <a> to <button>
            key={tab.id}
            onClick={() => {
              document.getElementById(tab.id)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={`${
              activeTab === tab.id
                ? "font-bold text-opacity-100"
                : "text-opacity-60"
            } cursor-pointer md:hover:text-sm transition-all duration-300 relative rounded-full px-3 py-1.5 text-white focus-visible:outline outline-red-400`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{
                  x: { type: "spring", stiffness: 80 },
                  duration: 0.4,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
