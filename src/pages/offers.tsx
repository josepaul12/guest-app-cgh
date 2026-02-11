import React from 'react';
import './offers.css';
import offer1 from '../assets/images/offers/offer-1.png';
import offer2 from '../assets/images/offers/offer-2.png';
import offer3 from '../assets/images/offers/offer-3.png';
import offer4 from '../assets/images/offers/offer-4.png';
import offer5 from '../assets/images/offers/offer-5.png';

type OffersProps = {
  onBack?: () => void;
};

const Offers: React.FC<OffersProps> = ({ onBack }) => {
  const offers = [
    {
      id: 1,
      image: offer1,
      title: 'Shrota',
      subtitle: 'A Wellness Vacation',
      dates: '28 August to 1 September',
      description: 'Over 5 transformative days, we will wander through the dense forests of Periyar on guided treks and jungle safaris. Visit a unique, award-winning honeybee farm and attend insightful wellness lectures on the psychology of listening.'
    },
    {
      id: 2,
      image: offer2,
      title: 'Spice Village',
      subtitle: 'Best Eco Retreat',
      dates: '10th Anniversary',
      description: 'Experience our award-winning eco retreat. Travel and Leisure India\'s Best Awards winner for Best Eco Retreat.'
    },
    {
      id: 3,
      image: offer3,
      title: 'Special Offers On Our\nReimagined Tribal Village',
      dates: '1 APR - 30 SEPT 2025',
      description: 'From 25% off to one night free. Experience our beautifully reimagined tribal village accommodation.'
    },
    {
      id: 4,
      image: offer4,
      title: 'Special Offers On Our\nGarden Villa With Pool',
      dates: '1 APR - 30 SEPT 2025',
      description: 'From 25% off to one night free. Enjoy luxury in our Garden Villa with private pool.'
    },
    {
      id: 5,
      image: offer5,
      title: 'Enjoy the Premium\nHeritage Mansion',
      description: 'Experience the elegance and charm of our premium heritage mansion with luxurious accommodations and world-class amenities.'
    }
  ];

  return (
    <div className="offers-page">
      <div className="offers-background" />
      <div className="offers-overlay" />
      
      <div className="offers-topbar">
        <button className="offers-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="offers-title">Offers</h1>
        <button className="offers-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="offers-content">
        {offers.map((offer) => (
          <div key={offer.id} className="offers-offer">
            <div className="offers-offer-image-container">
              <img 
                src={offer.image} 
                alt={offer.title}
                className="offers-offer-image"
              />
              <div className="offers-offer-overlay"></div>
            </div>
            <div className="offers-offer-content">
              <button className="offers-know-more-button">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
