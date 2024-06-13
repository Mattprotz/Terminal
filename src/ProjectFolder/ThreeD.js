import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import artList from "./Art";

function ThreeD() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleClick = (title) => {
    const artwork = artList.find((item) => item.title === title);
    setSelectedArtwork(artwork);
    console.log("Selected Artwork: ", artwork);
  };

  useEffect(() => {
    if (selectedArtwork) {
      console.log("Selected Artwork (useEffect): ", selectedArtwork);
      console.log("Image URLs: ", selectedArtwork.imageUrls);
    }
  }, [selectedArtwork]);

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
        </div>
        <div className="col-md-6">
          {selectedArtwork && (
            <div className="work-view">
              <p className="art-title">{selectedArtwork.title}</p>
              <div className="image-scroll-container">
                {selectedArtwork.imageUrls && selectedArtwork.imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`${selectedArtwork.title}_${index}`}
                    style={{ maxWidth: "70%", height: "auto" }}
                    className="scroll-image"
                  />
                ))}
              </div>
              <p>{selectedArtwork.description}</p>
              <p>{selectedArtwork.medium}</p>
              <p>{selectedArtwork.year}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ThreeD;
