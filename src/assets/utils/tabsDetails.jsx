
import Achievements from "../components/Achievements";

import Projects from "../components/Projects";
import aboutIcon from "../images/about2.svg"
import projectsIcon from "../images/project.svg"
import achievementsIcon from "../images/achievement.svg"
import About from "../components/About";

export const tabs = [
  {
    label: "Experience",
    content: <Achievements/>,
    icon: achievementsIcon,
    href: "#achievements"
  },
  {
    label: "About me",
    content: <About/>,
    icon: aboutIcon,
    href: "#about"
  },
  {
    label: "Projects",
    content: <Projects/>,
    icon: projectsIcon,
    href: "#projects"
  },

];
