import { useState } from "react";
import workImage from "/profile.png";
export default function ProjectShowCase() {
  const projectList = [
    { title: "Movie App", tag: "Front-End, UI Design" },
    { title: "Portfolio", tag: "Front-End, UI Design" },
    { title: "Bank App", tag: "Front-End, UI Design" },
    { title: "Login App", tag: "Front-End, UI Design" },
    { title: "Chess App", tag: "Front-End, UI Design" },
    { title: "Weather App", tag: "Front-End, UI Design" },
    { title: "Task Manager", tag: "Front-End, UI Design" },
    // Add more projects as needed
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectList : projectList.slice(0, 5);
  return (
    <section className="container mx-auto max-w-3xl">
      <div className="background-grid">
        <div className="rabin relative">
          <div>
            <h1 className="text-4xl font-bold text-left">My Beautiful Work</h1>
          </div>
          <div className="my-5 w-full">
            <ul className="grid grid-cols-3 gap-2">
              {displayedProjects.map((project, index) => (
                <li key={index} className="w-5/6 overflow-hidden ">
                  <a
                    href="#"
                    className="transition-all grayscale duration-150 hover:grayscale-0 group"
                  >
                    <img src={workImage} alt="" className="rounded-md" />
                    <div className="my-2">
                      <h2 className="text-2xl font-medium group-hover:text-[#DBF52F]">
                        {project.title}
                      </h2>
                      <p>{project.tag}</p>
                    </div>
                  </a>
                </li>
              ))}
              {projectList.length > 5 && (
                <li className="w-5/6 overflow-hidden flex justify-center items-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className=" px-6 py-3 bg-[#DBF52F] text-black font-medium rounded-md"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
