import React from 'react';
import './Logo.css';
import marariLogo from '../assets/images/imagesmarari/marari logo.png';

const Logo = () => {
  return (
    <div className="logo" aria-label="Marari Beach logo" role="img">
      <img src={marariLogo} alt="Marari Beach" />
    </div>
  );
};

export default Logo;


