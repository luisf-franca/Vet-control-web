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

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-animal" element={<CadAnimal />} />
        <Route path="/cadastrar-tutor" element={<CadTutor />} />
        <Route path="/cadastrar-veterinario" element={<CadVeterinario />} />
        <Route path="/animal" element={<GetAnimal />} />
        <Route path="/tutor" element={<GetTutor />} />
        <Route path="/veterinario" element={<GetVeterinario />} />
        <Route path="/cadastro-completo" element={<Sucesso />} />
      </Routes>
    </>
  );
};

export default Router;
