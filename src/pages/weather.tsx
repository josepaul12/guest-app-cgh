import React from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './weather.css';

const SunIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" fill="#FFD54F"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloudRainIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="rgba(255,255,255,0.9)"/>
    <path d="M8 14v4M11 14v4M14 16v4M17 14v4" stroke="#B0BEC5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloudRainLightningIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="rgba(255,255,255,0.9)"/>
    <path d="M13 12l-3 4h2l-2 4" stroke="#FFD54F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Weather: React.FC = () => {
  const { navigateRaw } = useAppNavigation();

  const hourlyData = [
    { time: 'Now', temp: 29, icon: 'sun' },
    { time: '3PM', temp: 29, icon: 'sun' },
    { time: '4PM', temp: 29, icon: 'sun' },
    { time: '5PM', temp: 29, icon: 'sun' },
    { time: '6PM', temp: 28, icon: 'sun' },
    { time: '6:35', label: 'Suns', icon: 'sunset' },
  ];

  const tenDayData = [
    { day: 'Today', icon: 'sun', low: 25, high: 29, precip: null },
    { day: 'Fri', icon: 'cloud-rain', low: 25, high: 28, precip: 60 },
    { day: 'Sat', icon: 'cloud-rain', low: 26, high: 28, precip: 50 },
    { day: 'Sun', icon: 'cloud-rain-lightning', low: 26, high: 29, precip: null },
  ];

  return (
    <div className="weather-page">
      <div className="weather-background" />
      <div className="weather-overlay" />

      <div className="weather-topbar">
        <button className="weather-back-button" onClick={() => navigateRaw(-1)} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="weather-location-header">
          <span className="weather-location-region">ALAPPUZHA</span>
          <h1 className="weather-location-name">Marari Beach</h1>
        </div>
        <div className="weather-topbar-spacer" />
      </div>

      <div className="weather-content">
        <div className="weather-current">
          <div className="weather-temperature">29°</div>
          <div className="weather-condition">Sunny</div>
          <div className="weather-high-low">H:29° L:25°</div>
        </div>

        <div className="weather-summary-card">
          <p className="weather-summary-text">
            Sunny conditions will continue for the rest of the day. Wind gusts are up to 24 kph.
          </p>
          <div className="weather-hourly-strip">
            {hourlyData.map((item, i) => (
              <div key={i} className="weather-hourly-item">
                <span className="weather-hourly-time">{item.time}</span>
                <div className="weather-hourly-icon-wrap">
                  {item.icon === 'sunset' ? (
                    <span className="weather-hourly-sunset-label">{item.label}</span>
                  ) : (
                    <SunIcon size={28} />
                  )}
                </div>
                <span className="weather-hourly-temp">{item.temp != null ? `${item.temp}°` : ''}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="weather-ten-day-card">
          <div className="weather-ten-day-header">
            <svg className="weather-ten-day-calendar" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h2 className="weather-ten-day-title">10-DAY FORECAST</h2>
          </div>
          <ul className="weather-ten-day-list">
            {tenDayData.map((row, i) => (
              <li key={i} className="weather-ten-day-row">
                <span className="weather-ten-day-day-name">{row.day}</span>
                <div className="weather-ten-day-day-icon">
                  {row.icon === 'sun' && <SunIcon size={22} />}
                  {row.icon === 'cloud-rain' && <CloudRainIcon size={22} />}
                  {row.icon === 'cloud-rain-lightning' && <CloudRainLightningIcon size={22} />}
                </div>
                {row.precip != null && <span className="weather-ten-day-precip">{row.precip}%</span>}
                <span className="weather-ten-day-low">{row.low}°</span>
                <div className="weather-ten-day-bar-wrap">
                  <div
                    className="weather-ten-day-bar"
                    style={{ width: `${Math.min(100, 30 + (row.high - row.low) * 12)}%` }}
                  >
                    <span className="weather-ten-day-bar-dot" />
                  </div>
                </div>
                <span className="weather-ten-day-high">{row.high}°</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="weather-bottom-nav">
          <button type="button" className="weather-nav-btn" aria-label="Map">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 3v15M15 6v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="weather-nav-dots">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <span key={n} className={`weather-nav-dot ${n === 5 ? 'weather-nav-dot-active' : ''}`} />
            ))}
          </div>
          <button type="button" className="weather-nav-btn" aria-label="List">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
