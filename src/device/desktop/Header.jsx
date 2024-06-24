import resumePDF from "../../assets/Static/resume.pdf";
export default function () {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between py-5">
        {/* title */}
        <div className="text-xl font-semibold">
          <span>Rabin Thami</span>
          <span className="text-yellow"> .</span>
        </div>
        {/* Menu */}
        <div className="font-medium">
          <ul className="flex items-center gap-5">
            <li>
              <span className="text-yellow">01.</span>
              <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                {" "}
                About
              </span>
            </li>
            <li>
              <span className="text-yellow">02.</span>
              <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                {" "}
                Work
              </span>
            </li>
            <li>
              <span className="text-yellow">03. </span>
              <span className="cursor-pointer transition-all duration-150 hover:text-yellow">
                Contact
              </span>
            </li>
            <li>
              <a href={resumePDF} download="rabin-resume" target="_blank">
                <button className="rounded-sm border border-yellow bg-yellow px-5 py-3 text-black transition-all duration-150 hover:bg-black hover:text-white">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
