import workImage from "/profile.png";
export default function ProjectShowCase() {
  return (
    <section className="container mx-auto max-w-3xl">
      <div className="background-grid">
        <div className="rabin relative">
          <h1 className="text-4xl font-bold text-left">My Beautiful Work</h1>
          <ul className="flex my-10 flex-wrap justify-between flex-row">
            <li className="w-60 h-8">
              <a href="">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={workImage}
                    alt=""
                    className="grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="my-4 leading-9">
                  <p className="text-2xl font-medium hover:text-[#DBF52F] transition-all duration-200">
                    Personal Portfolio
                  </p>
                  <p className="text-sm">Front-End Development, UI Design</p>
                </div>
              </a>
            </li>
            <li className="w-60 h-8">
              <a href="">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={workImage}
                    alt=""
                    className="grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="my-4 leading-9">
                  <p className="text-2xl font-medium hover:text-[#DBF52F] transition-all duration-200">
                    Personal Portfolio
                  </p>
                  <p className="text-sm">Front-End Development, UI Design</p>
                </div>
              </a>
            </li>
            <li className="w-60 h-8">
              <a href="">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={workImage}
                    alt=""
                    className="grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="my-4 leading-9">
                  <p className="text-2xl font-medium hover:text-[#DBF52F] transition-all duration-200">
                    Personal Portfolio
                  </p>
                  <p className="text-sm">Front-End Development, UI Design</p>
                </div>
              </a>
            </li>
            <li className="w-60 h-8">
              <a href="">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={workImage}
                    alt=""
                    className="grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div className="my-4 leading-9">
                  <p className="text-2xl font-medium hover:text-[#DBF52F] transition-all duration-200">
                    Personal Portfolio
                  </p>
                  <p className="text-sm">Front-End Development, UI Design</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
