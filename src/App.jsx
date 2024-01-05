import { useEffect, useState } from "react";
import "./App.css";
import Tabs from "./assets/components/Tabs";
import imageLogo from "./assets/images/logo.jpg";
import "./assets/styles/body.css";
import { tabs } from "./assets/utils/tabsDetails";
import { PacmanLoader } from "react-spinners";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
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
        <div>
          <header className="header">
            <div className="header__container">
              <img src={imageLogo} alt="Image logo" className="header__logo" />
              <div className="header__title">
                <h1 className="title__name">Andrés Rivera Valle</h1>
                <h2 className="title text__interactive">
                  Software Engineer, frontend developer, UX/UI designer
                </h2>
                <p className="text">
                  My main focus is in the UX/UI field, where I combine my
                  frontend experience with my video game development skills.
                </p>
              </div>
            </div>
          </header>
          <main className="main">
            <Tabs tabs={tabs} />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
