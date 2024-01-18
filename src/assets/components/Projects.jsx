import { useState } from "react";
import "../styles/projects.css";
import { projectsDetails } from "../utils/projectsDetails";
import { ButtonCategory, ProjectsList } from "./buttonsCategory";

export default function Projects() {
  // const allCategories = [
  //   "All",
  //   ...new Set(projectsDetails.map((project) => project.category)),
  // ];
  // const [categories, setCategories] = useState(allCategories);
  // const [projects, setProjects] = useState(projectsDetails);
  // const [classButton, setClassButon] = useState("active");

  // const filterCategory = (category) => {
  //   if (category === "All") {
  //     return setProjects(projectsDetails);
  //   }
  //   const filterProjects = projectsDetails.filter(
  //     (project) => project.category === category
  //   );
  //   return setProjects(filterProjects);
  // };

  // const activeButton = () => {};

  return (
    <>
      {/* <div className="projects__section">
        <ButtonCategory
          categories={categories}
          filterCategory={filterCategory}
        />
        <ProjectsList projects={projects} />
      </div> */}
      <div className="project__list">
        {projectsDetails.map((project, index) => (
          <div className="project__container" key={index}>
            <div className="project__details">
              <h2 className="project__title">{project.name}</h2>

              <p className="text">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="text tag">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={project.image}
              className="project__image-img"
              alt={`${project.name} image`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
