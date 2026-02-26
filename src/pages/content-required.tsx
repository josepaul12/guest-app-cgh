import React from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './content-required.css';

interface ContentRequiredProps {
  title?: string;
  message?: string;
}

const ContentRequired: React.FC<ContentRequiredProps> = ({
  title = 'Content required',
  message = 'Content required',
}) => {
  const { navigateRaw } = useAppNavigation();

  return (
    <div className="content-required-page">
      <div className="content-required-background" />
      <div className="content-required-overlay" />
      <div className="content-required-topbar">
        <button
          className="content-required-back-button"
          onClick={() => navigateRaw(-1)}
          aria-label="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="content-required-title">{title}</h1>
      </div>
      <div className="content-required-content">
        <p className="content-required-message">{message}</p>
      </div>
    </div>
  );
};

export default ContentRequired;
