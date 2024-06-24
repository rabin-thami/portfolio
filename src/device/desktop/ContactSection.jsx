import React, { useState } from "react";
import projectData from "../../utils/projectData.js";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";
export default function WorkShowcase() {
  const [selectedLanguage, setSelectedLanguage] = useState(projectData[0]);

  function workHandle(index) {
    setSelectedLanguage(projectData[index]);
  }

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto h-screen w-full max-w-5xl content-center">
        {/* Title Section */}
        <div className="left-0 flex w-screen items-center gap-5">
          <h2 className="text-2xl">
            <span className="text-yellow">03. </span>
            <span className="font-bold">Got Project ? Let's talk</span>
          </h2>
          <hr className="h-[2px] w-1/6 border-none bg-yellow" />
        </div>
        {/* container */}
        <div className="my-10 grid grid-cols-2 gap-5">
          <div className="">
            <p className="text-lg">
              I am actively seeking new opportunities and my inbox is always
              open. Whether you have a question or simply want to say{" "}
              <span className="underline--effect text-base font-semibold">
                Hello
              </span>{" "}
              , I will do my best to respond!
            </p>
          </div>
          <div className="flex w-full items-start justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rabinthami36@gmail.com&su=Saying Hello From rabinthami.com.np"
              target="_blank"
              className="border-1 trans my-5 rounded-sm border border-yellow bg-yellow px-10 py-4 font-medium text-black transition duration-200 hover:bg-black hover:text-white"
            >
              Say Hi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
