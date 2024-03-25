import React, { useState } from "react";
import { Link } from "react-router-dom";
import codingProjects from "./codingProjects";

function Code() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);

    console.log(project.title);
  };
  return (
    <div>
      <div className="view-header">
        Projects
        <div className="project-tabs">
          <Link to="/ProjectFolder/ThreeD">
            <button className="project-button">3D</button>
          </Link>
          <Link to="/ProjectFolder/Code">
            <button className="project-button">Code</button>
          </Link>
        </div>
      </div>

      <div className="project-body">
        <ul>
        <span className="projectList-header">Coding Projects:</span>
          {codingProjects.map((project, index) => (
            <li
              key={index}
              className="work-list"
              onClick={() => handleClick(project)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Code;
