import HeroSectionImage from "/profile.png";

export default function HeroSection() {
  return (
    <div className="background-grid">
      <div className="rabin relative">
        <div className="flex items-center justify-center relative w-full h-2/3 -z-10">
          <div className="relative w-1/4">
            <img
              src={HeroSectionImage}
              alt="Profile Image"
              className="rounded-t-full border-4 w-full"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute left-1 right-1 top-1/2">
          <h1 className="text-5xl z-10 font-medium leading-normal">
            Hey, I'm <span>Rabin Thami</span>
          </h1>
          <h1 className="text-5xl z-10 font-medium leading-normal">
            <span className="">Front-End</span> Developer
          </h1>
          <div className="text-xl my-5">
            <p>
              I've been working as a{" "}
              <span className="font-bold">Front-End developer</span> for a
              couple of years.
            </p>
            <p>
              I am based in <span className="font-bold">Nepal</span>.
            </p>
          </div>
          <button className="px-6 py-3 border border-[#DBF52F] bg-[#DBF52F] text-black font-medium rounded-sm hover:bg-black hover:text-white transition-all duration-150">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
