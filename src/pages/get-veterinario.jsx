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

  const toggleCard = (index) => {
    const updatedVeterinarians = [...veterinarians];
    updatedVeterinarians[index].expanded =
      !updatedVeterinarians[index].expanded;
    setVeterinarians(updatedVeterinarians);
  };

  return (
    <div className="catalogo-container">
      <h2>Veterinários</h2>
      <div className="catalogo-wrapper">
        {veterinarians.map((veterinarian, index) => (
          <div
            className={`card ${veterinarian.expanded ? 'expanded' : ''}`}
            key={veterinarian.id}
            onClick={() => toggleCard(index)}
          >
            <div className="card-header">
              <h3>Nome: {veterinarian.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Endereço: {veterinarian.endereco}</li>
                <li>Telefone: {veterinarian.telefone}</li>
                <li>CRMV: {veterinarian.crmv}</li>
                <li>Email: {veterinarian.email}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetVeterinarians;
