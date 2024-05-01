import React from 'react';
import '../styles/cadastros.css';
import { NavLink } from 'react-router-dom';

const Tutor = () => {
  return (
    <div className="cadastro-container">
      <h2>Cadastro Tutor</h2>

      <form>
        <div>
          <label htmlFor="name">Nome*</label>
          <input placeholder="Digite o nome do tutor" />
        </div>

        <div>
          <label htmlFor="race">Telefone*</label>
          <input placeholder="Digite o telefone do tutor" />
        </div>

        <div>
          <label htmlFor="weight">Endereço*</label>
          <input placeholder="Digite o endereço do tutor" />
        </div>

        <div>
          <label htmlFor="size">E-mail*</label>
          <input placeholder="Digite o e-mail do tutor" />
        </div>

        <div>
          <label htmlFor="age">Método de pagamento*</label>
          <input placeholder="Selecione o método de pagamento do tutor" />
        </div>
      </form>

      <NavLink to="/cadastro-completo">Cadastrar</NavLink>
    </div>
  );
};

export default Tutor;
