import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import aboutIcon from "../images/following.svg"
import projectsIcon from "../images/projects.svg"
import achievementsIcon from "../images/achievements.svg"
import contactIcon from "../images/contact.svg"

export const tabs = [
  {
    label: "About me",
    content: <About/>,
    icon: aboutIcon,
  },
  {
    label: "Projects",
    content: <Projects/>,
    icon: projectsIcon,
  },
  {
    label: "Achievements",
    content: <Achievements/>,
    icon: achievementsIcon,
  },
  {
    label: "Contact",
    content: <Contact/>,
    icon: contactIcon,
  },
];
