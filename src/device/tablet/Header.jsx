import React, { useState, useEffect, useCallback } from "react";
import resumePDF from "../../assets/Static/resume.pdf";

const Navbar = () => {
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

  return (
    <header className="fixed left-0 top-0 z-20 w-full backdrop-blur-xl">
      <div className="container mx-auto max-w-2xl">
        <nav className="flex items-center justify-between py-5">
          {/* Your existing nav content here */}
          <div className="text-xl font-semibold">
            <a href="#home">
              <span>Rabin Thami</span>
              <span className="text-yellow">.</span>
            </a>
          </div>
          <div className="font-medium">
            <ul className="flex items-center gap-5">
              <li
                className={activeSection === "about-me" ? "active-navbar" : ""}
              >
                <a href="#about-me">
                  <span className="text-yellow">01.</span>
                  <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                    {" "}
                    About
                  </span>
                </a>
              </li>
              <li className={activeSection === "work" ? "active-navbar" : ""}>
                <a href="#work">
                  <span className="text-yellow">02.</span>
                  <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                    {" "}
                    Work
                  </span>
                </a>
              </li>
              <li
                className={activeSection === "contact" ? "active-navbar" : ""}
              >
                <a href="#contact">
                  <span className="text-yellow">03. </span>
                  <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                    Contact
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={resumePDF}
                  download="rabin-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-sm border border-yellow bg-yellow px-5 py-2 text-black transition-all duration-150 hover:bg-black hover:text-white">
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
