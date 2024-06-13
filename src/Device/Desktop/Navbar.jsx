export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between items-center">
      <div className="font-bold text-2xl">
        Rabin Thami<span className="text-[#DBF52F]">.</span>
      </div>
      <div>
        <ul className="flex gap-5 font-medium items-center justify-center">
          <li className="flex gap-1">
            <span className="text-[#DBF52F]">01.</span>
            <a
              href=""
              className="hover:text-[#DBF52F] transition-all duration-150"
            >
              About me
            </a>
          </li>
          <li className="flex gap-1">
            <span className="text-[#DBF52F]">02.</span>
            <a
              href=""
              className="hover:text-[#DBF52F] transition-all duration-150"
            >
              Experience
            </a>
          </li>
          <li className="flex gap-1">
            <span className="text-[#DBF52F]">03.</span>
            <a
              href=""
              className="hover:text-[#DBF52F] transition-all duration-150"
            >
              Work
            </a>
          </li>
          <li className="flex gap-1">
            <span className="text-[#DBF52F]">04.</span>
            <a
              href=""
              className="hover:text-[#DBF52F] transition-all duration-150"
            >
              Contact
            </a>
          </li>
          <li className="flex gap-1">
            <button className="px-6 py-2 border border-[#DBF52F] rounded-sm hover:bg-[#DBF52F] hover:text-black font-medium transition-all duration-150">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
