import React, { useState } from "react";
import { Link } from "react-router-dom";
import codingProjects from "./codingProjects";

function Code() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (title) => {
    const codeWork = codingProjects.find((item) => item.title === title);
    setSelectedProject(codeWork);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="view-title">
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
          <ul className="list-view">
            <span className="projectList-header">Coding Projects:</span>
            {codingProjects.map((project, index) => (
              <li
                key={index}
                className="work-list"
                onClick={() => handleClick(project.title)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          {selectedProject && (
            <div className="work-view">
              <p className="art-title">{selectedProject.title}</p>
              <div className="image-scroll-container">
                {selectedProject.imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`${selectedProject.title}_${index}`}
                    style={{ maxWidth: "22%", maxHeight:"10%" }}
                    className="scroll-image"
                  />
                ))}
              </div>
              <p>{selectedProject.description}</p>
              <a
                href={selectedProject.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                Github Repository
              </a>
              <a
                href={selectedProject.deployedApp}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                Deployed Application
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Code;
