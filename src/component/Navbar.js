import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
      <div className="logo">
        <img src="/image/logo.png"/>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/service">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
      );
}

export default Navbar;