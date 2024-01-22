import "../styles/projects.css";
import { projectsDetails } from "../utils/projectsDetails";
import {buttonPrincipal} from "../components/buttonPrincipal"

export default function Projects() {
  return (
    <>
      <div className="project__list">
        {projectsDetails.map((project, index) => (
          <div className="project__container" key={index}>
            <div className="project__details">
              <h2 className="project__title">{project.name}</h2>

              <p className="project__text">{project.description}</p>
              <div className="project__tags">
                <p className="tags__title">Tools: </p>
                {project.tags.map((tag) => (
                  <div key={tag.alt}>
                    <img className="tags__img" src={tag.img} alt={tag.alt} />
                  </div>
                ))}
              </div>
              <img
                src={project.image}
                className="project__image-img"
                alt={`${project.name} image`}
              />
              <p className="tags__title">Links: </p>
              {project.url.map((url) => (
                buttonPrincipal(url.url, url.icon,url.urlText, false)
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
