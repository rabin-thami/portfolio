import React, { useState } from "react";
import projectData from "../../utils/projectData.js";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";

export default function WorkShowcase() {
  const [selectedLanguage, setSelectedLanguage] = useState(projectData[0]);
  const [activeIndex, setActiveIndex] = useState(null);

  function workHandle(index) {
    setSelectedLanguage(projectData[index]);
  }

  const handleCollapsible = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <ul className="">
              {projectData.map((language, index) => (
                <button
                  className="glass--effect my-2 h-fit w-full px-3 py-5"
                  key={index}
                  onClick={() => {
                    workHandle(index);
                    handleCollapsible(index);
                  }}
                >
                  <div className="flex justify-between px-3">
                    <p>{language.name}</p>
                    <p>{activeIndex === index ? "-" : "+"}</p>
                  </div>
                  {activeIndex === index && (
                    <div className="text-left transition-[max-height] duration-300">
                      {selectedLanguage.projects.map((project, index) => (
                        <div className="glass--effect mt-5 h-auto w-full rounded-lg p-3">
                          {/* top section */}
                          <div className="">
                            <a
                              href={project.visitLink}
                              target="_blank"
                              key={index}
                              className="flex w-full justify-between"
                            >
                              <h3 className="text-lg font-medium text-yellow">
                                {project.title}
                              </h3>
                              <div className="flex gap-2">
                                <a
                                  href={project.githubLink}
                                  className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                                  target="_blank"
                                >
                                  {project.githubLink && (
                                    <RiGithubLine size={20} />
                                  )}
                                </a>
                                <a
                                  href={project.visitLink}
                                  className="transition-all duration-300 hover:cursor-pointer hover:text-yellow"
                                  target="_blank"
                                >
                                  {project.visitLink && (
                                    <RiShareBoxLine size={20} />
                                  )}
                                </a>
                              </div>
                            </a>
                          </div>
                          <p>{project.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div
//   className="glass--effect group my-2 h-fit w-full rounded-md px-3 py-5 duration-300"
//   key={index}
// >
//   <button
//     className="w-full px-3 text-left after:float-end"
//     onClick={() => handleCollapsible(index)}
//   >
//     {language.name}
//     <span className="float-right">
//       {activeIndex === index ? "-" : "+"}
//     </span>
//   </button>
//   {activeIndex === index && (
//     <div className="max-h-0 p-3 transition-[max-height] duration-300">
//       <p>Rabin</p>
//     </div>
//   )}
// </div>
