import React, { useEffect, useRef, useState } from 'react';
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import TerminalWindow from './TerminalWindow';

const TYPING_TEXT = "Software Developer";
const TYPING_SPEED = 80;

const Home = () => {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const idx = useRef(0);

  useEffect(() => {
    setTyped('');
    idx.current = 0;
    const interval = setInterval(() => {
      if (idx.current < TYPING_TEXT.length) {
        setTyped((prev) => prev + TYPING_TEXT[idx.current]);
        idx.current++;
      } else {
        clearInterval(interval);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="home-section">
      {/* Grid/Hex background */}
      <div className="grid-background" />
      <div className="hex-background" />
      
       <div className="home-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {/* Left: Name, typing, desc, buttons, social */}
        <div className="home-left">
          <div className="name-section">
            <div className="name-card">
              <h1 className="neon-text main-title">
                ADITYA<br />AGGARWAL
              </h1>
              {/* Subtle glow border effect */}
              <div className="name-card-glow" />
            </div>
            <div className="typing-section">
              <span className="neon-green-text typing-text">
                {typed}
                <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`} />
              </span>
            </div>
          </div>
          
          <p className="description">
            Computer Science student at Manipal University Jaipur, passionate about crafting digital experiences with cutting-edge technology. Specializing in full-stack development, cloud computing, and innovative software solutions.
          </p>
          
          <div className="button-section">
            <button className="btn-primary">
              <FaDownload /> Download Resume
            </button>
            <button className="btn-secondary">
              <FaEnvelope /> Contact Me
            </button>
          </div>
          
          <div className="social-icons">
            {/* Social links can be added here */}
          </div>
        </div>

        {/* Right: Terminal + cards */}
        <div className="home-right">
          <div className="terminal-section">
            <TerminalWindow titleBarColor="green">
              {`$ node server.js
Server running on port 3000
$ npm start
Application ready!
`}
            </TerminalWindow>
          </div>
          
          <div className="stats-cards">
            <div className="stat-card stat-card-green">
              <h2 className="neon-blue-text stat-number">8.27</h2>
              <p className="stat-label">CGPA</p>
            </div>
            <div className="stat-card stat-card-blue">
              <h2 className="neon-blue-text stat-number">2026</h2>
              <p className="stat-label">Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;