import Image from "next/image";

export default function mainPage() {
  return (
    <div className="mt-5 flex flex-col items-center z-10">
      <div className="bg-grid relative flex w-full items-center justify-center overflow-hidden">
        <Image
          src="/profile.webp"
          width={557}
          height={753}
          alt="Hero Image"
          className="md:w-3/12 w-4/6 rounded-t-full border-4 border-white"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgb(0,0,0),_rgba(0,0,0,0)_40%)]"></div>
      </div>
      <div className="z-10 -m-10">
        <div className="text-center text-6xl font-semibold leading-tight">
          <h1>Rabin Thami</h1>
        </div>
      </div>
    </div>
  );
}
