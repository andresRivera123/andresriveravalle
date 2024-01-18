import imageLogo from "../images/logo.jpg";
import { listIcons } from "../utils/listIconSocial";
import "../styles/hero.css";
export const Hero = () => {
  return (
    <>
      <img src={imageLogo} alt="Image logo" className="hero__logo-out" />
      <div className="hero__information">
        <img src={imageLogo} alt="Image logo" className="hero__logo" />
        <h1 className="hero__title">Andrés Rivera Valle</h1>
        <h2 className="hero__subtitle">
          Software Engineer, frontend developer, UX/UI designer
        </h2>
        <p className="hero__text">
          My main focus is in the UX/UI field, where I combine my frontend
          experience with my video game development skills.
        </p>
        <footer className="hero__icons">
          {listIcons.map((icon) => (
            <a href={icon.url} className="icons__link" target="_blank">
              <img
                className="icons__item"
                src={icon.image}
                alt={icon.name}
                width="37"
                height="37"
              />
             
            </a>
          ))}
        </footer>
      </div>
    </>
  );
};
