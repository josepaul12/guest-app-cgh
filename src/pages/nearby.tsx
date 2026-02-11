import React from 'react';
import './nearby.css';

type NearbyProps = {
  onBack?: () => void;
};

const Nearby: React.FC<NearbyProps> = ({ onBack }) => {
  const attractions = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800',
      title: 'Jew Town, Antique Market',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      title: 'The Heritage Town',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      title: 'Mattanchery Market',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    }
  ];

  return (
    <div className="nearby-page">
      <div className="nearby-background" />
      <div className="nearby-overlay" />
      
      <div className="nearby-topbar">
        <button className="nearby-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="nearby-title">Nearby</h1>
        <button className="nearby-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="nearby-content">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="nearby-attraction">
            <div className="nearby-attraction-image-container">
              <img 
                src={attraction.image} 
                alt={attraction.title}
                className="nearby-attraction-image"
              />
            </div>
            <div className="nearby-attraction-title-container">
              <div className="nearby-attraction-title-line"></div>
              <h2 className="nearby-attraction-title">{attraction.title}</h2>
              <div className="nearby-attraction-title-line"></div>
            </div>
            <p className="nearby-attraction-description">{attraction.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nearby;
