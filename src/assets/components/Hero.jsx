import meLogo from "../images/me.webp";
import "../styles/hero.css";
import gitIcon from "../images/links/github.svg";
import linkedinIcon from "../images/links/linkedin.svg";
import mailIcon from "../images/links/mail.svg";
import { buttonPrincipal } from "./buttonPrincipal";
export const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:carlosandresriveravalle@gmail.com";
  };

  return (
    <>
      <img src={meLogo} alt="Image logo" className="hero__logo" />
      <div className="hero__information">
        <h1 className="hero__title">Andrés Rivera Valle</h1>
        <h2 className="hero__subtitle">
          Software Engineer{" "}
          <span style={{ color: "var(--green-color)" }}>
            Frontend developer
          </span>
          <span style={{ color: "var(--blue-color)" }}> UX/UI designer </span>
        </h2>

        <footer className="hero__icons">
          {buttonPrincipal(
            "https://github.com/andresRivera123",
            gitIcon,
            "Github",
            false
          )}
          {buttonPrincipal(
            "https://www.linkedin.com/in/carlos-andres-rivera-valle/",
            linkedinIcon,
            "Linkedin",
            false
          )}
          {buttonPrincipal(handleEmailClick, mailIcon, "Send mail", false)}
        </footer>
      </div>
    </>
  );
};
