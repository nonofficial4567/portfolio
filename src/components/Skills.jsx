import React from 'react';
import ProgressBar from './ProgressBar';
import { sectionHeadingStyle } from './About';

const Skills = () => {
  return (
    <div className="skills-container" style={{ textAlign: 'center', minHeight: '100vh', padding: '40px 20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}>
      <div style={sectionHeadingStyle}>
              {"Skills"}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '48px',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="card neon-card"
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
             background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
            borderRadius: '18px',
            boxShadow: '0 0 14px #00f0ff55',
            border: '2px solid #00f0ff',
            padding: '32px 24px',
            boxSizing: 'border-box'
          }}
        >
          <h3 className="neon-blue-text" style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.3em' }}>&#60;&#62;</span> Programming
          </h3>
          
          <ProgressBar label="Java" percentage={90} colorClass="neon-green-text" />
          <ProgressBar label="JavaScript" percentage={85} colorClass="neon-green-text" />
          <ProgressBar label="C/C++" percentage={80} colorClass="neon-green-text" />
        </div>
        <div
          className="card neon-card"
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
            background: 'linear-gradient(120deg, #002a1a 60%, #003300 80%, #00ff99 120%)',

            borderRadius: '18px',
            boxShadow: '0 0 14px #00ffb355',
            border: '2px solid #00ffb3',
            padding: '32px 24px',
            boxSizing: 'border-box'
          }}
        >
          <h3 className="neon-green-text" style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.3em' }}>&#127760;</span> Web Development
          </h3>
          <ProgressBar label="React.js" percentage={88} colorClass="neon-green-text" />
          <ProgressBar label="Node.js" percentage={85} colorClass="neon-green-text" />
          <ProgressBar label="HTML/CSS" percentage={92} colorClass="neon-green-text" />
        </div>
        <div
          className="card neon-card"
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
                        background: 'linear-gradient(120deg, #1a002a 60%, #330033 80%, #ff00ff 120%)',

            borderRadius: '18px',
            boxShadow: '0 0 14px #ff00c855',
            border: '2px solid #ff00c8',
            padding: '32px 24px',
            boxSizing: 'border-box'
          }}
        >
          <h3 className="neon-pink-text" style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.3em' }}>&#9729;</span> Cloud & Database
          </h3>
          <ProgressBar label="AWS" percentage={85} colorClass="neon-green-text" />
          <ProgressBar label="MySQL" percentage={82} colorClass="neon-green-text" />
          <ProgressBar label="RDBMS" percentage={80} colorClass="neon-green-text" />
        </div>
      </div>
      <div style={sectionHeadingStyle}>
              {"Certificates & Courses"}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
          width: '100%',
          maxWidth: '1200px',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="card neon-card"
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            background: 'linear-gradient(120deg, #331a00 60%, #663300 80%, #ff7b00 120%)',            
            borderRadius: '18px',
            boxShadow: '0 0 14px #ff7b0055',
            border: '2px solid #ff7b00',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: '#ff7b00', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span role="img" aria-label="cloud">☁️</span> AWS Cloud Foundations
          </h4>
          <p style={{ color: '#fff', opacity: 0.8 }}>AWS Academy Graduate</p>
        </div>
        <div
          className="card neon-card"
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',

            borderRadius: '18px',
            boxShadow: '0 0 14px #00f0ff55',
            border: '2px solid #00f0ff',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: '#00f0ff', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>&#60;&#62;</span> Java Foundations
          </h4>
          <p style={{ color: '#fff', opacity: 0.8 }}>Oracle Academy</p>
        </div>
        <div
          className="card neon-card"
          style={{
            flex: '1 1 320px',
            minWidth: '280px',
            background: 'linear-gradient(120deg, #002a1a 60%, #003300 80%, #00ff99 120%)',

            borderRadius: '18px',
            boxShadow: '0 0 14px #00ffb355',
            border: '2px solid #00ffb3',
            padding: '24px 18px',
            boxSizing: 'border-box'
          }}
        >
          <h4 style={{ color: '#00ffb3', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span role="img" aria-label="frontend">&#127760;</span> Frontend Development
          </h4>
          <p style={{ color: '#fff', opacity: 0.8 }}>Meta Certified</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;