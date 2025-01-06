import linkedinImage from "../images/projects/linkedin.webp";
import adoptaImage from "../images/projects/adopta-valenciano.webp";
import chefArmandoImage from "../images/projects/chef-armando-rivera.webp";
import repliverseImage from "../images/projects/repliverse.webp";
import alibabaImage from "../images/projects/alibaba.webp";
import htmlIcon from "../images/toolbox/tags/html.svg";
import cssIcon from "../images/toolbox/tags/css.svg";
import jsIcon from "../images/toolbox/tags/js.svg";
import reactIcon from "../images/toolbox/tags/react.svg";
import AstroIcon from "../images/toolbox/astro.svg";
import TailwindIcon from "../images/toolbox/tailwind.svg";
import materialIcon from "../images/toolbox/tags/materialui.svg";
import figma from "../images/toolbox/figma.svg";
import unityIcon from "../images/toolbox/tags/unity.svg";
import githubIcon from "../images/links/github.svg";
import webIcon from "../images/web.svg";
import playIcon from "../images/play.svg";
export const projectsDetails = [
  {
    name: "Chef Armando Rivera",
    description:
      "Learn about my father's career Chef Armando Rivera, and his work around the world. The website features a modern design, optimized photos, intuitive navigation, dynamic blog paths and a focus on user experience, responsiveness and SEO positioning.",
    tags: [
      { img: htmlIcon, alt: "HTML icon" },
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
      { img: AstroIcon, alt: "Astro icon" },
      { img: TailwindIcon, alt: "Astro icon" },
    ],
    category: "Web",
    image: chefArmandoImage,
    url: [
      {
        urlText: "View code",
        icon: githubIcon,
        url: "https://github.com/andresRivera123/chef-armando-rivera",
      },
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://chef-armando-rivera.vercel.app/",
      },
    ],
  },
  {
    name: "Adopta un Valenciano",
    description:
      "Together with an international team of designers and developers we created a website to connect volunteers with families and people affected by the Dana in Valencia. My role was to lead the web design and collaborate with the frontend team.",
    tags: [
      { img: htmlIcon, alt: "HTML icon" },
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
      { img: reactIcon, alt: "React icon" },
      { img: figma, alt: "Figma icon" },
    ],
    category: "Web",
    image: adoptaImage,
    url: [
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://adoptaunvalenciano.es/",
      },
    ],
  },
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
    name: "Deupload",
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
