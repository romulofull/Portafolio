import React from 'react';
import Losproyectos from './Losproyectos';
import './estilos.css';
import gallery from './assets/gallery';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Romulo Castro</h1>
        <p className="contact-info">
      
        </p>
      </div>
    </header>
  );
};

const projects = [
  {
    image: gallery.imagen1,
    name: 'Academia de Idiomas',
    github: 'https://github.com/romulofull/MiAcademiadeIdiomas', 
    karacteristics: 'React, Node.js con Express, Javascript, HTML, CSS y MongoDB'
  },
  {
    image: gallery.imagen2,
    name: 'Tienda de Natacion',
    github: 'https://github.com/romulofull/TiendadeNatacionOnline', 
    karacteristics: 'React, Node.js con Express, Javascript, HTML, CSS y MongoDB'
  },
];


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Mis Proyectos</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <Losproyectos
              key={index}
              image={project.image}
              name={project.name}
              github={project.github}
              karacteristics={project.karacteristics}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
