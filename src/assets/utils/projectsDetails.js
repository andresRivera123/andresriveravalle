import gissImage from "../images/projects/giss.webp";
import alibabaImage from "../images/projects/alibaba.webp";
import htmlIcon from "../images/toolbox/tags/html.svg";
import cssIcon from "../images/toolbox/tags/css.svg";
import jsIcon from "../images/toolbox/tags/js.svg";
import reactIcon from "../images/toolbox/tags/react.svg";
import materialIcon from "../images/toolbox/tags/materialui.svg";
import unityIcon from "../images/toolbox/tags/unity.svg";
export const projectsDetails = [
  {
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
        name: "Github",
        urlText: "View source code",
        url: "https://github.com/andresRivera123/Giss-Cleaning-Service-Page",
        
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
        name: "Github",
        url: "https://github.com/andresRivera123/Alibaba-Game",
      },
    ],
  },
];
