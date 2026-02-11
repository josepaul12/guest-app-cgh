import React from 'react';
import './HousekeepingPage.css';

const HousekeepingPage = ({ onBack }) => {
  return (
    <div className="housekeeping-page">
      <div className="housekeeping-background" />
      <div className="housekeeping-overlay" />
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <div className="housekeeping-content">
        <h1>Housekeeping Services</h1>
        <p>Request housekeeping services</p>
      </div>
    </div>
  );
};

export default HousekeepingPage;

