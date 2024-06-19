import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/catalogos.css';

const GetTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch(
          'https://luisffranca.pythonanywhere.com/tutors',
        );
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeDiacritics = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredTutors = tutors.filter((tutor) =>
    removeDiacritics(tutor.nome.toLowerCase()).includes(
      removeDiacritics(searchTerm.toLowerCase()),
    ),
  );

  return (
    <div className="catalogo-container container">
      <input
        type="search"
        placeholder="Pesquisar tutor"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="catalogo-wrapper">
        {filteredTutors.map((tutor) => (
          <div className="card expanded" key={tutor.id}>
            <div className="card-header">
              <h3>{tutor.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>
                  <span>Endereço:</span> {tutor.endereco}
                </li>
                <li>
                  <span>Telefone:</span> {tutor.telefone}
                </li>
                <li>
                  <span>Email:</span> {tutor.email}
                </li>
                {/* <li>
                  <span>Método de Pagamento:</span> {tutor.metodo_pagamento}
                </li> */}
              </ul>
              <NavLink to={`/animal/${tutor.id}`}>Ver pets</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTutor;
