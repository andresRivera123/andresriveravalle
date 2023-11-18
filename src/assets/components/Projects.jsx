import "../styles/projects.css";
import { projectsDetails } from "../utils/projectsDetails";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      {projectsDetails.map((project, index) => (
        <div className="project__container" key={index}>
          <img
            src={project.image}
            className="project__image-img"
            alt={`${project.name} image`}
          />

          <div className="project__details">
            <h2 className="subtitle">{project.name}</h2>
            <p className="text">{project.description}</p>
            <div className="project__tags">
              {project.tags.map((tag, tagIndex) => (
                <p key={tagIndex} className="text tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
