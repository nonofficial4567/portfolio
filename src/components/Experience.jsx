import React from 'react';
import { sectionHeadingStyle } from './About';


const experienceCardStyle = {
  background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
  border: '2px solid #00ffff',
  borderRadius: '16px',
  boxShadow: '0 0 14px #00ffff33',
  padding: '32px 32px 24px 32px',
  marginBottom: '20px',
  color: '#fff',
  maxWidth: '700px',
  margin: '0 auto',
  textAlign: 'left',
  position: 'relative',
};

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
    <div className="experience-container" style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={sectionHeadingStyle}>{"Experience"}</div>
      <div style={{...experienceCardStyle, width: '100%', maxWidth: '700px'}}>
        <h3 className="neon-blue-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Research and Development</span>
          <span style={{ fontSize: '0.8rem', color: '#39ff14' }}>June 2024 - July 2024</span>
        </h3>
        <strong>Avon Meters Pvt. Ltd.</strong>
        <ul>
          <li>Conducted R&amp;D on advanced meter technologies, enhancing product features</li>
          <li>Contributed in enhancing the website interface and user experience</li>
          <li>Also managed their recent database as a side task</li>
        </ul>
      </div>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        {/* Patent Published */}
        <div style={sectionHeadingStyle}>
        {"Awards"}
      </div>
        <div
          className="card"
          style={{
            ...achievementStyles[0],
            flex: '1 1 200px',
            minWidth: '240px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
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
            minWidth: '240px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
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
            minWidth: '240px',
            textAlign: 'center',
            borderRadius: '16px',
            padding: '24px 18px',
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