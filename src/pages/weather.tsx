import React from 'react';
import './weather.css';

type WeatherProps = {
  onBack?: () => void;
};

const Weather: React.FC<WeatherProps> = ({ onBack }) => {
  return (
    <div className="weather-page">
      <div className="weather-background" />
      <div className="weather-overlay" />
      
      <div className="weather-topbar">
        <button className="weather-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="weather-title">Weather</h1>
        <button className="weather-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="weather-content">
        <div className="weather-main">
          <div className="weather-icon-large">
            <svg width="151" height="170" viewBox="0 0 151 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.5 0L93.5 60H151L103.5 97L121.5 157L75.5 120L29.5 157L47.5 97L0 60H57.5L75.5 0Z" fill="white" fillOpacity="0.8"/>
            </svg>
          </div>
          <h2 className="weather-condition">Rainy</h2>
          <div className="weather-temperature">16°C</div>
          <div className="weather-date">Sunday | 19 Dec 2023</div>
        </div>

        <div className="weather-days">
          <div className="weather-days-scroll">
            <button className="weather-day-arrow weather-day-arrow-left" aria-label="Previous days">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L7 13L14 24" stroke="#ACA0B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="weather-days-list">
              <div className="weather-day-item weather-day-active">SUN</div>
              <div className="weather-day-item">MON</div>
              <div className="weather-day-item weather-day-secondary">TUES</div>
              <div className="weather-day-item">FRI</div>
              <div className="weather-day-item">SAT</div>
            </div>
            <button className="weather-day-arrow weather-day-arrow-right" aria-label="Next days">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2L15 13L8 24" stroke="#ACA0B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="weather-days-icons">
            <svg width="319" height="39" viewBox="0 0 319 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="17" r="15" fill="white" fillOpacity="0.3"/>
              <circle cx="140" cy="17" r="17.5" fill="white" fillOpacity="0.3"/>
              <circle cx="30" cy="15" r="15" fill="white" fillOpacity="0.3"/>
              <circle cx="214" cy="15" r="15" fill="white" fillOpacity="0.3"/>
              <circle cx="291" cy="14" r="14" fill="white" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>

        <div className="weather-location">
          <div className="weather-location-header">
            <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C4.03 0 0 4.03 0 9C0 15.5 9 25 9 25C9 25 18 15.5 18 9C18 4.03 13.97 0 9 0ZM9 12.5C7.07 12.5 5.5 10.93 5.5 9C5.5 7.07 7.07 5.5 9 5.5C10.93 5.5 12.5 7.07 12.5 9C12.5 10.93 10.93 12.5 9 12.5Z" fill="white"/>
            </svg>
            <h3 className="weather-location-name">Alapuzha</h3>
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L5 5L10 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="weather-message-box">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="10.5" r="9.5" stroke="white" strokeWidth="1.5"/>
              <path d="M10.5 6V10.5M10.5 14H10.51" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="weather-message-text">
              No more rain in half an hour. Grab your umbrella and get ready to explore the city!
            </p>
          </div>
        </div>

        <div className="weather-hourly">
          <div className="weather-hourly-chart">
            <div className="weather-hourly-temps">
              <div className="weather-hourly-temp">30°</div>
              <div className="weather-hourly-temp">26°</div>
              <div className="weather-hourly-temp">22°</div>
              <div className="weather-hourly-temp">16°</div>
            </div>
            <svg className="weather-hourly-line" width="273" height="28" viewBox="0 0 273 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 24.5L76 16L144 30L212 32L275.82 24.5" stroke="#FFC355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="weather-hourly-marker">
              <div className="weather-hourly-marker-dot"></div>
              <div className="weather-hourly-marker-line"></div>
            </div>
            <div className="weather-hourly-icons">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 0L10.5 6H16.5L11.5 9.5L13.5 15.5L8.5 12L3.5 15.5L5.5 9.5L0.5 6H6.5L8.5 0Z" fill="white" fillOpacity="0.8"/>
              </svg>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 0L10.5 6H16.5L11.5 9.5L13.5 15.5L8.5 12L3.5 15.5L5.5 9.5L0.5 6H6.5L8.5 0Z" fill="white" fillOpacity="0.8"/>
              </svg>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 0L10.5 6H16.5L11.5 9.5L13.5 15.5L8.5 12L3.5 15.5L5.5 9.5L0.5 6H6.5L8.5 0Z" fill="white" fillOpacity="0.8"/>
              </svg>
            </div>
            <div className="weather-hourly-details">
              <div className="weather-hourly-detail">
                <div className="weather-hourly-wind">11.7km/h</div>
                <div className="weather-hourly-time">Now</div>
              </div>
              <div className="weather-hourly-detail">
                <div className="weather-hourly-wind">9.3km/h</div>
                <div className="weather-hourly-time">22:00</div>
              </div>
              <div className="weather-hourly-detail">
                <div className="weather-hourly-wind">12km/h</div>
                <div className="weather-hourly-time">00:00</div>
              </div>
              <div className="weather-hourly-detail">
                <div className="weather-hourly-wind">15km/h</div>
                <div className="weather-hourly-time">2:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
