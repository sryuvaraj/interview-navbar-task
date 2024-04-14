import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="logo">Dev.</a>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li onClick={removeActive}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
