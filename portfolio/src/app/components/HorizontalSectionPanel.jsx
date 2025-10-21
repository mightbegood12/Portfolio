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
  supabase,
  github,
}) => {
  return (
    <div className="horizontal-panel bg-transparent flex items-center text-center justify-center text-white text-xl tracking-wide ">
      <div className="md:h-[80%] md:w-[80%] w-[80%] font-mono flex flex-col md:flex-row justify-around items-center rounded-lg m-2">
        {/* Image Section */}
        <div className="group flex flex-col rounded-lg p-4 object-center items-center justify-center gap-4 md:w-[40%] transition-all duration-200 ease-in-out">
          <div>
            <img
              src={src}
              alt={title + subtitle}
              className="rounded-lg object-cover transition-all duration-300"
            />
            <div
              className="md:group-hover:opacity-100 md:opacity-0 absolute text-lg md:w-max font-mono py-2 rounded-lg select-none
             transition-all duration-300 ease-in-out translate-x-[-6px] group-hover:translate-x-0 md:mt-2 -mt-48"
            >
              <div className="truncate text-left md:text-center leading-6 w-max">
                {title}{" "}
                <span className="text-white md:inline block font-mono text-sm">
                  {" "}
                  | {subtitle}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full justify-end items-end">
            <a href={href} target="_blank">
              <img src="./out.png" className="w-6 h-6 inline-block" alt="out" />
            </a>
            <a href={github} target="_blank">
              <img
                src="./github.svg"
                className="w-6 h-6 inline-block"
                alt="out"
              />
            </a>
          </div>
        </div>
        <div className="w-full h-[2px] md:w-[2px] md:h-96 bg-white/20"></div>
        {/* Tech Stack */}
        <div className="flex flex-col w-full md:w-[50%] gap-4 p-2 justify-center items-center">
          <div className="flex h-full gap-2 justify-start items-center m-4">
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
            {supabase && (
              <ProjectBuildItem src="./supabase.png" text="Supabase" />
            )}
          </div>
          <div className="md:block hidden text-sm w-20 md:text-lg md:w-[400px] text-justify indent-6">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSectionPanel;
