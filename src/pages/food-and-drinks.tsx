import React from 'react';
import './food-and-drinks.css';
import restaurant1Image from '../assets/images/imagesmarari/restaurant-1.png';
import barLoungeImage from '../assets/images/imagesmarari/bar-lounge.png';
import beachDiningImage from '../assets/images/imagesmarari/beach-dining.png';
import roomServiceImage from '../assets/images/imagesmarari/room-service.png';
import restaurant2Image from '../assets/images/imagesmarari/restaurant-2.png';
import backgroundImage from '../assets/images/imagesmarari/food-drinks-bg.png';

type FoodAndDrinksProps = {
  onBack?: () => void;
  onChakaraClick?: () => void;
};

const FoodAndDrinks: React.FC<FoodAndDrinksProps> = ({ onBack, onChakaraClick }) => {
  const diningOptions = [
    {
      id: 1,
      image: restaurant2Image,
      name: "Today's Recommendation",
      price: '₹250/pax'
    },
    {
      id: 2,
      image: beachDiningImage,
      name: 'Chakara',
      price: '₹350/pax'
    },
    {
      id: 3,
      image: barLoungeImage,
      name: 'Beach Shack',
      price: '₹250/pax'
    },
    {
      id: 4,
      image: roomServiceImage,
      name: 'Farm Kitchen',
      price: '₹350/pax'
    },
    {
      id: 5,
      image: restaurant1Image,
      name: 'Beach Grill',
      price: '₹350/pax'
    },
    {
      id: 6,
      image: roomServiceImage,
      name: 'Tea card',
      price: '₹950/pax'
    },
    {
      id: 7,
      image: restaurant1Image,
      name: 'Beach House Bar',
      price: '₹350/pax'
    },
    {
      id: 8,
      image: backgroundImage,
      name: 'Pool villa dining',
      price: '₹250/pax'
    },
    {
      id: 9,
      image: restaurant1Image,
      name: 'Exclusive dining',
      price: '₹350/pax'
    }
  ];

  return (
    <div className="food-and-drinks-page">
      <div className="food-and-drinks-background" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="food-and-drinks-overlay" />
      
      <div className="food-and-drinks-topbar">
        <button className="food-and-drinks-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="food-and-drinks-title">Food and Drinks</h1>
        <button className="food-and-drinks-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="food-and-drinks-content">
        {diningOptions.map((option) => (
          <div 
            key={option.id} 
            className="food-and-drinks-card"
            onClick={option.id === 2 ? onChakaraClick : undefined}
            style={{ cursor: option.id === 2 ? 'pointer' : 'default' }}
          >
            <div 
              className="food-and-drinks-card-background"
              style={{ backgroundImage: `url(${option.image})` }}
            >
              <div className="food-and-drinks-card-overlay"></div>
              <div className="food-and-drinks-card-top-right">
                <h2 className="food-and-drinks-card-name">{option.name}</h2>
                <span className="food-and-drinks-card-price">{option.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodAndDrinks;
