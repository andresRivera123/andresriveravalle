import { useState } from "react";

export const ButtonCategory = ({ categories, filterCategory }) => {

  return (
    <nav className="category__nav">
      <ul className="category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category__button text `}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export const ProjectsList = ({ projects }) => {
  return (
    <div className="project__list">
      {projects.map((project, index) => (
        <div className="project__container" key={index}>
          <img
            src={project.image}
            className="project__image-img"
            alt={`${project.name} image`}
          />

          <div className="project__details">
            <h2 className="subtitle">{project.name}</h2>
            <div className="project__tags">
              {project.tags.map((tag, tagIndex) => (
                <p key={tagIndex} className="text tag">
                  {tag}
                </p>
              ))}
            </div>
            <p className="text">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
