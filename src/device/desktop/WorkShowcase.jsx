import React, { useState } from "react";
import projectData from "../../utils/projectData.js";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";
export default function WorkShowcase() {
  const [selectedLanguage, setSelectedLanguage] = useState(projectData[0]);

  function workHandle(index) {
    setSelectedLanguage(projectData[index]);
  }

  return (
    <section className="magicline overflow-hidden" id="work">
      <div className="container mx-auto h-screen w-full max-w-5xl content-start pt-[calc(100vh-85vh)]">
        {/* Title Section */}
        <div className="left-0 flex w-screen items-center gap-5">
          <h2 className="text-2xl">
            <span className="text-yellow">02. </span>
            <span className="font-bold">My Beautiful Works</span>
          </h2>
          <hr className="h-[2px] w-1/6 border-none bg-yellow" />
        </div>
        {/* container */}
        <div className="flex place-items-start justify-between gap-5 py-5">
          {/* Left Container */}
          <div className="glass--effect my-2 h-auto w-1/3">
            <ul className="">
              {projectData.map((language, index) => (
                <li
                  key={index}
                  onClick={() => workHandle(index)}
                  className="hover--effect p-5 font-medium transition-all duration-300 hover:text-black"
                >
                  <button id={index}>{language.name}</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Container */}
          <div className="no-scrollbar h-auto max-h-[calc(100vh-12em)] w-full overflow-y-scroll py-2">
            <ul className="grid grid-cols-3 gap-3">
              {selectedLanguage.projects.map((project, index) => (
                <a href={project.visitLink} key={index}>
                  <li className="glass--effect group h-auto min-h-[17em] w-full rounded-md px-3 py-5 duration-300 hover:-translate-y-0.5 hover:cursor-pointer">
                    {/* top-section of project holder */}
                    <div className="flex items-center justify-between">
                      {selectedLanguage.iconName && (
                        <selectedLanguage.iconName
                          className="transition-all duration-300 hover:cursor-pointer group-hover:text-yellow"
                          size={30}
                        />
                      )}
                      <div className="flex gap-2">
                        <a
                          href={project.githubLink}
                          className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                        >
                          {project.githubLink && <RiGithubLine size={20} />}
                        </a>
                        <a
                          href={project.visitLink}
                          className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                        >
                          {project.visitLink && <RiShareBoxLine size={20} />}
                        </a>
                      </div>
                    </div>
                    {/* content-section of project holder */}
                    <div className="my-3 space-y-2 pt-6">
                      <h3 className="text-xl font-medium transition-all duration-300 hover:cursor-pointer group-hover:text-yellow">
                        {project.title}
                      </h3>
                      <p>{project.description}</p>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
