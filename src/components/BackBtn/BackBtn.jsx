import React from 'react';
import './BackBtn.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <a className="back-button" onClick={goBack}>
      {'<'}
    </a>
  );
};

export default BackButton;
