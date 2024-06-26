import profileImage from "/image/profile.webp";
export default function HeroSection() {
  return (
    <section className="container mx-auto h-screen max-w-2xl py-14">
      <div className="magicpattern mt-10 flex flex-col items-center">
        {/* Image Container */}
        <div className="relative flex w-[calc(100vw-10em)] items-center justify-center overflow-hidden">
          <img
            src={profileImage}
            alt="Hero Image"
            className="w-fit rounded-t-full border-4"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%)",
            }}
          ></div>
        </div>
        {/* Text Container */}
        <div className="container z-10 -m-10 mx-auto max-w-2xl">
          <div className="text-center text-2xl font-semibold leading-snug">
            <h1>Hey, I'm Rabin Thami.</h1>
            <h1>Web Developer</h1>
          </div>
          <div className="px-12 py-8 text-center">
            <p className="text-base">
              I've been working as a{" "}
              <span className="underline--effect font-semibold">
                Web Developer
              </span>{" "}
              for a couple of years. I'm based on{" "}
              <span className="underline--effect font-semibold">Nepal</span>.
            </p>
            <button className="border-1 trans my-5 rounded-sm border border-yellow bg-yellow px-10 py-3 font-medium text-black transition duration-200 hover:bg-black hover:text-white">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
