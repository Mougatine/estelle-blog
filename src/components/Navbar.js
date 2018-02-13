import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

import '../layouts/all.sass';


const Navbar = () => (
  <nav className="navbar" id="me-navbar">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-item" id="me-title">eTHOU</span>
      </div>
      <Link to="/" className="me-navbar-item navbar-item">
          Menu
      </Link>
      <Link to="/" className="me-navbar-item navbar-item">
          Références
      </Link>
      <Link className="me-navbar-item navbar-item" to="/about">
        À Propos
      </Link>
    </div>
  </nav>
);

export default Navbar;
