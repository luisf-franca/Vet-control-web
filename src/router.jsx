import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/home.jsx';
import Animal from './pages/cad-animal.jsx';
import Tutor from './pages/cad-tutor.jsx';
import Veterinario from './pages/cad-veterinario.jsx';
import Sucesso from './pages/cad-completo.jsx';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-animal" element={<Animal />} />
        <Route path="/cadastrar-tutor" element={<Tutor />} />
        <Route path="/cadastrar-veterinario" element={<Veterinario />} />
        <Route path="/cadastro-completo" element={<Sucesso />} />
      </Routes>
    </>
  );
};

export default Router;
