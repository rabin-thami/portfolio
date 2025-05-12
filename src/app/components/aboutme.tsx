export default function AboutMe() {
  return (
    <div className="min-h-screen mt-15 py-5 max-w-6xl" id="about">
      <div className="relative flex h-screen w-full flex-col items-center justify-center">
        {/* Title */}
        <div>
          <div className="absolute left-0 flex w-full items-center gap-5">
            <h2 className="text-2xl w-fit font-bold">
              <span className="text-primary ">01. </span>
              <span>About Me</span>
            </h2>
            <hr className="h-[2px] w-1/6 border-none bg-primary" />
          </div>
        </div>
        {/* About me Text */}
        <div className="flex w-full justify-between gap-24 py-10">
          <div className="h-auto w-full text-lg">
            <p className="text-pretty">
              Hello! My name is Rabin Thami and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2018 when I decided to try editing custom WordPress themes — it
              turns out this taught me a lot about HTML, CSS, and JavaScript!
            </p>
            <p className="py-5">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="list-yellow grid list-inside list-disc grid-cols-2 marker:text-yellow">
              <li className="">JavaScript (ES6+)</li>
              <li className="">React</li>
              <li className="">Next JS</li>
              <li className="">WordPress</li>
              <li className="">TypeScript</li>
              <li className="">Node JS</li>
            </ul>
          </div>
          <div className="h-auto w-screen">
            <h3 className="pb-5 text-lg font-bold">Stay in Touch with Me</h3>
            <ul className="grid grid-cols-2 items-end gap-3">
              <a href="https://www.linkedin.com/in/rabinthami/" target="_blank">
                <li className="place-items-top group flex gap-1">
                  <p className="text-base font-medium">Linkedin</p>
                </li>
              </a>
              <a href="https://github.com/rabin-thami" target="_blank">
                <li className="place-items-top group flex gap-1 hover:cursor-pointer">
                  <p className="text-base font-medium">Github</p>
                </li>
              </a>
              <a href="https://x.com/rabin_thami" target="_blank">
                <li className="place-items-top group flex gap-1 hover:cursor-pointer">
                  <p className="text-base font-medium">Twitter / X</p>
                </li>
              </a>
              <a href="https://www.instagram.com/me.rubu12/" target="_blank">
                <li className="place-items-top group flex gap-1 hover:cursor-pointer">
                  <p className="text-base font-medium">Instagram</p>
                </li>
              </a>
              <a href="https://www.facebook.com/me.rubu12" target="_blank">
                <li className="place-items-top group flex gap-1 hover:cursor-pointer">
                  <p className="text-base font-medium">Facebook</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
