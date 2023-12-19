import { useState } from "react";
import "../styles/projects.css";
import { projectsDetails } from "../utils/projectsDetails";
import { ButtonCategory, ProjectsList } from "./buttonsCategory";

export default function Projects() {
  const allCategories = [
    "All",
    ...new Set(projectsDetails.map((project) => project.category)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [projects, setProjects] = useState(projectsDetails);
  const [classButton, setClassButon] = useState("active");

  const filterCategory = (category) => {
    if (category === "All") {
      return setProjects(projectsDetails);
    }
    const filterProjects = projectsDetails.filter(
      (project) => project.category === category
    );
    return setProjects(filterProjects);
  };

  const activeButton = () => {};

  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="projects__section">
        <ButtonCategory
          categories={categories}
          filterCategory={filterCategory}
        />
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
