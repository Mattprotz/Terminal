import React, { useState } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import External from "./pages/External";
import Home from "./pages/Home";

import ThreeD from "./ProjectFolder/ThreeD";
import Code from "./ProjectFolder/Code";

export default function App() {
  const [audio] = useState(new Audio("./click.mp4"));

  const playAudio = () => {
    if (audio.src) {
      audio.play();
    }
  };

  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/external">External Links</Link>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img className="image" alt="skull-art" src="/skull.png" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="view-container">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/external" element={<External />} />

                  <Route path="/ProjectFolder/ThreeD" element={<ThreeD />} />
                  <Route path="/ProjectFolder/Code" element={<Code />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
