import React from 'react';
import './about.css';
import aboutHeroImage from '../assets/images/imagesmarari/about-second.png';
import aboutImage from '../assets/images/imagesmarari/about-hero.png';
import swimmingPoolIcon from '../assets/images/imagesmarari/swimming-pool.svg';
import hours24Icon from '../assets/images/imagesmarari/24hrs.svg';
import parkingIcon from '../assets/images/imagesmarari/parking.svg';
import petFriendlyIcon from '../assets/images/imagesmarari/pet-friendly.svg';

type AboutProps = {
  onBack?: () => void;
};

const About: React.FC<AboutProps> = ({ onBack }) => {
  const amenities = [
    {
      id: 1,
      icon: swimmingPoolIcon,
      label: 'SWIMMING POOL'
    },
    {
      id: 2,
      icon: hours24Icon,
      label: '24 HOUR SERVICE'
    },
    {
      id: 3,
      icon: parkingIcon,
      label: 'FREE PARKING'
    },
    {
      id: 4,
      icon: petFriendlyIcon,
      label: 'PET FRIENDLY'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-background" />
      <div className="about-overlay" />
      
      <div className="about-topbar">
        <button className="about-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="about-title">About</h1>
        <button className="about-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="about-content">
        <div className="about-hero-image-container">
          <img 
            src={aboutHeroImage} 
            alt="Marari Beach"
            className="about-hero-image"
          />
        </div>

        <div className="about-intro-text">
          <p className="about-paragraph">
          Inspired by the gentle and rustic culture of the local fisherfolk, Marari Beach offers complete relaxation in a tranquil setting. From the thatched
cottages to the eclectic cuisine, everything here echoes the simplicity and harmony of Malabar’s coast. A nature lover’s paradise, this coast is
comprised of many complex ecosystems, giving you the opportunity to discover an array of exciting species of plants, butterflies, birds and creatures
of the sea. Far removed from the madding crowd, here you can soak in space and silence </p>
        </div>

        <div className="about-amenities-section">
          <h2 className="about-amenities-heading">Amenities</h2>
          <div className="about-amenities-grid">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="about-amenity-item">
                <div className="about-amenity-icon">
                  <img src={amenity.icon} alt={amenity.label} className="about-amenity-icon-img" />
                </div>
                <span className="about-amenity-label">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-weather-section">
          <div className="about-weather-banner">
            <span className="about-weather-banner-text">Weather</span>
          </div>
          <p className="about-paragraph">
            Marari Beach offers a unique opportunity to relax in a tranquil setting, away from the madding crowd. Our thatched cottages reflect the traditional fishing villages of this area, known for their simplicity and elegant charm. Experience eclectic cuisine, explore the rich ecosystem, and immerse yourself in nature. Here, you can truly find space and silence.
          </p>
        </div>

        <div className="about-second-image-container">
          <img 
            src={aboutImage} 
            alt="Outdoor Dining Area"
            className="about-second-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
