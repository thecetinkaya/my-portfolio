import React, { useState } from "react";
import  projectsData  from "../data/projectsData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    if (category === "all") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === category
      );
      setProjects(filteredProjects);
    }
    setSelectedCategory(category);
  };

  return (
    <div className="projects">
      <h1 className="text-3xl mb-4 text-white">Projects</h1>
    <div className="flex justify-center items-center h-full">
        <div className="text-center">
      
      <div className="space-x-4">
        <button className="project-button" onClick={() => handleCategoryClick("all")}>Tümü</button>
        <button className="project-button" onClick={() => handleCategoryClick("react")}>React</button>
        <button className="project-button" onClick={() => handleCategoryClick("php")}>PHP</button>
        <button className="project-button" onClick={() => handleCategoryClick("cpp")}>C++</button>
        <button className="project-button" onClick={() => handleCategoryClick("csharp")}>C#</button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <p className="text-xl">{project.title}</p>
            <img src={project.image} />
            <p className="mt-4">{project.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default Projects;
