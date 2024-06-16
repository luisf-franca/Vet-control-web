import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetAnimal = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          'https://luisffranca.pythonanywhere.com/animals',
        );
        if (response.ok) {
          const data = await response.json();
          setAnimals(data.animals);
        } else {
          console.error('Failed to fetch animals:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching animals:', error.message);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div className="catalogo-container">
      <h2>Animais</h2>
      <div className="catalogo-wrapper">
        {animals.map((animal) => (
          <div className="card expanded" key={animal.id}>
            <div className="card-header">
              <h3>{animal.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>
                  <span>Raça:</span> {animal.raca}
                </li>
                <li>
                  <span>Peso:</span> {animal.peso}kg
                </li>
                <li>
                  <span>Porte:</span> {animal.porte}
                </li>
                <li>
                  <span>Idade:</span> {animal.idade}
                </li>
                <li>
                  <span>Sintomas:</span> {animal.sintomas}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnimal;
