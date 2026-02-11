import React from 'react';
import './curated-experiences.css';
import fishingVillageImage from '../assets/images/imagesmarari/fishing-village-tour.png';

type CuratedExperiencesProps = {
  onBack?: () => void;
  onFishingVillageTourClick?: () => void;
};

const CuratedExperiences: React.FC<CuratedExperiencesProps> = ({ onBack, onFishingVillageTourClick }) => {
  const fishingVillageExperiences = [
    {
      id: 1,
      image: fishingVillageImage,
      title: 'Fishing Village Tour',
      description: 'Experience the authentic coastal life with a guided tour through traditional fishing villages. Witness the daily routines of local fishermen, learn about traditional fishing techniques, and immerse yourself in the vibrant coastal culture.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      title: 'Boat Rides & Water Activities',
      description: 'Enjoy scenic boat rides along the coast, explore hidden coves, and participate in various water activities. Experience the beauty of the Arabian Sea and discover the marine life that thrives in these waters.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
      title: 'Local Cuisine & Seafood',
      description: 'Savor the freshest seafood prepared using traditional methods. Visit local eateries, learn about coastal cuisine, and enjoy authentic flavors that have been passed down through generations.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      title: 'Cultural Immersion',
      description: 'Engage with local communities, participate in traditional activities, and learn about the rich cultural heritage of the fishing villages. Experience the warmth and hospitality of coastal communities.'
    }
  ];

  return (
    <div className="curated-experiences-page">
      <div className="curated-experiences-background" />
      <div className="curated-experiences-overlay" />
      
      <div className="curated-experiences-topbar">
        <button className="curated-experiences-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="curated-experiences-title">Curated Experiences</h1>
        <button className="curated-experiences-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="curated-experiences-content">
        {fishingVillageExperiences.map((experience) => (
          <div 
            key={experience.id} 
            className="curated-experiences-item"
            onClick={experience.id === 1 ? onFishingVillageTourClick : undefined}
            style={{ cursor: experience.id === 1 ? 'pointer' : 'default' }}
          >
            <div className="curated-experiences-item-image-container">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="curated-experiences-item-image"
              />
            </div>
            <div className="curated-experiences-item-title-container">
              <div className="curated-experiences-item-title-line"></div>
              <h2 className="curated-experiences-item-title">{experience.title}</h2>
              <div className="curated-experiences-item-title-line"></div>
            </div>
            <p className="curated-experiences-item-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedExperiences;
