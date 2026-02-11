import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import welcomeImage from '../assets/images/imagesmarari/welcome.png';
import galleryImage from '../assets/images/imagesmarari/gallery.png';
import offerImage from '../assets/images/imagesmarari/offer.jpg';
import experiencesImage from '../assets/images/imagesmarari/Experiences.jpg';
import foodDrinksImage from '../assets/images/imagesmarari/Food & drinks.jpg';
import aboutImage from '../assets/images/imagesmarari/about.jpg';
import guestServicesImage from '../assets/images/imagesmarari/guest services.jpg';
import facilitiesImage from '../assets/images/imagesmarari/facilities.jpg';
import ayurvedaImage from '../assets/images/imagesmarari/Ayurveda.jpg';
import roomsImage from '../assets/images/imagesmarari/rooms.jpg';
import housekeepingImage from '../assets/images/imagesmarari/housekeeping.jpg';
import storiesImage from '../assets/images/imagesmarari/stories.jpg';
import otherDestinationImage from '../assets/images/imagesmarari/Other Destination.jpg';
import wellnessHealthcareImage from '../assets/images/imagesmarari/Wellness & Healthcare.jpg';

type CardProps = {
  title: string;
  image: string;
  size?: 'small' | 'medium' | 'large' | 'banner';
  align?: 'left' | 'center' | 'right';
  hasOverlay?: boolean;
  noLabelBackground?: boolean;
  labelClassName?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ title, image, size = 'medium', align = 'left', hasOverlay = false, noLabelBackground = false, labelClassName = '', onClick }) => {
  return (
    <div className={`card card-${size} ${onClick ? 'card-clickable' : ''}`} onClick={onClick}>
      <img className="card-image" src={image} alt={title} />
      {hasOverlay && <div className="card-overlay" />}
      <div className={`card-label align-${align} ${noLabelBackground ? 'no-background' : ''} ${labelClassName}`}>
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

type HomeProps = {
  onWelcomeClick?: () => void;
  onGalleryClick?: () => void;
  onMenuClick?: () => void;
  onOffersClick?: () => void;
  onExperienceClick?: () => void;
  onFoodAndDrinksClick?: () => void;
  onAboutClick?: () => void;
  onOtherDestinationsClick?: () => void;
  onAyurvedaClick?: () => void;
  onRoomsClick?: () => void;
  onWellnessClick?: () => void;
};

const Home: React.FC<HomeProps> = ({ onWelcomeClick, onGalleryClick, onMenuClick, onOffersClick, onExperienceClick, onFoodAndDrinksClick, onAboutClick, onOtherDestinationsClick, onAyurvedaClick, onRoomsClick, onWellnessClick }) => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
        setShowScrollArrow(!isAtBottom);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => {
        contentElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        top: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page">
      <header className="home-topbar">
        <button className="icon-button" aria-label="Menu" onClick={onMenuClick}>
          <span className="icon icon-menu" />
        </button>
        <span className="brand-mark" aria-hidden="true">
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7365 20.5738C13.517 19.1174 14.3885 17.7212 15.3451 16.3953C15.9585 15.5592 16.4194 14.723 17.0329 13.8869L17.9536 12.382C18.5799 11.5631 19.2458 10.7812 19.9487 10.0398C21.023 8.86871 22.25 7.53132 23.1718 6.36023C23.6775 5.74573 23.9697 4.95757 23.9978 4.13264C24.0258 3.3077 23.7879 2.49811 23.3254 1.84448L23.1718 1.67701C22.8378 1.20166 22.4204 0.803556 21.9438 0.505914C21.5091 0.262784 21.0433 0.0922415 20.5621 0C19.7951 0 19.3349 0.167076 19.1816 0.501229C19.1415 0.790957 19.1959 1.08682 19.3352 1.33739C19.3348 1.35952 19.3385 1.38151 19.346 1.40204C19.3536 1.42258 19.3649 1.44123 19.3792 1.45688C19.3936 1.47252 19.4107 1.48484 19.4296 1.49309C19.4484 1.50133 19.4686 1.50534 19.4889 1.50486C19.8062 2.15506 19.8877 2.91157 19.7172 3.62423C19.5466 4.33688 19.1365 4.95358 18.5681 5.35191L18.1083 5.85314C17.034 6.6893 15.807 7.52547 14.8852 8.36163C14.6671 8.58306 14.406 8.74804 14.1214 8.84427C13.8367 8.94051 13.5358 8.96553 13.241 8.91747C12.9462 8.86942 12.6652 8.74952 12.4188 8.56671C12.1725 8.38389 11.9671 8.14287 11.8179 7.86157C11.0508 6.85794 11.0509 5.68684 11.5107 4.01452C11.357 2.34219 9.97649 2.67596 8.90214 4.85068C8.49366 5.53687 8.30237 6.34989 8.35747 7.16567C8.41256 7.98145 8.711 8.75518 9.20725 9.36877C9.45273 9.62963 9.64724 9.94195 9.77907 10.2869C9.9109 10.6319 9.97732 11.0023 9.97434 11.376C9.88983 12.1034 9.63325 12.7942 9.22979 13.3808C8.82633 13.9674 8.28987 14.4295 7.67307 14.7219C6.43604 15.4268 5.34034 16.3934 4.44999 17.5653C3.53707 18.9166 2.7652 20.3746 2.14872 21.9124C1.53526 23.4172 1.07436 25.0907 0.460901 26.4281C0.339039 26.6244 0.284634 26.8612 0.30727 27.0968C0.141035 27.8113 0.038137 28.5415 0 29.2774V29.6123C0 30.281 0.153635 30.7834 0.153635 31.4521C0.153635 31.6196 0.30727 31.7871 0.30727 31.9534C0.627832 33.4144 1.31923 34.7476 2.30235 35.8004C2.76824 36.3991 3.36139 36.8644 4.0301 37.1559C4.69881 37.4474 5.42277 37.5562 6.13888 37.4727C6.88592 37.382 7.60471 37.1094 8.24216 36.6752C8.87961 36.2411 9.41944 35.6563 9.82179 34.9643C10.6694 33.5188 11.0974 31.8283 11.0498 30.1136C10.9476 28.4395 10.999 26.7584 11.2034 25.0954C11.3436 23.4698 11.8726 21.9127 12.7376 20.5797" fill="#BDBDBD"/>
            <path d="M23.1582 24.8836C22.4511 23.476 21.6041 22.1665 20.6339 20.9811C19.7126 19.8699 18.8686 18.6783 18.1096 17.4171C17.9609 17.2472 17.9609 17.2472 17.9609 16.9086C17.8122 16.7387 17.8122 16.7387 17.6636 16.7387C16.7726 16.0604 15.2879 16.9086 15.7329 18.2653L15.8816 18.4352C16.5324 19.4775 16.8946 20.7191 16.9212 21.9992C17.0699 23.6956 17.0699 25.5632 17.0699 27.2596C17.099 28.0727 16.8981 28.8748 16.497 29.5471C16.0959 30.2194 15.5159 30.7262 14.8429 30.9923C14.1594 31.1789 13.5394 31.5922 13.0609 32.1803C12.2723 33.4663 11.9043 35.028 12.0213 36.5926C12.1699 37.4408 12.6149 37.6107 13.6546 37.4408C14.9428 37.1107 16.1897 36.5974 17.3662 35.913C17.5149 35.7431 17.6636 35.7431 17.8112 35.5733C18.8509 34.8949 20.0382 34.0467 21.2265 33.3671C22.498 32.5532 23.453 31.2197 23.8995 29.6344C24.1647 28 23.9009 26.3111 23.1572 24.8824" fill="#BDBDBD"/>
          </svg>
        </span>
        <button className="icon-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </header>

      <main className="home-content" ref={contentRef}>
        <div className="grid two-cols">
          <Card title="Welcome" image={welcomeImage} size="medium" onClick={onWelcomeClick} />
          <Card title="Gallery" image={galleryImage} size="medium" onClick={onGalleryClick} />
        </div>

        <Card
          title="Special Offers On Our Garden Villa With Pool"
          image={offerImage}
          size="banner"
          align="center"
          hasOverlay={true}
          noLabelBackground={true}
          labelClassName="font-caslon"
          onClick={onOffersClick}
        />

        <div className="grid two-cols">
          <Card title="Experiences" image={experiencesImage} onClick={onExperienceClick} />
          <Card title="Food & drinks" image={foodDrinksImage} onClick={onFoodAndDrinksClick} />
        </div>

        <div className="grid three-cols">
          <Card title="About" image={aboutImage} size="small" onClick={onAboutClick} />
          <Card title="Guest Services" image={guestServicesImage} size="small" />
          <Card title="Facilities" image={facilitiesImage} size="small" />
        </div>

        <Card 
          title="Ayurveda" 
          image={ayurvedaImage} 
          size="banner" 
          align="center"
          hasOverlay={true}
          noLabelBackground={true}
          labelClassName="font-caslon"
          onClick={onAyurvedaClick}
        />

        <div className="grid two-cols">
          <Card title="Rooms" image={roomsImage} onClick={onRoomsClick} />
          <Card title="Housekeeping" image={housekeepingImage} />
        </div>

        <Card 
          title="Stories" 
          image={storiesImage} 
          size="banner" 
          align="center"
          hasOverlay={true}
          noLabelBackground={true}
          labelClassName="font-caslon"
        />

        <div className="grid two-cols">
          <Card title="Other Destination" image={otherDestinationImage} onClick={onOtherDestinationsClick} />
          <Card title="Wellness & Healthcare" image={wellnessHealthcareImage} onClick={onWellnessClick} />
        </div>

       
      </main>

      {showScrollArrow && (
        <button 
          className="home-scroll-indicator"
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;


