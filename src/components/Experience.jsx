import React from 'react';
import { sectionHeadingStyle } from './About';

const timelineData = [
  {
    title: 'Research and Development Intern',
    icon: '🔬',
    date: 'June 2024 - July 2024',
    org: 'Avon Meters Pvt. Ltd.',
    color: '#00fff7',
    border: '#00fff7',
    bg: 'rgba(0, 20, 40, 0.95)',
    details: [
      'Conducted R&D on advanced meter technologies, enhancing product features',
      'Contributed in enhancing the website interface and user experience',
      'Also managed their recent database as a side task',
    ],
  },
  {
    title: 'Student Placement Coordinator',
    icon: '💼',
    date: 'Dec 2024 - Present',
    org: 'Manipal University Jaipur',
    color: '#39ff14',
    border: '#39ff14',
    bg: 'rgba(0, 40, 20, 0.95)',
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

const achievementStyles = [
  {
    background: 'linear-gradient(120deg, #002a1a 60%, #003300 80%, #39ff14 120%)',
    border: '2px solid #39ff14',
    boxShadow: '0 0 14px #39ff1433',
    color: '#fff',
    titleColor: '#39ff14',
  },
  {
    background: 'linear-gradient(120deg, #001a33 60%, #00ffff 100%)',
    border: '2px solid #00ffff',
    boxShadow: '0 0 14px #00ffff33',
    color: '#fff',
    titleColor: '#00ffff',
  },
  {
    background: 'linear-gradient(120deg, #1a002a 60%, #330033 80%, #ff00ff 120%)',
    border: '2px solid #ff00ff',
    boxShadow: '0 0 14px #ff00ff33',
    color: '#fff',
    titleColor: '#ff00ff',
  },
];

const Experience = () => {
  return (
    <div className="experience-container" style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px', boxSizing: 'border-box' }}>
      <div style={sectionHeadingStyle}>{"Experience"}</div>
      
      {/* Desktop Timeline Layout */}
      <div
        className="desktop-timeline"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto 20px auto',
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
            background: 'linear-gradient(to bottom, #00fff7 30%, #39ff14 60%, #ff00ea 100%)',
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
                marginBottom: '20px',
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

      {/* Mobile Card Layout */}
      <div className="mobile-timeline" style={{ display: 'none', width: '100%', padding: '0 10px', boxSizing: 'border-box' }}>
        {timelineData.map((item, idx) => (
          <div
            key={item.title}
            className="mobile-timeline-card"
            style={{
              background: item.bg,
              border: `2px solid ${item.border}`,
              borderRadius: '16px',
              boxShadow: `0 0 14px ${item.border}40`,
              padding: '24px',
              marginBottom: '24px',
              color: '#fff',
              textAlign: 'left',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              position: 'relative'
            }}
          >
            {/* Mobile icon badge */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '20px',
                width: '40px',
                height: '40px',
                background: item.bg,
                border: `3px solid ${item.border}`,
                borderRadius: '50%',
                boxShadow: `0 0 10px ${item.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            
            <div style={{ marginTop: '16px' }}>
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '8px',
                  color: item.color,
                  textShadow: `0 0 8px ${item.color}`,
                  fontWeight: 700,
                }}
              >
                {item.title}
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
                marginLeft: '16px', 
                marginBottom: 0,
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {item.details.map((d, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <div style={{...sectionHeadingStyle, marginTop: '20px', marginBottom: '20px'}}>
        {"Awards"}
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '1200px', boxSizing: 'border-box' }}>
        {/* Patent Published */}
        <div
          className="card"
          style={{
            ...achievementStyles[0],
            flex: '1 1 200px',
            minWidth: '200px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: achievementStyles[0].titleColor, fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>Patent Published</h4>
          <p style={{ margin: 0 }}>Hybrid Electricity Generator using TENG and PV System</p>
        </div>
        {/* Dean's List */}
        <div
          className="card"
          style={{
            ...achievementStyles[1],
            flex: '1 1 200px',
            minWidth: '200px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: achievementStyles[1].titleColor, fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>Dean's List</h4>
          <p style={{ margin: 0 }}>Highest GPA in Semester-IV (9.0/10.0)</p>
        </div>
        {/* Excellence Award */}
        <div
          className="card"
          style={{
            ...achievementStyles[2],
            flex: '1 1 200px',
            minWidth: '200px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: achievementStyles[2].titleColor, fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>Excellence Award</h4>
          <p style={{ margin: 0 }}>Student Excellence Award 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;