import React from 'react';
import '../styles/cadastros.css';
import { NavLink } from 'react-router-dom';

const Animal = () => {
  return (
    <div className="cadastro-container">
      <h2>Cadastrar Animal</h2>

      <form>
        <div>
          <label htmlFor="tutor-id">ID do Tutor*</label>
          <input placeholder="Digite o ID do tutor" />
        </div>

        <div>
          <label htmlFor="name">Nome*</label>
          <input placeholder="Digite o nome do animal" />
        </div>

        <div>
          <label htmlFor="weight">Peso*</label>
          <input placeholder="Digite o peso do animal" />
        </div>

        <div>
          <label htmlFor="race">Raça*</label>
          <input placeholder="Digite a raça do animal" />
        </div>

        <div>
          <label htmlFor="size">Porte*</label>
          <input placeholder="Digite o porte do animal" />
        </div>

        <div>
          <label htmlFor="age">Idade*</label>
          <input placeholder="Digite a idade do animal" />
        </div>

        <div>
          <label htmlFor="symptoms">Sintomas</label>
          <input placeholder="Digite os sintomas do animal" />
        </div>
      </form>
      <NavLink to="/cadastro-completo">Cadastrar</NavLink>
    </div>
  );
};

export default Animal;
