import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Jet Engine Design – Onshape',
    description: `Using Onshape, I designed a fully detailed jet engine model focused on both internal turbine dynamics and external structural integrity. The project involved CAD modeling of rotating blades, combustion chambers, shaft integration, and realistic constraints for simulation of operation under varying airflow conditions. This work served as a visualization and demonstration model for basic jet propulsion theory and was used for mechanical analysis.`,
    image: '/reactapp/public/jetengine.PNG',
  },
  {
    title: 'Fixed-Wing RC Plane – SolidWorks',
    description: `Designed and simulated a fixed-wing aircraft using SolidWorks. This project involved structural modeling of fuselage, wings, tail assembly, and motor mounts with considerations for CG balancing and aerodynamic drag reduction. The design targeted long-range flights with payload capacity. Simulations included stress analysis on the fuselage and airfoil performance under wind tunnel conditions.`,
    image: '/reactapp/public/fixwing2.PNG',
  },
  {
    title: 'Autonomous Payload Drone – Teknofest Turkey',
    description: `As part of the Teknofest Turkey competition, I led the design and implementation of an autonomous quadcopter for precision payload delivery. The drone utilized a Pixhawk 4 flight controller integrated with GPS, ultrasonic sensors, and telemetry modules. Its mission included autonomous waypoint navigation, payload release via servo actuators, and RTL functionality. The entire system was tested in outdoor environments and optimized for efficient route planning and flight stability.`,
    image: '/reactapp/public/0.jpg',
  },
];

function Projects() {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">🚀 Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-details">
              <h3>{proj.title}</h3>
              <p>
                {expanded[index]
                  ? proj.description
                  : proj.description.slice(0, 150) + '...'}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="read-toggle"
              >
                {expanded[index] ? 'Read Less ▲' : 'Read More ▼'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
