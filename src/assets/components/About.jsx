import "../styles/about.css";
import meImage from "../images/me.webp";
import rightIcon from "../images/cater-right.svg";
import archivePDF from "../../../CV.pdf";
import { toolsDetails } from "../utils/toolsDetails";
import "../logic/scrollNav";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function About() {
  return (
    <>
      <div className="about__who">
        <div className="who__images">
          <img
            src={meImage}
            alt="who is Andy?"
            className="who__image"
            width="400"
            height="240"
          />
        </div>
        <div className="who__texts">
          <p className="text text__mb">
            🐱‍💻 Greetings, everyone calls me Andy I'm a
            <strong> software engineer </strong>
            passionate about <strong> frontend development.</strong>
          </p>
          <p className="text text__mb">
            I enjoy observing how people interact with my applications,
            understanding their challenges, and receiving recommendations.
          </p>
          <p className="text text__mb">
            I enjoy creating <strong> responsive websites </strong>with
            excellent accessibility, performance, and SEO, ensuring optimization
            across devices and quality for each user.
          </p>
          <p className="text text__mb">
            Integrating <strong> Design Thinking </strong> into my development
            process allows me to creatively address problems, prototype ideas,
            and continuously iterate to achieve user-centered and visually
            striking solutions.
          </p>
          <p className="text ">
            Outside of my professional life, I find joy and creativity in
            crafting <strong> 2D video games </strong> as a hobby.
          </p>
          <a href={archivePDF} target="_blank" className="text who__link">
            View full resume
            <ArrowForwardIcon fontSize="large" />
          </a>
        </div>
      </div>
    </>
  );
}
