import React from 'react';
import './App.css';
import Router from './router';
import Header from './components/Header/Header';
import BackButton from './components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const showBackButton = location.pathname !== '/';

  return (
    <>
      {showBackButton && <BackButton />}
      <Header />
      <Router />
    </>
  );
}

export default App;
