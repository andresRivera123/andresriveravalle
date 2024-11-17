import linkedinImage from "../images/projects/linkedin.jpg"
import repliverseImage from "../images/projects/repliverse.jpg"
import alibabaImage from "../images/projects/alibaba.webp";
import htmlIcon from "../images/toolbox/tags/html.svg";
import cssIcon from "../images/toolbox/tags/css.svg";
import jsIcon from "../images/toolbox/tags/js.svg";
import reactIcon from "../images/toolbox/tags/react.svg";
import materialIcon from "../images/toolbox/tags/materialui.svg";
import unityIcon from "../images/toolbox/tags/unity.svg";
import githubIcon from "../images/links/github.svg";
import webIcon from "../images/web.svg"
import playIcon from "../images/play.svg"
export const projectsDetails = [
  {
    name: "LinkedIn Replica",
    description:
      "Currently replicating the LinkedIn home page (Second web for repliverse). This project is still under development.",
    tags: [
      { img: htmlIcon, alt: "HTML icon" },
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
    ],
    category: "Web",
    image: linkedinImage,
    url: [
      {
        urlText: "View code",
        icon: githubIcon,
        url: "https://github.com/andresRivera123/repliverse/tree/main/linkedin",
      },
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://linkedin-inky.vercel.app/", 
      },
    ],
  },
  {
    name: "Deupload, replicating web designs.",
    description:
      "Taking as inspiration the original design of Deupload created by the author Conikal, I made a replica of the main page. First replica project for repliverse (future web design replica site).",
    tags: [
      { img: htmlIcon, alt: "HTML icon" },
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
    ],
    category: "Web",
    image: repliverseImage,
    url: [
      {
        urlText: "View code",
        icon: githubIcon,
        url: "https://github.com/andresRivera123/repliverse/tree/main/deupload",
      },
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://deupload-nine.vercel.app/",
      },
    ],
  },
  {
    name: "Alibaba - Pixelart Platform Game",
    description:
      "Second place in the videogame development contest at Gamerfest 2023 | Espe-L. Developed and designed with Unity, and free assets from the community.",
    tags: [{ img: unityIcon, alt: "Unity icon" }],
    category: "Videogames",
    image: alibabaImage,
    url: [
      {
        urlText: "View code",
        icon: githubIcon,
        url: "https://github.com/andresRivera123/Alibaba-Game",
      },
      {
        urlText: "Play now",
        icon: playIcon,
        url: "https://rivera-del-valle.itch.io/ali-baba",
      },
    ],
  },
];
