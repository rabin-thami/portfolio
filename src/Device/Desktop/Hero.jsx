import profileImage from "/profile.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center relative">
      <div className="relative overflow-hidden">
        <img
          src={profileImage}
          alt=""
          className="w-[18em] rounded-t-[50em] h-auto border-4"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)",
          }}
        ></div>
      </div>
      <div className="text-center absolute top-[20em] text-sha">
        <h1 className="text-5xl font-medium leading-normal shadow-2xl">
          <span>Hey, It's Rabin Thami.</span> <br />
          <span>Front-End Developer</span>
        </h1>
        <p className="text-2xl font-normal">
          I've been working as a{" "}
          <span className="font-bold">Front-End Developer</span> for the last 2
          years. I am based in one of the most beautiful countries in the world,
          <span className="font-bold"> Nepal</span>
        </p>
        <button className="px-12 py-4 bg-[#DBF52F] text-black my-8 font-bold rounded-md">
          Hire Me
        </button>
      </div>
    </section>
  );
}
