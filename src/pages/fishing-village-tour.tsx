import React from 'react';
import './fishing-village-tour.css';
import fishingVillageDetailImage from '../assets/images/imagesmarari/fishing-village-tour.png';

type FishingVillageTourProps = {
  onBack?: () => void;
};

const FishingVillageTour: React.FC<FishingVillageTourProps> = ({ onBack }) => {
  return (
    <div className="fishing-village-tour-page">
      <div className="fishing-village-tour-background" />
      <div className="fishing-village-tour-overlay" />
      
      <div className="fishing-village-tour-topbar">
        <button className="fishing-village-tour-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="fishing-village-tour-title">fishing village</h1>
        <button className="fishing-village-tour-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="fishing-village-tour-content">
        <div className="fishing-village-tour-hero-image-container">
          <img 
            src={fishingVillageDetailImage} 
            alt="Fishing Village Tour"
            className="fishing-village-tour-hero-image"
          />
        </div>

        <div className="fishing-village-tour-text-content">
          <p className="fishing-village-tour-paragraph">
            Marari beach has a distinct coastal character. Its lay out and cottages reflect the traditional fishing villages of this area known for their simplicity and elegant charm. Close to our property is a fishing village where every morning one can get to see the fishermen bring back their catch of the day to be auctioned as is the practice. It makes for quite a spectacle and experience in itself.
          </p>
          <p className="fishing-village-tour-paragraph">
            Just a short, leisurely stroll from the property is an authentic fishing village, where the very pulse of the community can be felt. Every morning, as the first golden rays of dawn touch the water, you can witness the sun-bronzed fishermen returning in their colourful wooden boats, a timeless tradition that has sustained the village for generations.
          </p>
          <p className="fishing-village-tour-paragraph">
            The shore then transforms into a vibrant hub of activity: the air fills with the salty spray and the energetic calls of men heaving their laden boats ashore in rhythm with the breaking waves. The glistening catch of the day is brought back and immediately laid out on the sand to be auctioned, a lively and bustling practice that unfolds with an unscripted authenticity. It is more than just a transaction; it's a dynamic and spirited spectacle, offering an unforgettable glimpse into a way of life that is both ancient and immediate, a truly rich and engaging experience in itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FishingVillageTour;
