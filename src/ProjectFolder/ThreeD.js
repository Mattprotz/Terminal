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
      console.log("Selected Artwork:", selectedArtwork);
      console.log("Image URLs: ", selectedArtwork.imageUrls);
    }
  }, [selectedArtwork]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-view">
            <span className="view-title">3D Projects</span>
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
                  src={`${process.env.PUBLIC_URL}${imageUrl}`}
                  key={index}
                  alt={`${selectedArtwork.title}_${index}`}
                  className="scroll-image"
                  onError={(e) => {
                      console.log(`Error loading image: ${imageUrl}`); 
                  }}
              />
                ))}
              </div>
            <div className="art-details">
              <p>{selectedArtwork.description}</p>
              <p>{selectedArtwork.medium}</p>
              <p>{selectedArtwork.year}</p>
            </div>
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

export default ThreeD;
