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
              <span> About</span>
            </li>
            <li>
              <span className="text-yellow">02.</span>
              <span> Experiences</span>
            </li>
            <li>
              <span className="text-yellow">03.</span>
              <span> Work</span>
            </li>
            <li>
              <span className="text-yellow">04.</span>
              <span> Contact</span>
            </li>
            <li>
              <button className="bg-yellow border-yellow rounded-sm border px-5 py-2 text-black transition-all duration-150 hover:bg-black hover:text-white">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
