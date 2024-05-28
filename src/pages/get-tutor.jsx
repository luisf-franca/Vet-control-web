// GetTutor.js
import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetTutor = () => {
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

  const toggleCard = (index) => {
    const updatedTutors = [...tutors];
    updatedTutors[index].expanded = !updatedTutors[index].expanded;
    setTutors(updatedTutors);
  };

  return (
    <div className="catalogo-container">
      <h2>Tutores</h2>
      <div className="catalogo-wrapper">
        {tutors.map((tutor, index) => (
          <div
            className={`card ${tutor.expanded ? 'expanded' : ''}`}
            key={tutor.id}
            onClick={() => toggleCard(index)}
          >
            <div className="card-header">
              <h3>Nome: {tutor.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Endereço: {tutor.endereco}</li>
                <li>Telefone: {tutor.telefone}</li>
                <li>Email: {tutor.email}</li>
                <li>Método de Pagamento: {tutor.metodo_pagamento}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetTutor;
