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
          <ul className="list-view">
            <span className="view-title">Coding Projects:</span>
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
            <div className="code-view">
              <p className="art-title">{selectedProject.title}</p>
              <p className="code-desc">{selectedProject.description}</p>
              <div>
                {selectedProject.imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}${imageUrl}`}
                    alt={`${selectedProject.title}_${index}`}
                    className="code-image"
                  />
                ))}
              </div>
              <p className="code-desc">{selectedProject.features}</p>

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
        <div className="col-md-1">
          <Link to="/Projects">
            <button className="back-button">BACK</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Code;
