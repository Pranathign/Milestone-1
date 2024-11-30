// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../pages/chef2.png';

const Navbar = () => (
  <nav>
    <div className='navi'>
    <h1>Food Paradise</h1>
    <img src={img5} alt="chef" height="30" width="30"/>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;