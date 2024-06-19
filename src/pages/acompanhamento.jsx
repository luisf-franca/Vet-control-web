import React from 'react';
import '../styles/acompanhamento.css';

const Acompanhamento = () => {
  return (
    <div className="acompanhamento container">
      <h2>Acompanhamento</h2>
      <form>
        <div>
          <label htmlFor="medicamentos">Medicamentos:</label>
          <input
            type="text"
            id="medicamentos"
            placeholder="Digite os medicamentos"
            className="input-custom"
          />
        </div>
        <div>
          <label htmlFor="retorno">Retorno:</label>
          <input
            type="date"
            id="retorno"
            placeholder="Digite a data de retorno"
            className="input-custom"
          />
        </div>
        <div>
          <label htmlFor="observacao">Observação:</label>
          <input
            type="text"
            id="observacao"
            placeholder="Digite suas observações"
            className="input-custom"
          />
        </div>
      </form>
      <button type="submit" className="btn-custom">
        Salvar
      </button>
    </div>
  );
};

export default Acompanhamento;
