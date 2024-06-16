import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetTutor = () => {
  const [tutors, setTutors] = useState([]);

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

  return (
    <div className="catalogo-container">
      <h2>Tutores</h2>
      <div className="catalogo-wrapper">
        {tutors.map((tutor) => (
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
                <li>
                  <span>Método de Pagamento:</span> {tutor.metodo_pagamento}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTutor;
