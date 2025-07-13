import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'responsibilities', label: 'Responsibilities' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">ADITYA</div>
      <div className="navbar-links">
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
    </nav>
  );
};

export default Navbar;