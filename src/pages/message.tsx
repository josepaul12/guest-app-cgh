import React from 'react';
import './message.css';

type MessageProps = {
  onBack?: () => void;
};

const Message: React.FC<MessageProps> = ({ onBack }) => {
  return (
    <div className="message-page">
      <div className="message-header">
        <button className="message-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="message-header-content">
          <div className="message-header-avatar">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#CAA593"/>
              <path d="M20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16C16 13.7909 17.7909 12 20 12Z" fill="#302F27"/>
              <path d="M12 28C12 24.6863 14.6863 22 18 22H22C25.3137 22 28 24.6863 28 28V30H12V28Z" fill="#302F27"/>
            </svg>
          </div>
          <div className="message-header-info">
            <h2 className="message-header-name">Marari Beach Resort</h2>
            <p className="message-header-status">Online</p>
          </div>
        </div>
        <button className="message-header-menu" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="message-chat-area">
        <div className="message-bubble message-bubble-received">
          <div className="message-bubble-content">
            <p className="message-text">Hello! Welcome to Marari Beach Resort.</p>
            <span className="message-time">10:30 AM</span>
          </div>
        </div>

        <div className="message-bubble message-bubble-sent">
          <div className="message-bubble-content">
            <p className="message-text">Hi! Thank you for the warm welcome.</p>
            <span className="message-time">10:32 AM</span>
          </div>
        </div>

        <div className="message-bubble message-bubble-received">
          <div className="message-bubble-content">
            <p className="message-text">We're here to assist you with anything you need during your stay.</p>
            <span className="message-time">10:33 AM</span>
          </div>
        </div>

        <div className="message-coming-soon">
          <div className="coming-soon-bubble">
            <div className="coming-soon-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#CAA593" opacity="0.2"/>
                <path d="M24 16V24L28 28" stroke="#CAA593" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="24" r="20" stroke="#CAA593" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="coming-soon-title">Coming Soon</h3>
            <p className="coming-soon-text">Our messaging feature is currently under development. We'll notify you when it's ready!</p>
          </div>
        </div>
      </div>

      <div className="message-input-area">
        <button className="message-input-attach" aria-label="Attach">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00171 17.5872 2.00171 15.995C2.00171 14.4028 2.63416 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80944 14.7186 1.3877 15.78 1.3877C16.8414 1.3877 17.8594 1.80944 18.61 2.56C19.3606 3.31056 19.7823 4.32857 19.7823 5.39C19.7823 6.45143 19.3606 7.46944 18.61 8.22L9.41 17.41C9.03482 17.7852 8.52574 17.9961 7.995 17.9961C7.46426 17.9961 6.95518 17.7852 6.58 17.41C6.20482 17.0348 5.99386 16.5257 5.99386 15.995C5.99386 15.4643 6.20482 14.9552 6.58 14.58L15.07 6.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="message-input-wrapper">
          <input 
            type="text" 
            className="message-input" 
            placeholder="Type a message..."
            disabled
          />
        </div>
        <button className="message-input-send" aria-label="Send" disabled>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;
