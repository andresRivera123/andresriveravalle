import { useEffect, useState } from "react";
import "./assets/styles/body.css";
import "./App.css";
import "./assets/styles/tabs.css"
import { tabs } from "./assets/utils/tabsDetails";
import { PacmanLoader } from "react-spinners";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Achievements from "./assets/components/Achievements";
import { Toolbox } from "./assets/components/Toolbox";
import { Hero } from "./assets/components/hero";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="body__container">
      {loading ? (
        <div className="pacman__container">
          <PacmanLoader
            color={"#80574e"}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <header className="header">
            <div className="tabs">
              <div className="tabs__container ">
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    className={`tab ${
                      index === activeTab ? "active" : ""
                    } tab__link`}
                    onClick={() => handleTabClick(index)}
                    href={tab.href}
                  >
                    <img
                      src={tab.icon}
                      alt={tab.label}
                      className="tab-icon"
                      width="24"
                      height="24"
                    />
                    <span className="subtitle tab__label">{tab.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </header>
          <main className="main">
            <section className="hero__container">
              <Hero />
            </section>
            <section id="achievements" className="container__section">
              <h2 className="title">Experience</h2>
              <Achievements />
            </section>
            <section id="about" className="container__section">
              <h2 className="title">Who is Andrés?</h2>
              <About />
            </section>
            <section className="container__section">
              <h2 className="title">Toolbox</h2>
              <Toolbox />
            </section>
            <section id="projects" className="container__section">
              <h2 className="title">Projects</h2>
              <Projects />
            </section>

          </main>
        </>
      )}
    </div>
  );
}

export default App;
