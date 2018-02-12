import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

import '../layouts/all.sass';


const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span id="me-title1">E</span><span id="me-title2">THOU</span>
        </Link>
      </div>
      <Link to="/" className="navbar-item">
          Blog
      </Link>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          À Propos
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
