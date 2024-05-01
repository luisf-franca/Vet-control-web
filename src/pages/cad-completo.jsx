import React from 'react';
import '../styles/success.css';
import { NavLink } from 'react-router-dom';

//IMAGES
import pets from '../assets/pets.png';

const Sucesso = () => {
  return (
    <div className="success">
      <h2>Cadastro completo!</h2>

      <div>
        <img src={pets} />
        <NavLink to="/">Voltar à pagina inicial</NavLink>
      </div>
    </div>
  );
};

export default Sucesso;
