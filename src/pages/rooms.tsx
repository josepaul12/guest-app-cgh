import React from 'react';
import './rooms.css';
import room1Image from '../assets/images/imagesmarari/room1.png';
import room2Image from '../assets/images/imagesmarari/room2.png';

type RoomsProps = {
  onBack?: () => void;
};

const Rooms: React.FC<RoomsProps> = ({ onBack }) => {
  const rooms = [
    {
      id: 1,
      image: room1Image,
      title: 'Garden Villa',
      bedConfig: '1 king bed or 2 twin beds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      image: room2Image,
      title: 'Garden Pool Villa',
      bedConfig: '1 king bed or 2 twin beds',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div className="rooms-page">
      <div className="rooms-background" />
      <div className="rooms-overlay" />
      
      <div className="rooms-topbar">
        <button className="rooms-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="rooms-title">Room</h1>
        <button className="rooms-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="rooms-content">
        {rooms.map((room) => (
          <div key={room.id} className="rooms-room-section">
            <div className="rooms-room-image-container">
              <img 
                src={room.image} 
                alt={room.title}
                className="rooms-room-image"
              />
            </div>

            <div className="rooms-room-details">
              <div className="rooms-room-heading-container">
                <h2 className="rooms-room-heading">{room.title}</h2>
                <div className="rooms-room-heading-underline"></div>
              </div>

              <p className="rooms-bed-config">{room.bedConfig}</p>

              <p className="rooms-description">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
