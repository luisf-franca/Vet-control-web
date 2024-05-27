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

  return (
    <div className="catalogo-container">
      <h2>Tutores</h2>
      <ul>
        {tutors.map((tutor) => (
          <li key={tutor.id}>
            {tutor.nome} - {tutor.endereco} - {tutor.telefone} - {tutor.email} -
            Método de Pagamento: {tutor.metodo_pagamento}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetTutor;
