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
    <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px' }}>
      {/* About Heading */}
      <div style={sectionHeadingStyle}>
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
        boxSizing: 'border-box'
      }}>
        {/* Left big card */}
        <div style={{
          flex: '1 1 600px',
          minWidth: '300px',
           background: 'linear-gradient(120deg, #001a1f 60%, #004d66 80%, #00f0ff 120%)',
          border: '2px solid #00ffff',
          borderRadius: '16px',
          boxShadow: '0 0 14px #00fff7a0',
          padding: '32px 32px 24px 32px',
          marginBottom: '20px',
          color: '#fff',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontWeight: 700,
            fontSize: '2rem',
            color: '#00ffff',
            marginBottom: '18px',
            letterSpacing: '1.5px',
            textAlign: 'left'
          }}>
            Profile.exe
          </div>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '1.15rem',
            color: '#e0e0e0',
            marginBottom: '18px',
            lineHeight: 1.7,
            textAlign: 'justify'
          }}>
            I'm a passionate Computer Science student at Manipal University Jaipur, specializing in full-stack development and cloud technologies. With a strong foundation in modern web technologies and a keen interest in innovative solutions, I strive to create impactful digital experiences.
          </div>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '1.15rem',
            color: '#e0e0e0',
            marginBottom: '32px',
            lineHeight: 1.7,
            textAlign: 'justify'
          }}>
            My journey in technology is driven by curiosity and a desire to solve real-world problems. From developing digital rehabilitation systems to creating conference websites, I enjoy working on projects that make a difference.
          </div>
          <div style={{
            display: 'flex',
            gap: '40px',
            marginTop: '10px'
          }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 700,
                fontSize: '2.1rem',
                color: '#00ffff',
                marginBottom: '2px'
              }}>8.27</div>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '1rem',
                color: '#baffc9'
              }}>Current CGPA</div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontWeight: 700,
                fontSize: '2.1rem',
                color: '#00ffff',
                marginBottom: '2px'
              }}>2026</div>
              <div style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '1rem',
                color: '#baffff'
              }}>Graduation Year</div>
            </div>
          </div>
        </div>
        {/* Right two stacked cards */}
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
            color: '#fff'
          }}>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 700,
              fontSize: '1.3rem',
              color: '#39ff14',
              marginBottom: '12px',
              letterSpacing: '1px',
              textAlign: 'left'
            }}>
              Education
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#fff',
              marginBottom: '2px'
            }}>
              Bachelor of Technology
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#00ffff',
              marginBottom: '2px'
            }}>
              Manipal University Jaipur
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.98rem',
              color: '#baffc9'
            }}>
              Computer Science | Cloud Computing Minor
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(120deg, #1a002a 60%, #330033 80%, #ff00ff 120%)',
            border: '2px solid #ff00ff',
            borderRadius: '16px',
            boxShadow: '0 0 14px #ff00ff33',
            padding: '28px 28px 18px 28px',
            color: '#fff'
          }}>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 700,
              fontSize: '1.3rem',
              color: '#ff00ff',
              marginBottom: '12px',
              letterSpacing: '1px',
              textAlign: 'left'
            }}>
              Recent Achievements
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#fff',
              marginBottom: '2px'
            }}>
              Student Excellence Award 2025
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.98rem',
              color: '#baffff',
              marginBottom: '10px'
            }}>
              Patent Recognition
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#fff',
              marginBottom: '2px'
            }}>
              Dean's List
            </div>
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '0.98rem',
              color: '#baffff'
            }}>
              Academic Excellence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
