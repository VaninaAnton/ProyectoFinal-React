import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categories">Productos</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/iniciar-sesion">Iniciar Sesión</Link></li>
        <li><Link to="/cart">Carrito ({cartItemCount})</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
