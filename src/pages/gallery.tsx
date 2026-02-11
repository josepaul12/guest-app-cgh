import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import galleryImage from '../assets/images/imagesmarari/gallery.png';
import roomsImage from '../assets/images/imagesmarari/rooms.jpg';
import experiencesImage from '../assets/images/imagesmarari/Experiences.jpg';
import foodDrinksImage from '../assets/images/imagesmarari/Food & drinks.jpg';
import ayurvedaImage from '../assets/images/imagesmarari/Ayurveda.jpg';
import facilitiesImage from '../assets/images/imagesmarari/facilities.jpg';
import aboutImage from '../assets/images/imagesmarari/about.jpg';
import storiesImage from '../assets/images/imagesmarari/stories.jpg';

type GalleryProps = {
  onBack?: () => void;
};

const Gallery: React.FC<GalleryProps> = ({ onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const expandedContainerRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    { src: galleryImage, alt: 'Gallery view' },
    { src: roomsImage, alt: 'Rooms' },
    { src: experiencesImage, alt: 'Experiences' },
    { src: foodDrinksImage, alt: 'Food & Drinks' },
    { src: ayurvedaImage, alt: 'Ayurveda' },
    { src: facilitiesImage, alt: 'Facilities' },
    { src: aboutImage, alt: 'About' },
    { src: storiesImage, alt: 'Stories' },
  ];

  useEffect(() => {
    if (selectedImageIndex !== null && expandedContainerRef.current) {
      const container = expandedContainerRef.current;
      const scrollPosition = selectedImageIndex * container.clientWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [selectedImageIndex]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseExpanded = () => {
    setSelectedImageIndex(null);
  };

  const handleExpandedClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseExpanded();
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-background" />
      <div className="gallery-overlay" />
      
      <div className="gallery-topbar">
        <button className="gallery-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="gallery-title">Gallery</h1>
        <button className="gallery-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="gallery-content">
        <div className="gallery-grid">
          {/* YouTube Video */}
          <div className="gallery-item gallery-item-video gallery-item-wide">
            <div className="gallery-video-container">
              <iframe
                className="gallery-video"
                src="https://www.youtube.com/embed/HUJtu0__pEE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`gallery-item ${
                index === 0 || index === 1 ? 'gallery-item-small' :
                index === 2 || index === 5 ? 'gallery-item-wide' :
                index === 3 ? 'gallery-item-square' :
                'gallery-item-medium'
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="gallery-expanded-overlay" onClick={handleExpandedClick}>
          <button className="gallery-expanded-close" onClick={handleCloseExpanded} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div 
            className="gallery-expanded-container"
            ref={expandedContainerRef}
          >
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-expanded-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
