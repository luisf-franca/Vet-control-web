import React from 'react';
import '../styles/diagnostico.css';

const getConsulta = () => {
  return (
    <div className="container">
      <div className="App">
        <div className="diagnosticos-container">
          <h2>Consultas cadastradas</h2>
          <div className="diagnosticos-table">
            {[1, 2, 3, 4].map((item, index) => (
              <div className="diagnosticos-row" key={index}>
                <div className="diagnosticos-cell">
                  Paciente: (nome do animal atendido)
                </div>
                <div className="diagnosticos-cell">
                  Data da consulta: DD/MM/AA
                </div>
                <div className="diagnosticos-cell">
                  <div className="diagnosticos-link">mais detlhes</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default getConsulta;