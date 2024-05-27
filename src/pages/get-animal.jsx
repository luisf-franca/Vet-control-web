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

  return (
    <div className="catalogo-container">
      <h2>Animais</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.nome} - {animal.raca} - {animal.peso}kg - {animal.porte} -
            Idade: {animal.idade} - Sintomas: {animal.sintomas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAnimal;
