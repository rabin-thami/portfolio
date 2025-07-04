"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";

export default function navbar() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const navbarList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Blog", link: "/#blog" },
    { name: "Contact", link: "/#contact" },
    { name: "Login", link: "/sign-in" },
  ];

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
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
              <button className="px-5 py-2  border-primary border-2 bg-primary rounded-sm text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
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
                    <span className="text-primary">{index + 1}. </span>{" "}
                    {item.name}
                  </Link>
                ))}
                <Link href="#">
                  <button className="px-5 py-2 border-2 border-primary bg-primary rounded-sm text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
