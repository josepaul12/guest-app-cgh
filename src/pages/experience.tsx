import React from 'react';
import './experience.css';
import experiencesImage from '../assets/images/imagesmarari/Experiences.jpg';

type ExperienceProps = {
  onBack?: () => void;
  onCuratedExperiencesClick?: () => void;
  onActivitiesClick?: () => void;
};

const Experience: React.FC<ExperienceProps> = ({ onBack, onCuratedExperiencesClick, onActivitiesClick }) => {
  const descriptionText = `Marari Beach offers a unique opportunity to immerse yourself in the local culture, relax in serene surroundings, savor authentic cuisine, and explore diverse ecosystems. Whether you're seeking adventure, tranquility, or cultural enrichment, our experiences are designed to help you soak in space and silence.`;

  const actionButtons = [
    'Curated Experiences',
    'Things to do Outside',
    'In-house Activities',
    'Excursions'
  ];

  return (
    <div className="experience-page">
      <div className="experience-background" />
      <div className="experience-overlay" />
      
      <div className="experience-topbar">
        <button className="experience-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="experience-title">Experiance</h1>
        <button className="experience-call-button" aria-label="Call">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 3.75C0.75 2.92157 1.42157 2.25 2.25 2.25H5.20943C5.53225 2.25 5.81886 2.45657 5.92094 2.76278L7.04428 6.13291C7.16233 6.487 6.50205 6.87398 6.16822 7.0409L4.47526 7.88738C5.30194 9.7209 6.7791 10.6981 8.61262 11.5247L9.4591 9.83178C9.62602 9.49795 10.013 8.83767 10.3671 8.95572L13.7372 10.0791C14.0434 10.1811 14.25 10.4678 14.25 10.7906V13.75C14.25 14.5784 13.5784 15.25 12.75 15.25H11.25C5.2868 15.25 0.75 10.7132 0.75 4.75V3.75Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="experience-content">
        <div className="experience-hero-image-container">
          <img 
            src={experiencesImage} 
            alt="Marari Beach Experience"
            className="experience-hero-image"
          />
        </div>

        <div className="experience-text-content">
          <p className="experience-description">{descriptionText}</p>
        </div>

        <div className="experience-action-buttons">
          {actionButtons.map((buttonText, index) => (
            <button 
              key={index} 
              className="experience-action-button"
              aria-label={buttonText}
              onClick={
                buttonText === 'Curated Experiences' ? onCuratedExperiencesClick :
                buttonText === 'In-house Activities' ? onActivitiesClick :
                undefined
              }
            >
              {buttonText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
