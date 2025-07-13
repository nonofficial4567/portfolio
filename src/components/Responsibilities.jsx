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
        padding: '40px 0',
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        className="neon-text"
        style={{
          marginBottom: '40px',
          fontSize: '2.5rem',
          color: '#00fff7',
          textShadow: '0 0 10px #00fff7, 0 0 20px #00fff7',
          letterSpacing: '2px',
        }}
      >
        {'<Responsibilities/>'}
      </h2>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto',
          paddingLeft: '40px',
        }}
      >
        {/* Timeline vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '4px',
            background: 'linear-gradient(to bottom, #00fff7 60%, #ff00ea 100%)',
            borderRadius: '2px',
            zIndex: 0,
          }}
        />
        {/* Timeline items */}
        {timelineData.map((item, idx) => (
          <div
            key={item.title}
            style={{
              position: 'relative',
              marginBottom: '60px',
              display: 'flex',
              alignItems: 'flex-start',
              zIndex: 1,
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: '-10px',
                top: '24px',
                width: '28px',
                height: '28px',
                background: item.bg,
                border: `3px solid ${item.border}`,
                borderRadius: '50%',
                boxShadow: `0 0 12px ${item.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                color: item.color,
                zIndex: 2,
              }}
            >
              {item.icon}
            </div>
            {/* Card */}
            <div
              className="card"
              style={{
                background: item.bg,
                border: `2px solid ${item.border}`,
                borderRadius: '18px',
                boxShadow: `0 0 14px ${item.border}a0`,
                padding: '28px 28px',
                minWidth: '320px',
                maxWidth: '420px',
                flex: '1 1 340px',
                color: '#fff',
                textAlign: 'left',
                marginLeft: '40px',
                transition: 'transform 0.2s',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '6px',
                  color: item.color,
                  textShadow: `0 0 8px ${item.color}`,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {item.icon} {item.title}
              </h3>
              <small style={{ color: item.color, fontWeight: 600 }}>{item.date}</small>
              <div style={{ fontWeight: 700, margin: '8px 0 12px 0', color: '#fff' }}>{item.org}</div>
              <ul style={{ marginLeft: '18px', marginBottom: 0 }}>
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;
