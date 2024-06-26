import React from "react";
import { Route, Routes, Link, BrowserRouter, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import External from "./pages/External";
import Home from "./pages/Home";
import ThreeD from "./ProjectFolder/ThreeD";
import Code from "./ProjectFolder/Code";


export default function App() {

  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <div className="image-container">
            <img src="skull.png" className="image" alt="skull-art"/>
          </div>
          <Link to="/home">HOME</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/external">EXTERNAL LINKS</Link>
        </div>

        <div className="view-container">
          <div className="view-body">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/external" element={<External />} />
              <Route path="/ProjectFolder/ThreeD" element={<ThreeD />} />
              <Route path="/ProjectFolder/Code" element={<Code />} />
              <Route path="/Terminal" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
