import React from 'react';
import '../styles/cadastros.css';
import { NavLink } from 'react-router-dom';

const Veterinario = () => {
  return (
    <div className="cadastro-container">
      <h2>Cadastro Veterinário</h2>

      <form>
        <div>
          <label htmlFor="name">Nome*</label>
          <input placeholder="Digite o nome do veterinário" />
        </div>

        <div>
          <label htmlFor="race">CRMV*</label>
          <input placeholder="Digite o número do CRMV do veterinário" />
        </div>

        <div>
          <label htmlFor="weight">Endereço*</label>
          <input placeholder="Digite o endereço do veterinário" />
        </div>

        <div>
          <label htmlFor="size">E-mail*</label>
          <input placeholder="Digite o e-mail do veterinário" />
        </div>

        <div>
          <label htmlFor="age">Telefone*</label>
          <input placeholder="Digite o telefone do veterinário" />
        </div>
      </form>
      <NavLink to="/cadastro-completo">Cadastrar</NavLink>
    </div>
  );
};

export default Veterinario;
