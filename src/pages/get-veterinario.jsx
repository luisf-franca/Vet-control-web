import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetVeterinarians = () => {
  const [veterinarians, setVeterinarians] = useState([]);

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/veterinarians');
        if (response.ok) {
          const data = await response.json();
          setVeterinarians(data.veterinarians);
        } else {
          console.error('Failed to fetch veterinarians:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching veterinarians:', error.message);
      }
    };

    fetchVeterinarians();
  }, []);

  return (
    <div className="catalogo-container">
      <h2>Veterinários</h2>
      <ul>
        {veterinarians.map((veterinarian) => (
          <li key={veterinarian.id}>
            {veterinarian.nome} - {veterinarian.endereco} -{' '}
            {veterinarian.telefone} - CRMV: {veterinarian.crmv} -{' '}
            {veterinarian.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetVeterinarians;
