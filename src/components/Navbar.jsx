import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">ADITYA</div>
      
      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Desktop navigation */}
      <div className="navbar-links desktop-nav">
        {navItems.map(({ id, label }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-link"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
            className="nav-link mobile-nav-link"
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="mobile-nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;