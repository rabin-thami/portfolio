import { Github, Linkedin, Twitter } from "lucide-react";
export default function AboutMe() {
  return (
    <div
      className="mt-14 md:min-h-screen md:mt-20 py-5 max-w-6xl flex"
      id="about"
    >
      <div className="relative flex md:h-screen w-full flex-col items-center justify-center">
        {/* Title */}
        <div>
          <div className="absolute left-0 flex w-full items-center gap-5">
            <h2 className="text-2xl w-fit font-bold">
              <span className="text-primary ">02. </span>
              <span>About Me</span>
            </h2>
            <hr className="h-[2px] w-1/6 border-none bg-primary" />
          </div>
        </div>
        {/* About me Text */}
        <div className="md:flex w-full md:justify-between gap-24 py-10">
          <div className="h-auto w-full text-lg">
            <p className="text-pretty">
              Hi, I’m Rabin Thami, a web developer passionate about creating
              impactful online experiences. I started my journey in 2018, diving
              into custom WordPress themes, which introduced me to HTML, CSS,
              and JavaScript. Since then, I’ve been building fast, scalable
              applications with modern technologies. Here are some tools I’ve
              been working with recently:
            </p>
            <p className="py-5">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="list-yellow grid list-inside list-disc grid-cols-2 marker:text-yellow mb-5">
              <li className="">JavaScript</li>
              <li className="">React</li>
              <li className="">Next JS</li>
              <li className="">WordPress</li>
              <li className="">TypeScript</li>
              <li className="">Node JS</li>
            </ul>
          </div>
          <div className="h-auto  w-full md:w-screen">
            <h3 className="pb-5 text-lg font-bold">Stay in Touch with Me</h3>
            <ul className="grid grid-cols-2 items-end gap-3">
              <a href="https://www.linkedin.com/in/rabinthami/" target="_blank">
                <li className="place-items-top group flex gap-1">
                  <Linkedin
                    size={18}
                    className="transition-all duration-200 group-hover:text-[#0077B5]"
                  />
                  <p className="text-base font-medium">Linkedin</p>
                </li>
              </a>
              <a href="https://github.com/rabin-thami" target="_blank">
                <li className="place-items-top group flex items-center gap-1 hover:cursor-pointer">
                  <Github
                    size={18}
                    className="transition-all duration-200 group-hover:text-[#8f8f8f]"
                  />
                  <p className="text-base font-medium">Github</p>
                </li>
              </a>
              <a href="https://x.com/rabin_thami" target="_blank">
                <li className="place-items-top group flex gap-1 hover:cursor-pointer">
                  <Twitter
                    size={18}
                    className="transition-all duration-200 group-hover:text-[#1DA1F2]"
                  />
                  <p className="text-base font-medium">Twitter / X</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
