import { useState } from "react";
import "../styles/Profile.css";
import Django from "../img/django.png";

const projects = [
  { id: 1, title: "Proyecto Web 1", category: "Web", image: Django },
  { id: 2, title: "Proyecto Software 1", category: "Software", image: "/software1.jpg" },
  { id: 3, title: "Proyecto Web 2", category: "Web", image: "/web2.jpg" },
  { id: 4, title: "Proyecto Software 2", category: "Software", image: "/software2.jpg" },
];

const FilterSection = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div id="portfolio" className="filter-section">
      <div className="max-width">
        <h2 className="title">Proyectos</h2>
        <div className="filter-options">
          <button onClick={() => setFilter("Todos")}>Todos</button>
          <button onClick={() => setFilter("Web")}>Web</button>
          <button onClick={() => setFilter("Software")}>Software</button>
        </div>
        <div className="project-cards">
          {filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ project }) => (
  <div className="card">
    <img src={project.image} alt={project.title} className="card-image" />
    <div className="card-overlay">
      <h3>{project.title}</h3>
      <div className="card-buttons">
        <button onClick={() => window.open("https://github.com", "_blank")}>
          GitHub
        </button>
        <button onClick={() => window.open("https://github.com", "_blank")}>
          Ver Proyecto
        </button>
      </div>
    </div>
  </div>
);

export default FilterSection;
