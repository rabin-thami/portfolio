import ProfileImage from "/profile.png";
export default function Hero() {
  return (
    <section className="background-grid">
      <div className="rabin relative">
        <div className="flex justify-center items-center h-3/2">
          <div className=" relative">
            <img
              src={ProfileImage}
              alt="Profile Image"
              className="w-[25em] rounded-t-full border-4"
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
        <div className="text-center absolute top-2/4">
          <h1 className="text-5xl font-medium leading-normal shadow-xl">
            <span>Hey, It's Rabin Thami.</span> <br />
            <span>Front-End Developer</span>
          </h1>
          <p className="text-2xl font-normal">
            I've been working as a{" "}
            <span className="font-bold">Front-End Developer</span> for the last
            2 years. I am based in one of the most beautiful countries in the
            world,
            <span className="font-bold"> Nepal</span>
          </p>
          <button className="px-12 py-4 bg-[#DBF52F] text-black my-8 font-bold rounded-sm transition-all duration-100 border border-[#DBF52F] hover:bg-black hover:text-white">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
