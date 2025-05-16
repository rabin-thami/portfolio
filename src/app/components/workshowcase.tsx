import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const technologies = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
];

export default function Project() {
  return (
    <div
      className="mt-14 md:min-h-screen md:mt-10 py-5 max-w-6xl mx-auto flex"
      id="projects"
    >
      <div className="relative flex md:h-screen w-full flex-col items-center justify-center">
        {/* Title */}
        <div>
          <div className="absolute left-0 flex w-full items-center gap-5">
            <h2 className="text-2xl w-fit font-bold">
              <span className="text-primary ">03. </span>
              <span>Project Highlights</span>
            </h2>
            <hr className="h-[2px] w-1/6 border-none bg-primary" />
          </div>
        </div>
        {/* About me Text */}
        <div className="md:flex w-full md:justify-between gap-24 py-10 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <div className="group relative h-[320px] w-full rounded-xl overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-700">
                <Image
                  src="/profile.webp"
                  alt="Cover Image"
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>
              </div>

              {/* Arrow link */}
              <div className="absolute top-3 right-3 z-20">
                <Link
                  href={"#"}
                  className="p-2 backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/30"
                  aria-label={`View project`}
                >
                  <ArrowUpRight className="h-4 w-4 text-white " />
                </Link>
              </div>

              {/* Content with glass effect */}
              <div className="absolute inset-x-0 bottom-0 h-45 px-6 py-4 backdrop-blur-md bg-white/10 dark:bg-black/30 border-t border-white/20 transition-all duration-300 group-hover:bg-white/5">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {"Dummy Title"}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-3 text-md">
                  {
                    "Dummy description of the project goes here. It should be short and concise. This is just a placeholder text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full backdrop-blur-md bg-white/20 text-white border border-white/30"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href={"#"}>
            <button className="px-5 py-2 mt-3 border-primary border-2 bg-primary rounded-sm text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer font-semibold">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
