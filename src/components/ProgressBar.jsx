import React from 'react';

const ProgressBar = ({ label, percentage, colorClass }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: '500' }}>
        <span>{label}</span>
        <span className={colorClass}>{percentage}%</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: percentage + '%', backgroundColor: 'var(--neon-blue)' }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
