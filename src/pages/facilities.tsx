import React from 'react';
import './facilities.css';
import facilitiesImage from '../assets/images/imagesmarari/facilities.jpg';

type FacilitiesProps = {
  onBack?: () => void;
};

const Facilities: React.FC<FacilitiesProps> = ({ onBack }) => {
  const firstContent = `CGH Earth conceives and organizes truly remarkable travel experiences over multiple destinations in southern India. A family owned enterprise, the group began its operations in 1954 with their flagship property, the Casino Hotel, in Willingdon Island, Kochi.`;

  const secondContent = `The small hotel that started out to cater to port visitors in Willingdon Island, Kochi, in the 1950s has evolved into an unusual experiment in tourism. It has become widely known today for its respect for nature and local cultures around which its singular travel experiences are spun.`;

  const facilities = [
    {
      name: 'Free Breakfast',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V12C18 13.1046 17.1046 14 16 14H8C6.89543 14 6 13.1046 6 12V8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 10H16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="11" r="0.5" fill="currentColor"/>
          <circle cx="14" cy="11" r="0.5" fill="currentColor"/>
          <path d="M12 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Free Internet Access',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 9C13.6569 9 15 10.3431 15 12M12 15C10.3431 15 9 13.6569 9 12M12 12H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Electric Vehicle Charging',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 10H14M10 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 4V6M12 18V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 12L18 10L20 12L18 14L16 12Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'On-Site Restaurant',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8V20M8 8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8V20M8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8V20M12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8V20M20 8V20M20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 4L10 6M14 4L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: 'Room Service',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8C8 6.89543 8.89543 6 10 6H14C15.1046 6 16 6.89543 16 8V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 4V6M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 10H14M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Fitness Center',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: 'Pool',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10C3 9 3.5 8 4.5 8C5.5 8 6 9 6 10C6 11 5.5 12 4.5 12C3.5 12 3 11 3 10Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 10C9 9 9.5 8 10.5 8C11.5 8 12 9 12 10C12 11 11.5 12 10.5 12C9.5 12 9 11 9 10Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 10C15 9 15.5 8 16.5 8C17.5 8 18 9 18 10C18 11 17.5 12 16.5 12C15.5 12 15 11 15 10Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 10C21 9 21.5 8 22.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 14C3 13 3.5 12 4.5 12C5.5 12 6 13 6 14C6 15 5.5 16 4.5 16C3.5 16 3 15 3 14Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 14C9 13 9.5 12 10.5 12C11.5 12 12 13 12 14C12 15 11.5 16 10.5 16C9.5 16 9 15 9 14Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 14C15 13 15.5 12 16.5 12C17.5 12 18 13 18 14C18 15 17.5 16 16.5 16C15.5 16 15 15 15 14Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      name: 'Pet Friendly',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9Z" fill="currentColor"/>
          <path d="M15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z" fill="currentColor"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 17C8 15.3431 9.34315 14 11 14H13C14.6569 14 16 15.3431 16 17V19H8V17Z" fill="currentColor"/>
          <path d="M6 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'In-Room Chromecast',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="7" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 11H16M8 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 17V20M7 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M18 7L20 5L22 7L20 9L18 7Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Laundry',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V8C16 8.55228 15.5523 9 15 9H9C8.44772 9 8 8.55228 8 8V6Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 9V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18V9" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 12H14M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="facilities-page">
      <div className="facilities-background" />
      <div className="facilities-overlay" />
      
      <div className="facilities-topbar">
        <button className="facilities-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="facilities-title">Facilities</h1>
        <button className="facilities-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="facilities-content">
        <div className="facilities-hero-image-container">
          <img 
            src={facilitiesImage} 
            alt="Marari Beach Facilities"
            className="facilities-hero-image"
          />
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-item">
              <div className="facility-icon">
                {facility.icon}
              </div>
              <span className="facility-label">{facility.name}</span>
            </div>
          ))}
        </div>

        <div className="facilities-text-section">
          <p className="facilities-description">{firstContent}</p>
          <p className="facilities-description">{secondContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
