import React, { useState, useEffect, useCallback } from "react";
import resumePDF from "../../assets/Static/resume.pdf";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuHandle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full backdrop-blur-xl">
      <div className="container mx-auto max-w-[80vw]">
        <nav className="flex items-center justify-between py-5">
          {/* Your existing nav content here */}
          <div className="text-lg font-semibold">
            <a href="#home">
              <span>Rabin Thami</span>
              <span className="text-yellow">.</span>
            </a>
          </div>
          <div className="font-medium">
            <button onClick={menuHandle}>
              <RiMenu2Line size={20} />
            </button>
          </div>
          <div
            className={`fixed right-0 top-0 z-30 h-screen transform bg-black ring-1 ring-white/10 transition-transform ${
              isToggle ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ width: "18em" }}
          >
            <span className="mr-9 mt-5 flex justify-end">
              <RiCloseLine
                size={25}
                onClick={menuHandle}
                className="hover:cursor-pointer hover:text-[#2260bf]"
              />
            </span>
            <div className="relative px-16 py-4 font-SpaceGrotesk text-lg font-semibold">
              <ul className="animationClass space-y-8">
                <li>
                  <a href="#about-me">
                    <span className="text-yellow">01.</span>
                    <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                      {" "}
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#work">
                    <span className="text-yellow">02.</span>
                    <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                      {" "}
                      Work
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="text-yellow">03. </span>
                    <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                      Contact
                    </span>
                  </a>
                </li>
                <li>
                  <a href={resumePDF} target="_blank">
                    <button className="rounded-sm border border-yellow bg-yellow px-5 py-2 text-black transition-all duration-150 hover:bg-black hover:text-white">
                      Resume
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
