import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id={projects.id}>
        {projects.map((projects)=>
                   <ProjectItem
                   key={projects.id}
                   name={projects.name}
                   technologies={projects.technologies}
                   about={projects.about}
                 ></ProjectItem>)}
        </div>
    </div>
  );
}

export default ProjectList;
