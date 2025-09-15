import linkedinImage from "../images/projects/linkedin.webp";
import pgAsesorias from "../images/projects/pg-asesorias.webp"
import adoptaImage from "../images/projects/adopta-valenciano.webp";
import chefArmandoImage from "../images/projects/chef-armando-rivera.webp";
import repliverseImage from "../images/projects/repliverse.webp";
import alibabaImage from "../images/projects/alibaba.webp";
import htmlIcon from "../images/toolbox/tags/html.svg";
import cssIcon from "../images/toolbox/tags/css.svg";
import jsIcon from "../images/toolbox/tags/js.svg";
import reactIcon from "../images/toolbox/tags/react.svg";
import astroIcon from "../images/toolbox/astro.svg";
import tailwindIcon from "../images/toolbox/tailwind.svg";
import wordpressIcon from "../images/toolbox/wordpress.svg"
import materialIcon from "../images/toolbox/tags/materialui.svg";
import figma from "../images/toolbox/figma.svg";
import unityIcon from "../images/toolbox/tags/unity.svg";
import githubIcon from "../images/links/github.svg";
import webIcon from "../images/web.svg";
import playIcon from "../images/play.svg";
export const projectsDetails = [
  {
    name: "PG Asesorías",
    description:
      "A management system developed to digitize the operations of PG asesorías in Santiago de Chile. The web application provides a dynamic and searchable database of all vehicles serviced by the workshop, streamlining their management with the ability to create new records and update existing information. The key feature is the integration with the Amelia API for appointment management, creating a direct bridge between the automotive services offered and client scheduling.",
    tags: [
      { img: wordpressIcon, alt: "Wordpress icon" },
      { img: figma, alt: "Figma icon"}
    ],
    category: "Web",
    image: pgAsesorias,
    url: [
      {
        urlText: "View web",
        icon: webIcon,
        url: "https://pgasesorias.cl/",
      },
    ],
  },
  {
    name: "PG Asesorías",
    description:
      "Learn about my father's career Chef Armando Rivera, and his work around the world. The website features a modern design, optimized photos, intuitive navigation, dynamic blog paths and a focus on user experience, responsiveness and SEO positioning.",
    tags: [
      { img: cssIcon, alt: "CSS icon" },
      { img: jsIcon, alt: "Javascript icon" },
      { img: astroIcon, alt: "Astro icon" },
      { img: tailwindIcon, alt: "Astro icon" },
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
