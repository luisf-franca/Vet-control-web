import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/home.jsx';
import GetAnimal from './pages/get-animal.jsx';
import GetTutor from './pages/get-tutor.jsx';
import GetVeterinario from './pages/get-veterinario.jsx';
import CadAnimal from './pages/cad-animal.jsx';
import CadTutor from './pages/cad-tutor.jsx';
import CadVeterinario from './pages/cad-veterinario.jsx';
import Sucesso from './pages/cad-completo.jsx';
import Agendamento from './pages/cad-consulta.jsx';
import Consulta from './pages/get-consulta.jsx';
import Acompanhamento from './pages/acompanhamento.jsx';
import Diagnostico from './pages/diagnostico.jsx';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento/:animalId" element={<Agendamento />} />
        <Route path="/acompanhamento" element={<Acompanhamento />} />
        <Route path="/consultas" element={<Consulta />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/cadastrar-animal" element={<CadAnimal />} />
        <Route path="/cadastrar-tutor" element={<CadTutor />} />
        <Route path="/cadastrar-veterinario" element={<CadVeterinario />} />
        <Route path="/animal/:tutorId" element={<GetAnimal />} />
        <Route path="/tutor" element={<GetTutor />} />
        <Route path="/veterinario" element={<GetVeterinario />} />
        <Route path="/cadastro-completo" element={<Sucesso />} />
      </Routes>
    </>
  );
};

export default Router;
