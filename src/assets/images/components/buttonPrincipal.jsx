import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/buttonPrincipal.css";
export const buttonPrincipal = (link, icon, text, iconRight) => {
  return (
    <a
      className="button__principal"
      onClick={link}
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      {icon ? (
        <img
          className="button__principal-icon"
          src={icon}
          alt={text + " button"}
        />
      ) : (
        <></>
      )}
      <p>{text}</p>
      {iconRight ? <ArrowForwardIcon fontSize="large" /> : <></>}
    </a>
  );
};
