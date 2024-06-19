import React, { useState, useRef } from 'react';
import '../styles/cadastros.css';
import { useNavigate } from 'react-router-dom';

const Veterinario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    crmv: '',
    endereco: '',
    email: '',
    telefone: '',
  });

  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    }

    try {
      const response = await fetch(
        'https://luisffranca.pythonanywhere.com/add_veterinarian',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        console.log('Veterinário cadastrado com sucesso!');
        navigate('/cadastro-completo');
      } else {
        console.error('Erro ao cadastrar veterinário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar veterinário:', error.message);
    }
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  return (
    <div className="cadastro-container container">
      <h2>Cadastro Veterinário</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome*</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do veterinário"
            required
          />
        </div>
        <div>
          <label htmlFor="crmv">CRMV*</label>
          <input
            type="text"
            name="crmv"
            value={formData.crmv}
            onChange={handleChange}
            placeholder="Digite o número do CRMV do veterinário"
            required
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço*</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Digite o endereço do veterinário"
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite o e-mail do veterinário"
            required
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone*</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite o telefone do veterinário"
            required
          />
        </div>
      </form>
      <button type="button" onClick={handleButtonClick}>
        Cadastrar
      </button>
    </div>
  );
};

export default Veterinario;
