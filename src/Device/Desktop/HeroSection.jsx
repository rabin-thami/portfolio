import profileImage from "/image/profile.webp";
export default function HeroSection() {
  return (
    <section className="magicpattern container mx-auto flex h-screen w-full max-w-6xl flex-col items-center justify-center">
      {/* Image Section */}
      <div className="relative flex w-1/4 overflow-hidden">
        <img
          src={profileImage}
          alt="Hero Section image"
          className="h-full w-full rounded-t-full border-4"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%)",
          }}
        ></div>
      </div>
      {/* Text Section */}
      <div className="z-10 -my-10">
        <div className="space-y-3 text-center text-6xl font-medium">
          <h1 className="">Hey, I'm Rabin Thami.</h1>
          <h1 className="">Front-End Developer</h1>
        </div>
        <div className="flex flex-col">
          <p className="py-5 text-lg">
            I've been working as a Front-End developer for 2 years. I'm based on
            Nepal
          </p>
          <button className="bg-yellow border-yellow hover:border-yellow mx-auto rounded-sm border px-12 py-4 text-center font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}
