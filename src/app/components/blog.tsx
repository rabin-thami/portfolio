import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div
      className="mt-14 md:min-h-screen md:mt-10 py-5 max-w-6xl flex"
      id="blog"
    >
      <div className="relative flex md:h-screen w-full flex-col items-center justify-center">
        {/* Title */}
        <div>
          <div className="absolute left-0 flex w-full items-center gap-5">
            <h2 className="text-2xl w-fit font-bold">
              <span className="text-primary ">04. </span>
              <span>Project Highlights</span>
            </h2>
            <hr className="h-[2px] w-1/6 border-none bg-primary" />
          </div>
        </div>
        {/* Blog me Text */}
      </div>
    </div>
  );
}
