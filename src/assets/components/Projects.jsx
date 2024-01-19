import "../styles/projects.css";
import { projectsDetails } from "../utils/projectsDetails";

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
                {project.tags.map((tag, tagIndex) => (
                  <div key={tagIndex}>

                    <p  className="text tag">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <img
                src={project.image}
                className="project__image-img"
                alt={`${project.name} image`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
