import "../styles/about.css";
import meImage from "../images/me.png";
import gitIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import rightIcon from "../images/cater-right.svg";

export default function About() {
  return (
    <section className="about">
      <h2 className="title">Who is Andres?</h2>
      <div className="about__who">
        <div className="who__images">
          <div className="image">
            <img src={meImage} alt="who is Andy?" className="who__image" />
          </div>
          <footer className="who__icons">
            <a href="https://github.com/andresRivera123" target="_blank">
              <img src={gitIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-andres-rivera-valle/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
            <a
              href="https://instagram.com/andyyatusaaa?igshid=MTNiYzNiMzkwZA=="
              target="_blank"
            >
              <img src={instagramIcon} alt="Instragram icon" />
            </a>
          </footer>
        </div>
        <div className="who__texts">
          <div>
            <p className="text text__mb">
              🐱‍💻 Greetings, everyone calls me Andy I'm a
              <strong> software engineer </strong>
              passionate about <strong> frontend development </strong>.
            </p>
            <p className="text text__mb">
              I enjoy observing how people interact with my applications,
              understanding their challenges, and receiving recommendations.
            </p>
            <p className="text text__mb">
              I enjoy crafting <strong> responsive websites </strong> that
              function seamlessly on all devices for a smooth user experience.
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
          </div>
          <a href="" className="text who__link text__interactive">
            View full resume
            <img src={rightIcon} alt="View full resume link" />
          </a>
        </div>
      </div>
    </section>
  );
}
