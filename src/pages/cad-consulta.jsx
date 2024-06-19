import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import consult from '../assets/consult.png';
import '../styles/agendamento.css';

const Agendamento = () => {
  const { animalId } = useParams();
  const [tutorNome, setTutorNome] = useState('');
  const [petNome, setPetNome] = useState('');

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const animalResponse = await fetch(
          `https://luisffranca.pythonanywhere.com/animals/${animalId}`,
        );
        if (animalResponse.ok) {
          const animalData = await animalResponse.json();
          setPetNome(animalData.nome);

          const tutorResponse = await fetch(
            `https://luisffranca.pythonanywhere.com/tutors/${animalData.tutor_id}`,
          );
          if (tutorResponse.ok) {
            const tutorData = await tutorResponse.json();
            setTutorNome(tutorData.nome);
          } else {
            console.error('Failed to fetch tutor:', tutorResponse.statusText);
          }
        } else {
          console.error('Failed to fetch animal:', animalResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchAnimalData();
  }, [animalId]);

  return (
    <section className="cad-consulta container">
      <div className="agendamento">
        <div>
          <picture>
            <img src={consult} alt="Tutor com pet" />
          </picture>

          {/* <section>
            <div>
              <p>Tutor</p>
              <span>{tutorNome}</span>
            </div>
            <div>
              <p>Pet</p>
              <span>{petNome}</span>
            </div>
          </section> */}
        </div>

        <div className="form-container">
          <form>
            <div>
              <label htmlFor="data">Data:</label>
              <input type="date" id="data" placeholder="DD/MM/AAAA" />
            </div>
            <div>
              <label htmlFor="veterinario">Veterinário:</label>
              <input
                type="text"
                id="veterinario"
                placeholder="Digite o nome do veterinário responsável"
              />
            </div>
            <div>
              <label htmlFor="valor">Valor:</label>
              <input
                type="text"
                id="valor"
                placeholder="Digite o valor da consulta"
              />
            </div>
            <div>
              <label htmlFor="metodoPagamento">Método de pagamento:</label>
              <select id="metodoPagamento">
                <option value="">Selecione o método de pagamento</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <button type="submit">Cadastrar consulta</button>
    </section>
  );
};

export default Agendamento;
