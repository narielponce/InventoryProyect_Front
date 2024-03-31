import React, { useState } from 'react';
import MainContent from './components/mainComponent';
import NavBar from './components/navBar';
import Marcas from './components/marcas';
import Ubicaciones from './components/ubicaciones';
import Categorias from './components/categorias';
import Productos from './components/productos';
import Usuarios from './components/usuarios';

const App = () => {
  const [section, setSection] = useState('Inicio');

  const handleMenuClick = (selectedSection) => {
    setSection(selectedSection);
  };

  let sectionComponent;
  switch (section) {
    case 'Marcas':
      sectionComponent = <Marcas />;
      break;
    case 'Ubicaciones':
      sectionComponent = <Ubicaciones />;
      break;
    case 'Categorias':
      sectionComponent = <Categorias />;
      break;
    case 'Productos':
      sectionComponent = <Productos />;
      break;
    case 'Usuarios':
      sectionComponent = <Usuarios />;
      break
    // Agrega más casos según las opciones de menú que tengas
    default:
      sectionComponent = <MainContent />;
  }

  return (
    <div>
      <div className="navbar-expand-lg">
        <NavBar handleMenuClick={handleMenuClick} />
      </div>
      <div className="content">
        {sectionComponent}
      </div>
    </div>
  );
};

export default App;

