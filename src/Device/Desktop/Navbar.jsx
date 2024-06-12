export default function Navbar() {
  return (
    <nav className="flex justify-between py-5 items-center">
      <div className="flex gap-1 font-bold text-xl">
        <p className="font">Rabin</p>
        <div className="flex items-baseline">
          <p>Thami</p>
          <p className="w-1 h-1 bg-[#DBF52F] rounded-full mx-1"></p>
        </div>
      </div>
      <div>
        <ul className="font-semibold flex items-center gap-5">
          <li className="flex gap-1 hover:cursor-pointer transition-all duration-150">
            <span className="text-[#DBF52F]">01.</span>
            <p className="hover:text-[#DBF52F]">About</p>
          </li>
          <li className="flex gap-1 hover:cursor-pointer transition-all duration-150">
            <span className="text-[#DBF52F]">02.</span>
            <p className="hover:text-[#DBF52F]">Experience</p>
          </li>
          <li className="flex gap-1 hover:cursor-pointer transition-all duration-150">
            <span className="text-[#DBF52F]">03.</span>
            <p className="hover:text-[#DBF52F]">Work</p>
          </li>
          <li className="flex gap-1 hover:cursor-pointer transition-all duration-150">
            <span className="text-[#DBF52F]">04.</span>
            <p className="hover:text-[#DBF52F]">Contact</p>
          </li>
          <li>
            <button className="border border-[#DBF52F] px-4 py-2 rounded-sm hover:bg-[#DBF52F] hover:text-black transition-all duration-200">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
