import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";
import ThreeD from "../ProjectFolder/ThreeD";
import Code from "../ProjectFolder/Code";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <div className="col-md-4">
        <Link to="/projects" className="view-title">Projects</Link>

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
        {selectedProject === "3D" && <ThreeD />}
        {selectedProject === "Code" && <Code />}
      </div>
    </div>
  );
}
