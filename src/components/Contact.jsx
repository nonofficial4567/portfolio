import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import TerminalWindow from './TerminalWindow';
import { sectionHeadingStyle } from './About';

const Contact = () => {
  return (
    <div
      className="contact-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}
    >
      <div style={sectionHeadingStyle}>
        <Contact/>
      </div>
      <div style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '1200px'
      }}
    >
      {/* Left: Send Message Card */}
      <div
        style={{
          flex: '1 1 420px',
          minWidth: '340px',
          maxWidth: '500px',
          background: 'rgba(0, 20, 40, 0.95)',
          border: '2px solid #00ffff',
          borderRadius: '17px',
          boxShadow: '0 0 14px #00fff7a0',
          padding: '32px 32px 24px 32px',
          marginBottom: '20px',
          color: '#eafffa',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <h2
          className="neon-text"
          style={{
            marginBottom: '32px',
            fontSize: '2.2rem',
            color: '#00fff7',
            letterSpacing: '2px',
            textAlign: 'center',
          }}
        >
          Send Message
        </h2>
        <form>
          <label style={{ color: '#00fff7', fontWeight: 600, marginBottom: 4 }}>Name</label>
          <input type="text" placeholder="Your Name" name="name" required />
          <label style={{ color: '#00fff7', fontWeight: 600, marginBottom: 4 }}>Email</label>
          <input type="email" placeholder="your@email.com" name="email" required />
          <label style={{ color: '#00fff7', fontWeight: 600, marginBottom: 4 }}>Subject</label>
          <input type="text" placeholder="Subject" name="subject" />
          <label style={{ color: '#00fff7', fontWeight: 600, marginBottom: 4 }}>Message</label>
          <textarea placeholder="Your message here..." name="message" rows="6" required></textarea>
          <button type="submit" style={{ width: '100%', marginTop: '10px' }}>
            <span role="img" aria-label="send">📧</span> Send Message
          </button>
        </form>
      </div>
      {/* Right: Get in Touch & Socials */}
      <div
        style={{
          flex: '1 1 420px',
          minWidth: '340px',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Get in Touch Card */}
        <div
          className="card green"
          style={{
            background: 'linear-gradient(120deg, #002a1a 60%, #003300 80%, #00ff99 120%)',
            border: '2px solid #39ff14',
            borderRadius: '18px',
            boxShadow: '0 0 14px #39ff14a0',
            padding: '28px 28px 18px 28px',
            marginBottom: '25px',
            color: '#fff',
            marginTop: 0,
          }}
        >
          <h2 className="neon-green-text" style={{ marginBottom: '18px', fontSize: '1.5rem', textAlign: 'center',  }}>
            Get in Touch
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaMapMarkerAlt color="#00fff7" style={{ minWidth: 20 }} />
            <span style={{ color: '#00fff7', fontWeight: 600 }}>Location</span>
          </div>
          <div style={{ marginLeft: 28, marginBottom: 12, color: '#eafffa' }}>Amritsar, Punjab, India</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaPhoneAlt color="#39ff14" style={{ minWidth: 20 }} />
            <span style={{ color: '#39ff14', fontWeight: 600 }}>Phone</span>
          </div>
          <div style={{ marginLeft: 28, marginBottom: 12, color: '#eafffa' }}>+91-7340962102</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <FaEnvelope color="#ff00ea" style={{ minWidth: 20 }} />
            <span style={{ color: '#ff00ea', fontWeight: 600 }}>Email</span>
          </div>
          <div style={{ marginLeft: 28, color: '#eafffa' }}>adityaagg25@gmail.com</div>
        </div>
        {/* Socials Card */}
        <div
          className="card"
          style={{
            background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
            border: '2px solid #00fff7',
            borderRadius: '18px',
            boxShadow: '0 0 14px #00fff7a0',
            padding: '24px 24px 18px 24px',
            marginBottom: '0',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h2 className="neon-text" style={{ fontSize: '1.3rem', marginBottom: '18px', textShadow: '0 0 8px #00fff7' }}>
            Connect With Me
          </h2>
          <div className="social-icons" style={{ justifyContent: 'center', gap: '24px', marginTop: 0 }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#00fff7', fontSize: '2rem' }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#39ff14', fontSize: '2rem' }}>
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#ff00ff', fontSize: '2rem' }}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#ff6600', fontSize: '2rem' }}>
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* Terminal Card */}
        <div style={{ marginTop: '10px' }}>
          <TerminalWindow titleBarColor="green">
            {`$ whoami
Aditya Aggarwal
$ status
Available for opportunities
$ location
Punjab, India
`}
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};

export default Contact;
