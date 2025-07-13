import React, { useEffect, useRef, useState } from 'react';
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import TerminalWindow from './TerminalWindow';

const TYPING_TEXT = "Software Developer";
const TYPING_SPEED = 80;

const Home = () => {
  const [typed, setTyped] = useState('');
  const idx = useRef(0);

  useEffect(() => {
    setTyped('');
    idx.current = 0;
    const interval = setInterval(() => {
      setTyped((prev) => prev + TYPING_TEXT[idx.current]);
      idx.current++;
      if (idx.current >= TYPING_TEXT.length) clearInterval(interval);
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '5%',
        background: 'none',
        marginLeft: 0, // ensure no left margin
        marginRight: 0, // ensure no right margin
      }}
    >
      {/* Grid/Hex background */}
      <div className="grid-background" />
      <div className="hex-background" />
      <div
        className="home-container"
        style={{
          display: 'flex',
          gap: '150px', // increased from 40px to 80px for more space on desktop
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          zIndex: 1,
          maxWidth: '1400px',
          marginLeft: '0',
          marginRight: '0', // ensure no right margin
        }}
      >
        {/* Left: Name, typing, desc, buttons, social */}
        <div
          className="home-left"
          style={{
            flex: '0 0 650px',
            maxWidth: '650px',
            minWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ marginBottom: '28px', width: '100%' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(0,0,0,0.85)',
                border: '3px solid #00ffff',
                borderRadius: '14px',
                boxShadow: '0 0 14px #00ffff, 0 0 0 4px rgba(0,255,255,0.08)',
                padding: '12px ',
                marginBottom: '10px',
                position: 'relative',
                minWidth: '220px',
                minHeight: '80px',
                overflow: 'visible',
                width: '100%',
              }}
            >
              <h1
                className="neon-text"
                style={{
                  fontSize: '4.2rem',
                  margin: 0,
                  letterSpacing: '3px',
                  lineHeight: '1.05',
                  textAlign: 'left',
                  textShadow: '0 0 32px #00ffff, 0 0 80px #00ffff, 0 0 120px #00ffff',
                  fontWeight: 900,
                  fontFamily: 'Orbitron, "Segoe UI", Arial, sans-serif',
                  width: '100%',
                }}
              >
                ADITYA<br />AGGARWAL
              </h1>
              {/* Subtle glow border effect */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '-8px',
                  borderRadius: '18px',
                  boxShadow: '0 0 32px 2px #00ffff33',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </div>
            <div style={{ marginTop: '25px', minHeight: '44px', fontSize: '1.8rem', fontWeight: 700 }}>
              <span
                className="neon-green-text"
                style={{
                  letterSpacing: '1.5px',
                  fontFamily: 'Fira Mono, monospace',
                  color: '#39ff14',
                  textShadow: '0 0 8px #39ff14, 0 0 16px #39ff14',
                }}
              >
                {typed}
                <span
                  className="neon-green-text"
                  style={{
                    borderRight: '2.5px solid #39ff14',
                    marginLeft: '2px',
                    animation: 'blink 1s steps(1) infinite',
                  }}
                />
              </span>
            </div>
          </div>
          <p
            style={{
              marginTop: '1px',
              textAlign: 'justify',
              fontSize: '1.08rem',
              lineHeight: '1.9',
              maxWidth: '600px',
              color: '#e0e0e0',
              textShadow: '0 0 6px #000',
            }}
          >
            Computer Science student at Manipal University Jaipur, passionate about crafting digital experiences with cutting-edge technology. Specializing in full-stack development, cloud computing, and innovative software solutions.
          </p>
          <div style={{ marginTop: '18px', display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
            <button
              style={{
                background: 'transparent',
                border: '2px solid #00ffff',
                color: '#00ffff',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '1.02rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 0 6px #00ffff55',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s, color 0.2s',
                flex: '1 1 180px',
                minWidth: '160px',
                justifyContent: 'center',
              }}
            >
              <FaDownload /> Download Resume
            </button>
            <button
              style={{
                background: 'transparent',
                border: '2px solid #39ff14',
                color: '#39ff14',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '1.02rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 0 6px #39ff1455',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s, color 0.2s',
                flex: '1 1 180px',
                minWidth: '160px',
                justifyContent: 'center',
              }}
            >
              <FaEnvelope /> Contact Me
            </button>
          </div>
          <div
            className="social-icons"
            style={{
              marginTop: '50px',
              display: 'flex',
              gap: '18px',
              width: '100%',
              justifyContent: 'flex-start',
            }}
          >
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: '#00ffff',
                fontSize: '1.5rem',
                transition: 'color 0.2s',
              }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: '#00ffff',
                fontSize: '1.5rem',
                transition: 'color 0.2s',
              }}
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                color: '#00ffff',
                fontSize: '1.5rem',
                transition: 'color 0.2s',
              }}
            >
              <FaTwitter />
            </a> */}
          </div>
        </div>
        {/* Right: Terminal + cards */}
        <div
          className="home-right"
          style={{
            flex: '0 0 540px',
            maxWidth: '600px',
            minWidth: '340px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            marginLeft: '40px',
            marginTop: '80px', // Lower the right section on desktop
          }}
        >
          <div
            style={{
              marginBottom: '24px',
              marginTop: '10px',
              borderRadius: '14px',
              boxShadow: '0 0 14px 2px #39ff1440, 0 0 0 4px #000a',
              overflow: 'hidden',
            }}
          >
            <TerminalWindow titleBarColor="green">
              {`$ node server.js
Server running on port 3000
$ npm start
Application ready!
`}
            </TerminalWindow>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '18px',
              marginTop: '0',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div
              className="card"
              style={{
                flex: 1,
                textAlign: 'center',
                background: 'linear-gradient(120deg, #003300 60%, #00ff99 100%)',
                boxShadow: '0 0 14px #39ff1440, 0 0 0 2px #000a',
                border: '2px solid #39ff14',
                borderRadius: '12px',
                color: '#fff',
                padding: '18px 0 10px 0',
                minWidth: '140px',
                minHeight: '70px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h2
                className="neon-blue-text"
                style={{
                  margin: 0,
                  fontSize: '2.6rem',
                  fontWeight: 800,
                  color: '#00ffff',
                  textShadow: '0 0 18px #00ffff, 0 0 36px #00ffff',
                }}
              >
                8.27
              </h2>
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '1.2px',
                  color: '#baffc9',
                  textShadow: '0 0 4px #39ff14',
                }}
              >
                CGPA
              </p>
            </div>
            <div
              className="card"
              style={{
                flex: 1,
                textAlign: 'center',
                background: 'linear-gradient(120deg, #001a33 60%, #00ffff 100%)',
                boxShadow: '0 0 14px #00ffff40, 0 0 0 2px #000a',
                border: '2px solid #00ffff',
                borderRadius: '12px',
                color: '#fff',
                padding: '18px 0 10px 0',
                minWidth: '140px',
                minHeight: '70px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h2
                className="neon-blue-text"
                style={{
                  margin: 0,
                  fontSize: '2.6rem',
                  fontWeight: 800,
                  color: '#00ffff',
                  textShadow: '0 0 18px #00ffff, 0 0 36px #00ffff',
                }}
              >
                2026
              </h2>
              <p
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '1.2px',
                  color: '#baffff',
                  textShadow: '0 0 4px #00ffff',
                }}
              >
                Graduation
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        html, body, #root, .App, main, section {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        @media (max-width: 900px) {
          .home-container {
            gap: 0 !important;
            flex-direction: column !important;
            align-items: stretch !important;
            max-width: 100vw !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .home-left, .home-right {
            min-width: 0 !important;
            max-width: 100vw !important;
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .home-left {
            align-items: stretch !important;
            padding: 0 0 !important;
          }
          .home-right {
            margin-top: 30px !important;
            padding: 0 0 !important;
          }
          .home-left h1.neon-text {
            font-size: 2.8rem !important;
            text-align: left !important;
            padding: 0 !important;
          }
          .home-left > div[style*="marginBottom: '28px'"] {
            min-width: 0 !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .social-icons {
            justify-content: center !important;
            margin-bottom: 18px !important;
          }
        }
        @media (max-width: 600px) {
          .home-left h1.neon-text {
            font-size: 2.1rem !important;
            text-align: left !important;
          }
          .home-left, .home-right {
            padding: 0 !important;
          }
          .home-right {
            margin-top: 30px !important; /* override desktop lowering on mobile */
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;
