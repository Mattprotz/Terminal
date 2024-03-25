import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap/Modal";

import artList from "./Art";

function ThreeD() {
  const [show, setShow] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleClick = (title) => {
    setShow(false);
    const artwork = artList.find((item) => item.title === title);
    setSelectedArtwork(artwork);
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
          <span className="projectList-header">3D Projects:</span>
          {artList.map((artwork, index) => (
            <li
              key={index}
              className="work-list"
              onClick={() => handleClick(artwork.title)}
            >
              {artwork.title}
            </li>
          ))}
        </ul>
        {selectedArtwork &&(
        <div className="work-view">
          <p>{selectedArtwork.title}</p>
          <img src={selectedArtwork.imageUrl} alt={selectedArtwork.title} style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{selectedArtwork.description}</p>
          <p>{selectedArtwork.medium}</p>
          <p>{selectedArtwork.year}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default ThreeD;
