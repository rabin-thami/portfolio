import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNodejsFill,
  RiGithubFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";

export default function Showcase() {
  const icons = [
    { IconComponent: RiHtml5Fill, name: "HTML5" },
    { IconComponent: RiCss3Fill, name: "CSS3" },
    { IconComponent: RiJavascriptFill, name: "JavaScript" },
    { IconComponent: RiReactjsFill, name: "React" },
    { IconComponent: RiNodejsFill, name: "Node" },
    { IconComponent: RiGithubFill, name: "Github" },
    { IconComponent: RiTailwindCssFill, name: "Tailwind" },
    { IconComponent: RiNextjsFill, name: "Tailwind" },
  ];

  return (
    <section className="container mx-auto max-w-3xl p-5 flex flex-col justify-between items-center">
      <h1 className="font-medium text-5xl">Tech I used</h1>
      <div className="flex w-full flex-wrap gap-5 py-10">
        {icons.map(({ IconComponent, name }, index) => (
          <div
            key={index}
            className="w-40 h-40 isolate bg-white/5 shadow-lg ring-1 ring-gray-50/10 rounded-md backdrop-blur-md  transition-all duration-300 hover:-translate-y-2 flex items-center justify-center"
          >
            <IconComponent size={70} />
          </div>
        ))}
      </div>
    </section>
  );
}
