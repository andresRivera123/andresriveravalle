import "./App.css";
import imageLogo from "./assets/images/LogoImage.png";
import "./assets/styles/body.css";
function App() {
  return (
    <div className="body__container">
      <header className="header">
        <div className="header__container">
          <img src={imageLogo} alt="Image logo" className="header__logo"/>
          <div className="header__title">
            <h1 className="title__name">Andres Rivera Valle</h1>
            <h2 className="title text__interactive">
              Software Engineer, frontend developer, UX/UI designer
            </h2>
            <p className="text">
              My main focus is in the UX/UI field, where I combine my frontend
              experience with my video game development skills.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
