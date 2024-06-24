import React, { useState, useEffect, useCallback } from "react";
import resumePDF from "../../assets/Static/resume.pdf";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <header
      className={`fixed left-0 top-0 z-20 w-full backdrop-blur-xl transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto">
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
              <li>
                <a href="#about">
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
