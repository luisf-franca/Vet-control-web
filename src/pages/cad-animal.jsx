import React, { useState, useEffect } from 'react';
import '../styles/cadastros.css';
import { NavLink } from 'react-router-dom';

const Animal = () => {
  const [formData, setFormData] = useState({
    tutor_id: '',
    nome: '',
    peso: '',
    raca: '',
    porte: '',
    idade: '',
    sintomas: '',
  });

  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/tutors');
        if (response.ok) {
          const data = await response.json();
          setTutors(data.tutors);
        } else {
          console.error('Failed to fetch tutors:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutors:', error.message);
      }
    };

    fetchTutors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update tutor_id or tutor name based on the input change
    if (name === 'tutor_id') {
      const selectedTutor = tutors.find(
        (tutor) => tutor.id === parseInt(value),
      );
      setFormData({
        ...formData,
        tutor_id: value,
        tutor_name: selectedTutor ? selectedTutor.nome : '',
      });
    } else if (name === 'tutor_name') {
      const selectedTutor = tutors.find((tutor) => tutor.nome === value);
      setFormData({
        ...formData,
        tutor_id: selectedTutor ? selectedTutor.id : '',
        tutor_name: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/add_animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Animal cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar animal:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar animal:', error.message);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tutor_id">ID do Tutor*</label>
          <input
            type="text"
            name="tutor_id"
            value={formData.tutor_id}
            onChange={handleChange}
            placeholder="Digite o ID do tutor"
          />
        </div>
        <div>
          <label htmlFor="tutor_name">Nome do Tutor*</label>
          <select
            name="tutor_name"
            value={formData.tutor_name}
            onChange={handleChange}
          >
            <option value="">Selecione um tutor</option>
            {tutors.map((tutor) => (
              <option key={tutor.id} value={tutor.nome}>
                {tutor.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nome">Nome do Animal*</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o nome do animal"
          />
        </div>
        <div>
          <label htmlFor="peso">Peso*</label>
          <input
            type="text"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            placeholder="Digite o peso do animal"
          />
        </div>
        <div>
          <label htmlFor="raca">Raça*</label>
          <input
            type="text"
            name="raca"
            value={formData.raca}
            onChange={handleChange}
            placeholder="Digite a raça do animal"
          />
        </div>
        <div>
          <label htmlFor="porte">Porte*</label>
          <input
            type="text"
            name="porte"
            value={formData.porte}
            onChange={handleChange}
            placeholder="Digite o porte do animal"
          />
        </div>
        <div>
          <label htmlFor="idade">Idade*</label>
          <input
            type="text"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Digite a idade do animal"
          />
        </div>
        <div>
          <label htmlFor="sintomas">Sintomas</label>
          <input
            type="text"
            name="sintomas"
            value={formData.sintomas}
            onChange={handleChange}
            placeholder="Digite os sintomas do animal"
          />
        </div>
      </form>
      <NavLink to="/cadastro-completo" onClick={handleSubmit}>
        Cadastrar
      </NavLink>
    </div>
  );
};

export default Animal;
