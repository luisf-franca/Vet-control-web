// GetAnimal.js
import React, { useState, useEffect } from 'react';
import '../styles/catalogos.css';

const GetAnimal = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/animals');
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

  const toggleCard = (index) => {
    const updatedAnimals = [...animals];
    updatedAnimals[index].expanded = !updatedAnimals[index].expanded;
    setAnimals(updatedAnimals);
  };

  return (
    <div className="catalogo-container">
      <h2>Animais</h2>
      <div className="catalogo-wrapper">
        {animals.map((animal, index) => (
          <div
            className={`card ${animal.expanded ? 'expanded' : ''}`}
            key={animal.id}
            onClick={() => toggleCard(index)}
          >
            <div className="card-header">
              <h3>Nome: {animal.nome}</h3>
            </div>
            <div className="card-content">
              <ul>
                <li>Raça: {animal.raca}</li>
                <li>Peso: {animal.peso}kg</li>
                <li>Porte: {animal.porte}</li>
                <li>Idade: {animal.idade}</li>
                <li>Sintomas: {animal.sintomas}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnimal;
