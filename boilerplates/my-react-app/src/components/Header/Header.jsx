import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const LOGO_URL = '/icons/all_inclusive-white.svg';

export default function Header() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/view">View</Link>
        <Link to="/404">404</Link>
      </nav>
      <Logo />
    </header>
  );
}

function Logo() {
  return (
    <div className="Title">
      <h4 className="AppName">{process.env.REACT_APP_NAME}</h4>
      <div className="Logo" style={{ backgroundImage: `url(${LOGO_URL})` }}></div>
    </div>
  );
}
