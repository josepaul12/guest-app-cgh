import React from 'react';
import './other-destinations.css';
import chittoorKottaramImage from '../assets/images/imagesmarari/chittoor-kottaram.png';

type OtherDestinationsProps = {
  onBack?: () => void;
};

const OtherDestinations: React.FC<OtherDestinationsProps> = ({ onBack }) => {
  const destinations = [
    {
      id: 1,
      image: chittoorKottaramImage,
      title: 'Chittoor Kottaram',
      description: 'The historic town of Fort Kochi is just an hour away by road or boat from Chittoor Kottaram.The historic town of Fort Kochi is just an hour away by road or boat from Chittoor Kottaram.The historic town of Fort Kochi is just an hour away by road or boat from Chittoor Kottaram.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      title: 'Coconut Kottaram',
      description: 'The historic town of Fort Kochi is just an hour away by road or boat from Kottaram.The historic town of Fort Kochi is just an hour away by road or boat from Kottaram.The historic town of Fort Kochi is just an hour away by road or boat from Kottaram.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
      title: 'Heritage Kottaram',
      description: 'Experience the rich cultural heritage and traditional architecture of Kerala.Experience the rich cultural heritage and traditional architecture of Kerala.Experience the rich cultural heritage and traditional architecture of Kerala.'
    }
  ];

  return (
    <div className="other-destinations-page">
      <div className="other-destinations-background" />
      <div className="other-destinations-overlay" />
      
      <div className="other-destinations-topbar">
        <button className="other-destinations-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="other-destinations-title">Other Destinations</h1>
        <button className="other-destinations-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="other-destinations-content">
        <div className="other-destinations-heading">
          <p className="other-destinations-heading-line">A Welcoming Heaven for</p>
          <p className="other-destinations-heading-line">All Kind of Travelers &</p>
          <p className="other-destinations-heading-line">Nature Lovers</p>
          <div className="other-destinations-heading-line-decoration"></div>
        </div>

        <div className="other-destinations-cards-container">
          <div className="other-destinations-cards-scroll">
            {destinations.map((destination) => (
              <div key={destination.id} className="other-destinations-card">
                <div className="other-destinations-card-image-container">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="other-destinations-card-image"
                  />
                </div>
                <div className="other-destinations-card-content">
                  <h2 className="other-destinations-card-title">{destination.title}</h2>
                  <p className="other-destinations-card-description">{destination.description}</p>
                  <div className="other-destinations-card-buttons">
                    <button className="other-destinations-card-button other-destinations-card-button-know-more">
                      Know More
                    </button>
                    <button className="other-destinations-card-button other-destinations-card-button-book-now">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDestinations;
