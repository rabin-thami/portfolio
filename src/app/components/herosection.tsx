import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-55rem)] md:min-h-[calc(100vh-8rem)] overflow-hidden bg-black text-white"
      id="home"
    >
      {/* Grid Background */}
      <div className="absolute w-full h-full inset-0 bg-grid z-0" />

      {/* Faux Glow Behind Image */}
      <div className="md:absolute z-10 md:h-[400px] md:w-[400px] md:rounded-full md:bg-white/10 blur-2xl" />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/250 to-transparent" />

      {/* Main Image */}
      <div className="relative z-20">
        <Image
          src="/profile.webp"
          width={270}
          height={270}
          alt="Hero"
          className="rounded-t-full border-4 border-white shadow-xl brightness-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgb(0,0,0),_rgba(0,0,0,0)_40%)]"></div>
      </div>

      {/* Text */}
      <div className="-mt-10 md:-mt-20 relative z-20 text-center space-y-2">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
          Hey, I'm Rabin Thami.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
          Full-stack Developer
        </h2>
        <p className=" text-lg md:text-xl  max-w-4xl">
          Full-stack developer focused on building smart, responsive digital
          solutions. I simplify complex problems with clean design, automation,
          and practical thinking.
        </p>
        <button className="px-5 py-2 mt-3 border-primary border-2 bg-primary rounded-sm text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer font-semibold">
          Chat with me
        </button>
      </div>
    </div>
  );
}
