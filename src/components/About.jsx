import React from 'react';

export const sectionHeadingStyle = {
  width: '100%',
  textAlign: 'center',
  marginTop: '0px',
  marginBottom: '32px',
  fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
  fontWeight: 900,
  fontSize: '2.6rem',
  color: '#00ffff',
  textShadow: '0 0 24px #00ffff, 0 0 48px #00ffff',
  letterSpacing: '2px',
  display: 'inline-block',
};

const About = () => {
  return (
    <div style={{ paddingTop: '20px', paddingBottom: '20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px', boxSizing: 'border-box' }}>
      {/* About Heading */}
      <div style={{...sectionHeadingStyle, marginBottom: '40px'}} className="section-heading">
        {"About Me"}
      </div>
      <div className="about-container" style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '0',
        marginLeft: '0',
        width: '100%',
        maxWidth: '1200px',
        boxSizing: 'border-box',
        flexDirection: window.innerWidth > 900 ? 'row-reverse' : 'column', // swap order on desktop
      }}>
        {/* Left big card (now on right in desktop) */}
        <div
          style={{
            flex: '1 1 600px',
            minWidth: '300px',
            background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
            border: '2px solid #00ffff',
            borderRadius: '16px',
            boxShadow: '0 0 14px #00fff7a0',
            padding: '32px 32px 20px 32px',
            marginBottom: '20px',
            color: '#fff',
            position: 'relative',
            boxSizing: 'border-box'
          }}
        >
          <div
            className="profile-exe-title"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 700,
              fontSize: '2rem',
              color: '#00ffff',
              marginBottom: '18px',
              letterSpacing: '1.5px',
              textAlign: 'left'
            }}
          >
            Profile.exe
          </div>
          <div
            className="profile-exe-desc"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '1.15rem',
              color: '#e0e0e0',
              marginBottom: '18px',
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            I'm a passionate Computer Science student at Manipal University Jaipur, specializing in full-stack development and cloud technologies. With a strong foundation in modern web technologies and a keen interest in innovative solutions, I strive to create impactful digital experiences.
          </div>
          <div
            className="profile-exe-desc"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '1.15rem',
              color: '#e0e0e0',
              marginBottom: '18px',
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            My journey in technology is driven by curiosity and a desire to solve real-world problems. From developing digital rehabilitation systems to creating conference websites, I enjoy working on projects that make a difference.
          </div>
        </div>
        {/* Right two stacked cards (now on left in desktop) */}
        <div style={{
          flex: '1 1 400px',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            background: 'linear-gradient(120deg, #002a1a 60%, #003300 80%, #00ff99 120%)',
            border: '2px solid #39ff14',
            borderRadius: '16px',
            boxShadow: '0 0 14px #39ff1433',
            padding: '28px 28px 18px 28px',
            marginBottom: '0',
            color: '#fff',
            lineHeight: 1.7 // Match line spacing with profile.exe card
          }}>
            <div
              className="education-title"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 700,
                fontSize: '2rem',
                color: '#39ff14',
                marginBottom: '18px',
                letterSpacing: '1.5px',
                textAlign: 'left',
                textShadow: '0 0 8px #39ff14',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Education
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2px'
            }}>
              <span style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#fff',
                lineHeight: 1.7 // Match line spacing
              }}>
                Bachelor of Technology
              </span>
              <span style={{
                color: '#baffc9',
                fontSize: '0.98rem',
                fontWeight: 400,
                marginLeft: '12px',
                minWidth: '80px',
                textAlign: 'right',
                display: 'inline-block',
                lineHeight: 1.7 // Match line spacing
              }}>
                2022-2026
              </span>
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#00ffff',
              marginBottom: '2px',
              lineHeight: 1.7 // Match line spacing
            }}>
              Manipal University Jaipur
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.98rem',
              color: '#baffc9',
              marginBottom: '10px',
              lineHeight: 1.7 // Match line spacing
            }}>
              Computer Science | Cloud Computing Minor
            </div>
            {/* Senior Secondary */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2px'
            }}>
              <span style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#fff',
                lineHeight: 1.7 // Match line spacing
              }}>
                Senior Secondary
              </span>
              <span style={{
                color: '#baffc9',
                fontSize: '0.98rem',
                fontWeight: 400,
                marginLeft: '12px',
                minWidth: '80px',
                textAlign: 'right',
                display: 'inline-block',
                lineHeight: 1.7 // Match line spacing
              }}>
                2021-2022
              </span>
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#00ffff',
              marginBottom: '2px',
              lineHeight: 1.7 // Match line spacing
            }}>
              DAV Public School
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Add this at the end of the file or in your global CSS if preferred
// This ensures the mobile font size and spacing for Profile.exe and Education section

if (typeof window !== "undefined") {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 768px) {
      .profile-exe-title, .education-title {
        font-size: 1.6rem !important;
        margin-bottom: 8px !important;
        line-height: 1.2 !important;
        text-align: left !important;
      }
      .profile-exe-desc {
        font-size: 1.05rem !important;
        line-height: 1.35 !important;
        text-align: left !important;
      }
    }
    @media (min-width: 769px) {
      .profile-exe-title {
        font-size: 2rem !important;
        text-align: left !important;
      }
      .profile-exe-desc {
        font-size: 1.15rem !important;
        line-height: 1.7 !important;
        text-align: justify !important;
      }
    }
  /* Mobile responsive styles for About section */
  @media (max-width: 768px) {
    .profile-exe-title, .education-title {
      font-size: 1.3rem !important;
      margin-bottom: 10px !important;
      line-height: 1.2 !important;
      text-align: left !important;
    }
    .profile-exe-desc {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
      text-align: left !important;
      margin-bottom: 12px !important;
    }
    .about-container .card {
      padding: 14px 12px !important;
    }
    .education-title {
      margin-bottom: 12px !important;
    }
    .about-container .card > div {
      font-size: 0.85rem !important;
      line-height: 1.5 !important;
      margin-bottom: 6px !important;
    }
    /* Education section specific mobile adjustments */
    .about-container .card > div[style*="display: flex"] {
      font-size: 0.9rem !important;
    }
    .about-container .card > div[style*="display: flex"] span:first-child {
      font-size: 0.9rem !important;
    }
    .about-container .card > div[style*="display: flex"] span:last-child {
      font-size: 0.8rem !important;
    }
    .about-container .card > div[style*="color: #00ffff"] {
      font-size: 0.9rem !important;
    }
    .about-container .card > div[style*="color: #baffc9"] {
      font-size: 0.8rem !important;
    }
  }
  @media (max-width: 480px) {
    .profile-exe-title, .education-title {
      font-size: 1.1rem !important;
      margin-bottom: 8px !important;
    }
    .profile-exe-desc {
      font-size: 0.8rem !important;
      line-height: 1.4 !important;
      margin-bottom: 10px !important;
    }
    .about-container .card {
      padding: 12px 10px !important;
    }
    .about-container .card > div {
      font-size: 0.75rem !important;
      margin-bottom: 4px !important;
    }
    /* Education section specific mobile adjustments for very small screens */
    .about-container .card > div[style*="display: flex"] {
      font-size: 0.8rem !important;
    }
    .about-container .card > div[style*="display: flex"] span:first-child {
      font-size: 0.8rem !important;
    }
    .about-container .card > div[style*="display: flex"] span:last-child {
      font-size: 0.75rem !important;
    }
    .about-container .card > div[style*="color: #00ffff"] {
      font-size: 0.8rem !important;
    }
    .about-container .card > div[style*="color: #baffc9"] {
      font-size: 0.75rem !important;
    }
  }
  `;
  document.head.appendChild(style);
}
