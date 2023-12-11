import "../styles/achievements.css";
import codeIcon from "../images/code.svg";
import uxIcon from "../images/uxui.svg";
import gameIcon from "../images/game.svg";
export default function Achievements() {
  return (
    <section className="achievements">
      <h2 className="title">Achievements</h2>
      <section className="achievements__section">
        <div className="timeline">
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <div className="content__title">
              <img className="content__icon" src={uxIcon} alt="UX/UI Icon" />
              <p
                className="timeline__text text"
                style={{ color: "#666666" }}
              >{`(2023)`}</p>
            </div>
            <h3 className="timeline__text text">UX/UI designer</h3>

            <p className="timeline__text text  text__mb">
              Designing with the user in mind improves the user's experience in
              my applications.
            </p>
            <a
              href="https://www.credential.net/2fd01ae1-d247-4929-8978-50def1a50353#gs.20eg49"
              target="_blank"
              className="text who__link text__interactive"
            >
              View certificate
            </a>
          </div>
          <div className="timeline-component timeline-content">
            <div className="content__title">
              <img className="content__icon" src={codeIcon} alt="Code Icon" />
              <p
                className="timeline__text text"
                style={{ color: "#666666" }}
              >{`(2023)`}</p>
            </div>
            <h3 className="timeline__text text">
              Graduated in software engineering
            </h3>

            <p className="timeline__text text">
              I learned the structures, tools, techniques and phases to build
              applications.
            </p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className=" timeline-component timeline-content">
            <div className="content__title">
              <img className="content__icon" src={gameIcon} alt="UX/UI Icon" />
              <p
                className="timeline__text text"
                style={{ color: "#666666" }}
              >{`(2023)`}</p>
            </div>
            <h3 className="timeline__text text">
              2nd place - Videogame development competition
            </h3>
            <p className="timeline__text text  text__mb">GamerFest/Espe-l</p>
          </div>
          <div className="timeline-component timeline-content">
            <div className="content__title">
              <img className="content__icon" src={gameIcon} alt="Code Icon" />
              <p
                className="timeline__text text"
                style={{ color: "#666666" }}
              >{`(2022)`}</p>
            </div>
            <h3 className="timeline__text text">
              1st place - Videogame development competition
            </h3>
            <p className="timeline__text text">GamerFest/Espe-l</p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
        </div>
      </section>
    </section>
  );
}
