import gissImage from "../images/projects/giss.webp";
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
  /*{
    name: "Website for Giss cleaning services",
    description:
      "Website to advertise the cleaning service offered by Giss in New Jersey, USA. Requirements gathering, figma designs and validation by the client, development with React and site deployment.",
    tags: [
      { img: htmlIcon, alt: "HTML icon" },
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
      { img: reactIcon, alt: "React icon" },
      { img: materialIcon, alt: "MaterialUI icon" },
    ],
    category: "Web",
    image: gissImage,
    url: [
      {
        urlText: "View code",
        icon: githubIcon,
        url: "https://github.com/andresRivera123/Giss-Cleaning-Service-Page",
      },
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://andresrivera123.github.io/Giss-Cleaning-Service-Page/",
      },
    ],
  },*/
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
        url: "https://github.com/andresRivera123/repliverse/tree/82f38f1f1974985297b0c4100b4b356b2393ed4f/src/assets/pages/deupload",
      },
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://deupload-repliverse.netlify.app/",
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
