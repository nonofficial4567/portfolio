import React from 'react';

const TerminalWindow = ({ children, titleBarColor = 'cyan' }) => {
  const colors = {
    cyan: '#00ff00',
    green: '#39ff14',
    pink: '#ff00ff',
  };

  return (
    <div style={{
      backgroundColor: 'rgba(0, 50, 0, 0.9)',
      borderRadius: '10px',
      border: `2px solid ${colors[titleBarColor] || colors.cyan}`,
      boxShadow: `0 0 10px ${colors[titleBarColor] || colors.cyan}`,
      fontFamily: "'Share Tech Mono', monospace",
      color: colors[titleBarColor] || colors.cyan,
      padding: '20px',
      marginTop: '20px',
      minHeight: '150px',
      position: 'relative',
      overflowX: 'auto',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
    }}>
      <div style={{
        position: 'absolute',
        top: '5px',
        left: '10px',
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        backgroundColor: colors[titleBarColor] || colors.cyan,
        boxShadow: `0 0 5px ${colors[titleBarColor] || colors.cyan}`,
      }} />
      <pre style={{ margin: 0, fontSize: '1rem', lineHeight: '1.4' }}>
        {children}
      </pre>
    </div>
  );
};

export default TerminalWindow;
