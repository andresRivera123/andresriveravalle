import "../styles/footer.css";
import logoFooter from "../images/logoCircle.png";
export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">© 2024 Andrés Rivera Valle.</p>

      <img className="footer_img" src={logoFooter} alt="Logo footer" />
    </div>
  );
};
