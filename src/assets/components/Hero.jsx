import imageLogo from "../images/logo.jpg";
import "../styles/hero.css";
import gitIcon from "../images/links/github.svg";
import linkedinIcon from "../images/links/linkedin.svg";
import mailIcon from "../images/links/mail.svg";

export const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:carlosandresriveravalle@gmail.com";
  };

  return (
    <>
      <img src={imageLogo} alt="Image logo" className="hero__logo-out" />
      <div className="hero__information">
        <img src={imageLogo} alt="Image logo" className="hero__logo" />
        <h1 className="hero__title">Andrés Rivera Valle</h1>
        <h2 className="hero__subtitle">
          Software Engineer{" "}
          <span style={{ color: "var(--green-color)" }}>
            Frontend developer
          </span>
          <span style={{ color: "var(--blue-color)" }}> UX/UI designer </span>
        </h2>
        <p className="hero__text">Seeking absolute creativity </p>

        <footer className="hero__icons">
          <a
            href="https://github.com/andresRivera123"
            className="icons__link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="icons__item"
              src={gitIcon}
              alt="Github icon"
              width="40"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-andres-rivera-valle/"
            rel="noreferrer"
            className="icons__link"
            target="_blank"
          >
            <img
              className="icons__item"
              src={linkedinIcon}
              alt="Linkedin icon"
              width="40"
            />
          </a>

          <img
            className="icons__item"
            src={mailIcon}
            alt="Linkedin icon"
            width="40"
            onClick={handleEmailClick}
          />
        </footer>
      </div>
    </>
  );
};
