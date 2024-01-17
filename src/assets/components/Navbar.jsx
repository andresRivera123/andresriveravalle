import imageLogo from "../images/logo-nav.png";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#about">
        
        <img src={imageLogo} alt="Image logo" className="nav__logo" />
      </a>
      <ul className="nav__links">
        <li>
          <a className="text nav__link" href="#about">
            Experiencia
          </a>
        </li>
        <li>
          <a className="text nav__link" href="#">
            Proyectos
          </a>
        </li>
        <li>
          <a className="text nav__link" href="#">
            Sobre mí
          </a>
        </li>
        <li>
          <a className="text nav__link" href="#">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
