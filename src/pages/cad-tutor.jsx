import React, { useState } from 'react';
import '../styles/cadastros.css';
import { NavLink } from 'react-router-dom';

const Tutor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    email: '',
    metodo_pagamento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/add_tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Tutor cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar tutor:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar tutor:', error.message);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro Tutor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome*</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do tutor"
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone*</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite o telefone do tutor"
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço*</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Digite o endereço do tutor"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite o e-mail do tutor"
          />
        </div>
        <div>
          <label htmlFor="metodo_pagamento">Método de pagamento*</label>
          <input
            type="text"
            name="metodo_pagamento"
            value={formData.metodo_pagamento}
            onChange={handleChange}
            placeholder="Selecione o método de pagamento do tutor"
          />
        </div>
      </form>
      <NavLink to="/cadastro-completo" onClick={handleSubmit}>
        Cadastrar
      </NavLink>
    </div>
  );
};

export default Tutor;
