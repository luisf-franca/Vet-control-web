import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetVeterinarians = () => {
  const [veterinarians, setVeterinarians] = useState([]);

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await fetch(
          'https://luisffranca.pythonanywhere.com/veterinarians',
        );
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
      <div className="catalogo-wrapper">
        {veterinarians.map((veterinarian) => (
          <div className="card expanded" key={veterinarian.id}>
            <div className="card-header">
              <h3>{veterinarian.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>
                  <span>Endereço:</span> {veterinarian.endereco}
                </li>
                <li>
                  <span>Telefone:</span> {veterinarian.telefone}
                </li>
                <li>
                  <span>CRMV:</span> {veterinarian.crmv}
                </li>
                <li>
                  <span>Email:</span> {veterinarian.email}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetVeterinarians;
