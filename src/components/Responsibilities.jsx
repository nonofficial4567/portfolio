import React from 'react';

const timelineData = [
  {
    title: 'Student Placement Coordinator',
    icon: '💼',
    date: 'Dec 2024 - Present',
    org: 'Manipal University Jaipur',
    color: '#00fff7',
    border: '#00fff7',
    bg: 'rgba(0, 20, 40, 0.95)',
    details: [
      'Coordinate placement-related activities ensuring smooth communication between students and recruiters',
      'Organize training sessions and career development programs to enhance student employability',
    ],
  },
  {
    title: 'Executive Director',
    icon: '🏆',
    date: 'Feb 2024 - Sept 2024',
    org: 'Indgenius MUJ Chapter',
    color: '#ff00ea',
    border: '#ff00ea',
    bg: 'rgba(40, 0, 40, 0.95)',
    details: [
      "Directed and executed the Club's workshops, events and other tasks",
      'Led a team of 15+ juniors resulting in a 20-25% increase in participation of all events',
    ],
  },
];

const Responsibilities = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}
    >
      <h2
        className="neon-text"
        style={{
          marginBottom: '60px',
          fontSize: '2.6rem',
          color: '#00fff7',
          textShadow: '0 0 24px #00fff7, 0 0 48px #00fff7',
          letterSpacing: '2px',
          fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        Responsibilities
      </h2>
      
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}
      >
        {/* Timeline vertical line - centered */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '4px',
            background: 'linear-gradient(to bottom, #00fff7 60%, #ff00ea 100%)',
            borderRadius: '2px',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />
        
        {/* Timeline items */}
        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          
          return (
            <div
              key={item.title}
              style={{
                position: 'relative',
                marginBottom: '80px',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              {/* Timeline dot - always centered */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '32px',
                  height: '32px',
                  background: item.bg,
                  border: `3px solid ${item.border}`,
                  borderRadius: '50%',
                  boxShadow: `0 0 15px ${item.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: item.color,
                  zIndex: 2,
                }}
              >
                {item.icon}
              </div>
              
              {/* Card - alternating left/right */}
              <div
                className="card"
                style={{
                  background: item.bg,
                  border: `2px solid ${item.border}`,
                  borderRadius: '18px',
                  boxShadow: `0 0 14px ${item.border}a0`,
                  padding: '28px',
                  width: '400px',
                  maxWidth: '45%',
                  color: '#fff',
                  textAlign: 'left',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  marginLeft: isLeft ? '0' : '60px',
                  marginRight: isLeft ? '60px' : '0',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = `0 10px 25px ${item.border}60`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 0 14px ${item.border}a0`;
                }}
              >
                <h3
                  style={{
                    fontSize: '1.4rem',
                    marginBottom: '8px',
                    color: item.color,
                    textShadow: `0 0 8px ${item.color}`,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  {item.icon} {item.title}
                </h3>
                <div style={{ 
                  color: item.color, 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  marginBottom: '8px' 
                }}>
                  {item.date}
                </div>
                <div style={{ 
                  fontWeight: 700, 
                  margin: '8px 0 15px 0', 
                  color: '#fff',
                  fontSize: '1.1rem' 
                }}>
                  {item.org}
                </div>
                <ul style={{ 
                  marginLeft: '20px', 
                  marginBottom: 0,
                  lineHeight: '1.6' 
                }}>
                  {item.details.map((d, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Responsibilities;