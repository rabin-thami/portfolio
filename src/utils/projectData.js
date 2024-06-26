import {
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiNextjsFill,
  RiWordpressFill,
} from "react-icons/ri";
const projectData = [
  {
    name: "JavaScript",
    iconName: RiJavascriptFill, // Use the React component directly
    projects: [
      {
        title: "Watch List",
        description:
          "App that is made with JavaScript, OMDB API and REST API. It a Bookmark features for movie that you want to want later",
        visitLink: "https://watch-list-rabin.netlify.app/",
      },
      {
        title: "Quiz App",
        description:
          "It's A Quiz App that data is pre-written in .js formate. you can use 'rabin' as a username and 'rabin@123' as password.",
        visitLink: "https://rabin-quize.netlify.app/",
        githubLink: "https://github.com/rabin-thami/quiz-app",
      },
      {
        title: "Unit Converter",
        description:
          "Simple app to convert the units that is build in Vanilla JavaScript",
        visitLink: "https://example.com/unitconverter",
        githubLink: "https://github.com/example/unitconverter",
      },

      // More projects...
    ],
  },
  {
    name: "React",
    iconName: RiReactjsFill,
    projects: [
      {
        title: "Van Life",
        description:
          "Simple app for get  Van in rent. It's my solo project / challenge ",
        githubLink: "https://github.com/rabin-thami/VanLifeOriginal",
      },
      {
        title: "100 Days of React",
        description: "I tired a 100 days react challenge. but stop in day 12",
        githubLink: "https://github.com/rabin-thami",
      },
    ],
  },
  {
    name: "Tailwind",
    iconName: RiTailwindCssFill,
    projects: [
      {
        title: "Portfolio",
        description:
          "It's a same portfolio you are seeing here. Its build with React and Tailwind",
        visitLink: "https://rabinthami.com.np",
        githubLink: "https://github.com/rabin-thami/portfolio",
      },
      {
        title: "Coming Soon",
        description: "So many project are in coming soon",
      },
    ],
  },
  {
    name: "Next JS",
    iconName: RiNextjsFill,
    projects: [
      {
        title: "Coming Soon",
        description: "So many project are in coming soon",
      },
    ],
  },
  {
    name: "Wordpress",
    iconName: RiWordpressFill,
    projects: [
      {
        title: "Top 5 Nepal",
        description:
          "It's blogging app for comparing the things between things ",
        visitLink: "https://top5nepal.com",
      },
    ],
  },
];

export default projectData;
