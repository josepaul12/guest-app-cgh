import React, { useState, useEffect } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './housekeeping.css';

interface ServiceItem {
  _id?: string;
  name?: string;
  label?: string;
  icon?: string;
  iconUrl?: string;
  [key: string]: any;
}

const Housekeeping: React.FC = () => {
  const { navigate } = useAppNavigation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>('');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get IDs from localStorage (set by home page or URL params)
      const timelineId = localStorage.getItem('timelineId') || '606d7c06169aae44d6a201bd';
      const reservationId = localStorage.getItem('reservationId') || '698d8c91a2970c8cddcd24ad';
      const siteId = localStorage.getItem('siteId') || '60681c39169aae1a65fb0ead';
      const companyId = localStorage.getItem('companyCRMId') || '60647362169aae1a65fb0db0';
      
      const url = `https://demo.wo.instio.co/api/wo-attributes?companyId=${companyId}&siteId=${siteId}&timelineId=${timelineId}&reservationId=${reservationId}&isRoot=true`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.code === 200 && result.data && Array.isArray(result.data)) {
        setServices(result.data);
      } else {
        setServices([]);
      }
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to load services. Please try again.');
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (service: ServiceItem) => {
    // If API provides icon URL
    if (service.iconUrl) {
      return <img src={service.iconUrl} alt={service.name || service.label || ''} style={{ width: '32px', height: '32px' }} />;
    }
    
    // If API provides SVG string
    if (service.icon && service.icon.startsWith('<svg')) {
      return <div dangerouslySetInnerHTML={{ __html: service.icon }} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
    }

    // Default fallback icon
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  };

  const getServiceName = (service: ServiceItem): string => {
    return service.name || service.label || 'Service';
  };

  const getServiceId = (service: ServiceItem): string => {
    return service._id || service.id || getServiceName(service).toLowerCase().replace(/\s+/g, '-');
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleClear = () => {
    setNotes('');
    setSelectedService(null);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Service:', selectedService);
    console.log('Notes:', notes);
    // You can add API call here
    alert('Housekeeping request submitted successfully!');
    handleClear();
  };

  return (
    <div className="housekeeping-page">
      <div className="housekeeping-background" />
      <div className="housekeeping-overlay" />
      
      <div className="housekeeping-topbar">
        <button className="housekeeping-back-button" onClick={() => navigate(-1)} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="housekeeping-title">Housekeeping</h1>
        <button className="housekeeping-call-button" aria-label="Call" onClick={() => window.location.href = 'tel:+918071700830'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="housekeeping-content">
        <div className="housekeeping-header">
          <p className="housekeeping-subtitle">Request Housekeeping Service</p>
          <p className="housekeeping-choose-text">Select a service type.</p>
        </div>

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>Loading services...</p>
          </div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#d32f2f' }}>
            <p>{error}</p>
            <button 
              onClick={fetchServices}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                backgroundColor: '#CAA593',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          </div>
        ) : services.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>No services available at the moment.</p>
          </div>
        ) : (
          <div className="housekeeping-services-grid">
            {services.map((service, index) => {
              const serviceId = getServiceId(service);
              const serviceName = getServiceName(service);
              return (
                <button
                  key={service._id || service.id || index}
                  className={`housekeeping-service-button ${selectedService === serviceId ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(serviceId)}
                  aria-label={serviceName}
                >
                  <div className="housekeeping-service-icon">
                    {renderIcon(service)}
                  </div>
                  <span className="housekeeping-service-label">{serviceName}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="housekeeping-notes-section">
          <p className="housekeeping-notes-label">Any special instructions?</p>
          <textarea
            className="housekeeping-textarea"
            placeholder="Write your instructions here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </div>
      </div>

      <div className="housekeeping-actions">
        <button 
          className="housekeeping-clear-button"
          onClick={handleClear}
          aria-label="Clear"
        >
          Clear
        </button>
        <button 
          className="housekeeping-submit-button"
          onClick={handleSubmit}
          aria-label="Submit"
          disabled={!selectedService}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Housekeeping;
