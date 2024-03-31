import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ handleMenuClick }) => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Inventory System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => handleMenuClick('Marcas')}>Marcas</Nav.Link>
          <Nav.Link onClick={() => handleMenuClick('Ubicaciones')}>Ubicaciones</Nav.Link>
          <Nav.Link onClick={() => handleMenuClick('Categorias')}>Categorías</Nav.Link>
          <Nav.Link onClick={() => handleMenuClick('Usuarios')}>Usuarios</Nav.Link>
          <Nav.Link onClick={() => handleMenuClick('Productos')}>Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
