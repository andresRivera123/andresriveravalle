import "../styles/achievements.css";
import codeIcon from "../images/code.svg";
import uxIcon from "../images/uxui.svg";
import gameIcon from "../images/game.svg";
import Timeline from "./Timeline";
import TimelineAchievements from "./Timeline";
export default function Achievements() {
  return (
    <section className="achievements">
      <h2 className="title">Achievements</h2>
      <section className="achievements__section">
        <TimelineAchievements/>
      </section>
    </section>
  );
}
