import React from "react";

const Navbar = () => {
  return (
    <div className="mt-5 absolute right-0 left-0">
      <div className="bg-[#721e1e]/30 w-max mx-auto flex-shrink transition-all duration-300 text-xs origin-center font-mono text-[#ff0000] text-opacity-55 font-bold rounded-r-full rounded-l-full gap-6 p-4 flex flex-row items-center justify-center">
        <a
          className="cursor-pointer hover:text-sm hover:text-white/80 transition-all duration-300"
          href="#hero"
        >
          HOME
        </a>
        <a
          className="cursor-pointer hover:text-sm hover:text-white/80 transition-all duration-300"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="cursor-pointer hover:text-sm hover:text-white/80 transition-all duration-300"
          href="#projects"
        >
          PROJECTS
        </a>
        <a
          className="cursor-pointer hover:text-sm hover:text-white/80 transition-all duration-300"
          href="#contact"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Navbar;
