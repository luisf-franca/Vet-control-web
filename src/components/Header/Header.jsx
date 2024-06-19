import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

//IMAGES
import logo from '../../assets/vet-clinic.svg';

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <nav>
        <NavLink to="/tutor">Agendar consulta</NavLink>
      </nav>
    </header>
  );
};

export default Header;
