import React from "react";
import ProjectBuildItem from "./ProjectBuildItem";

const HorizontalSectionPanel = ({
  src,
  title,
  subtitle,
  href,
  content,
  react,
  vite,
  tailwind,
  nodejs,
  hyperbrowser,
  express,
}) => {
  return (
    <div className="horizontal-panel bg-transparent flex items-center text-center justify-center text-white text-xl tracking-wide ">
      <div className="h-[80%] w-[80%] font-mono flex flex-row justify-around items-center rounded-lg m-2">
        <div className="flex flex-col rounded-lg p-4 object-center items-center justify-center gap-4 w-[40%]">
          <img
            src={src}
            alt={title + subtitle}
            className="rounded-lg object-cover"
          />
          <a
            href={href}
            target="_blank"
            className="text-[#ff0000] font-sans group cursor-pointer transition-all bg-[#721e1e]/10 px-4 py-2 hover:bg-[#721e1e]/40 rounded-full  select-text z-[99]"
          >
            {title} <span className="text-white font-mono"> - {subtitle}</span>
            <img
              src="./out.png"
              className="w-4 h-4 group-hover:inline-block hidden mx-2"
            ></img>
          </a>
        </div>
        <div className="w-[2px] h-80 bg-white/20"></div>
        {/* Tech Stack */}
        <div className="flex flex-col gap-4 p-2 justify-center items-center">
          <div className="h-full flex gap-2 justify-start items-center m-4">
            {hyperbrowser && (
              <ProjectBuildItem src="./hyperbrowser.svg" text="HyperBrowser" />
            )}
            {react && <ProjectBuildItem src="./react.png" text="React" />}
            {vite && <ProjectBuildItem src="./vite.png" text="Vite" />}
            {tailwind && (
              <ProjectBuildItem src="./tailwindcss.png" text="TailwindCSS" />
            )}
            {express && <ProjectBuildItem src="./express.png" text="Express" />}
            {nodejs && <ProjectBuildItem src="./nodejs.png" text="Node js" />}
          </div>
          <div className="text-lg text-center w-[400px]">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSectionPanel;
