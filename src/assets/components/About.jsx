import "../styles/about.css";
import meImage from "../images/about-me.webp";
import archivePDF from "../../../CV.pdf";
import "../logic/scrollNav";

import { buttonPrincipal } from "./buttonPrincipal";
export default function About() {
  return (
    <>
      <div className="about__who">
        <div className="who__images">
          <img
            src={meImage}
            alt="who is Andy?"
            className="who__image"
            width="650"
            height="240"
          />
        </div>
        <div className="who__texts">
          <p className="text text__mb">
            🐱‍💻 Greetings, everyone calls me Andy I&#39;m a
            <span className="who__span"> software engineer </span>
            passionate about
            <span className="who__span"> frontend development.</span>
          </p>
          <p className="text ">
            I enjoy creating
            <span className="who__span"> responsive websites </span>with
            excellent accessibility, performance, and SEO, ensuring optimization
            across devices and quality for each user.
          </p>
          <p className="text text__mb">
            I use my knowledge in <span className="who__span">UX</span> to
            develop my projects, for me it is important to observe how people
            interact with my applications, understanding their challenges and
            receiving recommendations.
          </p>

          <p className="text text__mb">
            Outside of my professional life, I find joy and creativity in
            crafting <span className="who__span"> 2D video games </span> as a
            hobby.
          </p>
          <div class="who__cta">
            {buttonPrincipal(archivePDF, "", "View full resume", true)}
          </div>
        </div>
      </div>
    </>
  );
}
