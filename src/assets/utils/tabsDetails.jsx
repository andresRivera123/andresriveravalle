import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import aboutIcon from "../images/about2.svg";
import projectsIcon from "../images/project.svg";
import achievementsIcon from "../images/achievement.svg";
import About from "../components/About";
import contactIcon from "../images/contact.svg"

export const tabs = [
  {
    label: "Experience",
    content: <Achievements />,
    icon: achievementsIcon,
    href: "#experience",
  },
  {
    label: "Projects",
    content: <Projects />,
    icon: projectsIcon,
    href: "#projects",
  },
  {
    label: "About me",
    content: <About />,
    icon: aboutIcon,
    href: "#about",
  },
  {
    label: "Contact",
    icon: contactIcon,
    href: "#contact",
  },
];
