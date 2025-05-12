"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";

export default function navbar() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const navbarList = [
    { name: "Home", link: "/" },
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="flex justify-between items-center py-4 text-white text-md font-semibold">
      {/* title */}
      <div>
        <h1 className="text-lg font-semibold">
          Rabin Thami <span className="text-primary text-lg">.</span>
        </h1>
      </div>
      {/* menu list */}
      <div className="gap-4 hidden md:flex items-center">
        {navbarList.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:text-primary transition-all duration-300 ease-in-out"
          >
            <span className="text-primary">{index + 1}. </span>
            {item.name}
          </Link>
        ))}
        <Link href="#">
          <button className="px-5 py-2  border-primary border-2 bg-primary rounded-full text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
            Resume
          </button>
        </Link>
      </div>

      {/* mobile menu */}
      <div className="md:hidden flex justify-center items-center">
        <button
          className="rounded-full p-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary/10 "
          onClick={handleToggle}
        >
          <AlignLeft size={20} />
        </button>
        <div></div>
      </div>
      <div
        className={`fixed right-0 top-0 z-30 h-screen transform bg-black ring-1 ring-white/10 transition-transform ${
          isToggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "15em" }}
      >
        <div className="p-5">
          <span className="flex justify-end">
            <button
              className="rounded-full p-2 transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary/10 "
              onClick={handleToggle}
            >
              <X size={20} />
            </button>
          </span>
          <div>
            {navbarList.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex px-3 py-2 hover:text-primary transition-all duration-300 ease-in-out"
              >
                <span className="text-primary">{index + 1}. </span> {item.name}
              </Link>
            ))}
            <Link href="#">
              <button className="px-5 py-2 border-2 border-primary bg-primary rounded-full text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
