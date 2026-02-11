import React from 'react';
import './StatusBar.css';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="left-side">
        <div className="time">9:41</div>
      </div>
      <div className="right-side">
        <div className="mobile-signal">
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
        </div>
        <div className="wifi">
          <div className="wifi-bar"></div>
          <div className="wifi-bar"></div>
          <div className="wifi-bar"></div>
        </div>
        <div className="battery">
          <div className="battery-body">
            <div className="battery-fill"></div>
          </div>
          <div className="battery-tip"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

