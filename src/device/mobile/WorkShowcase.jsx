import React, { useState } from "react";
import projectData from "../../utils/projectData.js";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";
export default function WorkShowcase() {
  return (
    <section className="magicline overflow-hidden">
      <div className="container mx-auto h-screen max-w-[80vw] content-start pt-[calc(100vh-85vh)]">
        {/* Title Section */}
        <div className="left-0 flex w-screen items-center gap-5">
          <h2 className="text-2xl">
            <span className="text-yellow">02. </span>
            <span className="font-bold">My Works</span>
          </h2>
          <hr className="h-[2px] w-1/6 border-none bg-yellow" />
        </div>
        {/* container */}
        <div className="flex place-items-start justify-between gap-5 py-5">
          {/* Right Container */}
          <div className="no-scrollbar h-auto max-h-[calc(100vh-12em)] w-full overflow-y-scroll py-2">
            <ul className="grid-cols grid gap-3">
              {projectData.map((project, index) => (
                <li className="glass--effect group h-fit w-full rounded-md px-3 py-5 duration-300 hover:-translate-y-0.5 hover:cursor-pointer">
                  {/* container top section */}
                  <div className="flex justify-between">
                    <project.iconName
                      className="transition-all duration-300 hover:cursor-pointer group-hover:text-yellow"
                      size={30}
                    />
                    <div className="flex gap-2">
                      <a
                        href={project.projects.githubLink}
                        className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                      >
                        {project.projects.githubLink && (
                          <RiGithubLine size={20} />
                        )}
                      </a>
                      <a
                        href={project.projects.visitLink}
                        className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                      >
                        {project.projects.visitLink && (
                          <RiShareBoxLine size={20} />
                        )}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
