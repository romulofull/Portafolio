import React from 'react';
import './estilos.css'; 

const Losproyectos = ({ image, name, github, karacteristics }) => {
  return(
    <div className="project-card" >
      <h2>{name}</h2>
      <div className="card-image">
          <img src={image} alt={name} />
      </div>
        <div className="card-details">
          <p>{karacteristics}</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Ver código en GitHub
          </a>
        </div>
    </div>
    );
};

export default Losproyectos;
