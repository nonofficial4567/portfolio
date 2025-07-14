import React from 'react';
import { sectionHeadingStyle } from './About';

const cardStyle = {
  maxWidth: '550px',
  minHeight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  borderRadius: '16px',
  marginBottom: '20px',
  color: '#fff',
  position: 'relative',
  textAlign: 'left',
  boxSizing: 'border-box',
  width: '100%'
};

const Projects = () => {
  return (
    <div className="projects-container" style={{ minHeight: 'auto', padding: '20px', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}>
      <div style={{...sectionHeadingStyle, marginBottom: '40px'}} className="section-heading">
        {"Projects"}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: '0',
          marginLeft: '0',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box'
        }}
      >
        {/* Left Project Card */}
        <div
          style={{
            ...cardStyle,
            flex: '1 1 450px',
            minWidth: '280px',
            maxWidth: '550px',
            background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
            border: '2px solid #00ffff',
            boxShadow: '0 0 14px #00ffff33',
            padding: '32px 32px 24px 32px'
          }}
          className="project-card"
        >
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 700,
              fontSize: '1.4rem',
              color: '#00ffff',
              marginBottom: '12px',
              letterSpacing: '1px',
              textAlign: 'left'
            }}
          >
            SoberPath- A Digital Rehab Assistant
          </div>
          <div style={{ fontWeight: 700, color: '#00ffff', marginBottom: '8px' }}>Tech Stack:</div>
          <div style={{ marginTop: '0', marginBottom: '10px' }}>
            <span className="tech-badge tech-green">MongoDB</span>
            <span className="tech-badge tech-blue">Express.js</span>
            <span className="tech-badge tech-blue">React.js</span>
            <span className="tech-badge tech-pink">Node.js</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: '#00bfff' }}>Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#39ff14' }}>Source Code</a>
          </div>
          <div style={{ marginTop: '18px', color: '#baffff', fontSize: '1rem' }}>
            Feb 2025 - Present
          </div>
        </div>
        {/* Right Project Card */}
        <div
          style={{
            ...cardStyle,
            flex: '1 1 450px',
            minWidth: '280px',
            maxWidth: '550px',
            background: 'linear-gradient(120deg, #1a002a 60%, #330033 80%, #ff00ff 120%)',
            border: '2px solid #ff00ff',
            boxShadow: '0 0 14px #ff00ff33',
            padding: '32px 32px 24px 32px'
          }}
          className="project-card"
        >
          <div
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 700,
              fontSize: '1.4rem',
              color: '#ff00ff',
              marginBottom: '12px',
              letterSpacing: '1px',
              textAlign: 'left'
            }}
          >
            Research Paper Conference Platform
          </div>
          <div style={{ fontWeight: 700, color: '#ff00ff', marginBottom: '8px' }}>Tech Stack:</div>
          <div style={{ marginTop: '0', marginBottom: '10px' }}>
            <span className="tech-badge tech-orange">HTML5</span>
            <span className="tech-badge tech-blue">CSS3</span>
            <span className="tech-badge tech-green">JavaScript</span>
            <span className="tech-badge tech-pink">Bootstrap</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: '#00bfff' }}>Visit Site</a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#39ff14' }}>Source Code</a>
          </div>
          <div style={{ marginTop: '18px', color: '#baffff', fontSize: '1rem' }}>
            April 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
