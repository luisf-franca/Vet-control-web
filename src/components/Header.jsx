import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

//IMAGES
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
    </header>
  );
};

export default Header;
