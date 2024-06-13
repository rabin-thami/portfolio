import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiNextjsFill,
} from "react-icons/ri";
export default function Technology() {
  return (
    <div className="h-dvh">
      <section className="background-grid">
        <div className="rabin relative pt-10">
          <h2 className="text-4xl font-semibold pb-10">
            <span className="text-[#DBF52F]">Tech</span> i'm Familiar
          </h2>
          <ul className="flex gap-5 flex-wrap">
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiHtml5Fill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiCss3Fill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiJavascriptFill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiReactjsFill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiTailwindCssFill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiNodejsFill size={50} />
            </li>
            <li class="isolate w-44 h-44 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 flex items-center justify-center bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-all duration-200">
              <RiNextjsFill size={50} />
            </li>{" "}
          </ul>
        </div>
      </section>
    </div>
  );
}
