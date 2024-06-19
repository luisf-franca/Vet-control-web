import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const GetAnimal = () => {
  const { tutorId } = useParams();
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          'https://luisffranca.pythonanywhere.com/animals',
        );
        if (response.ok) {
          const data = await response.json();
          const tutorAnimals = data.animals.filter(
            (animal) => animal.tutor_id === parseInt(tutorId, 10),
          );
          setAnimals(tutorAnimals);
        } else {
          console.error('Failed to fetch animals:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching animals:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [tutorId]);

  if (loading) {
    return <div className="catalogo-container container"></div>;
  }

  if (animals.length === 0) {
    return (
      <div className="return-null container">
        <h3>Não tem nenhum bichinho cadastrado?</h3>
        <Link to="/cadastrar-animal">
          <button className="btn1">Clique aqui para cadastrar um pet</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="catalogo-container container">
      <h2>Animais do Tutor</h2>
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
              </ul>
              <Link to={`/agendamento/${animal.id}`}>Agendar consulta</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAnimal;
