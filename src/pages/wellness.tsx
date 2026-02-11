import React from 'react';
import './wellness.css';
import herbsAndOilsImage from '../assets/images/imagesmarari/wellness-herbs-oils.png';
import therapiesImage from '../assets/images/imagesmarari/wellness-therapies-building.png';
import journeyImage from '../assets/images/imagesmarari/wellness-journey.png';

type WellnessProps = {
  onBack?: () => void;
};

const Wellness: React.FC<WellnessProps> = ({ onBack }) => {
  return (
    <div className="wellness-page">
      <div className="wellness-background" />
      <div className="wellness-overlay" />
      
      <div className="wellness-topbar">
        <button className="wellness-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="wellness-title">Wellness & Healthcare</h1>
        <button className="wellness-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="wellness-content">
        {/* Section 1: Herbs and oils */}
        <div className="wellness-section">
          <div className="wellness-image-container">
            <img 
              src={herbsAndOilsImage} 
              alt="Herbs and oils"
              className="wellness-image"
            />
          </div>

          <div className="wellness-text-section">
            <h2 className="wellness-section-heading">Herbs and oils</h2>
            <div className="wellness-text-content">
              <p className="wellness-paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <p className="wellness-paragraph">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Therapies */}
        <div className="wellness-section">
          <div className="wellness-image-container">
            <img 
              src={therapiesImage} 
              alt="Therapies"
              className="wellness-image"
            />
          </div>

          <div className="wellness-text-section">
            <h2 className="wellness-section-heading">Therapies</h2>
            <div className="wellness-text-content">
              <p className="wellness-paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <p className="wellness-paragraph">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Our journey */}
        <div className="wellness-section">
          <div className="wellness-image-container">
            <img 
              src={journeyImage} 
              alt="Our journey"
              className="wellness-image"
            />
          </div>

          <div className="wellness-text-section">
            <h2 className="wellness-section-heading">Our journey</h2>
            <div className="wellness-text-content">
              <p className="wellness-paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <p className="wellness-paragraph">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;
