// src/components/Footer.js
import React from 'react';
import img2 from '../pages/insta.webp'
import img3 from '../pages/facebook.webp'
import img4 from '../pages/twit.webp'
const Footer = () => (
  <footer>
    <p>&copy; 2024 Food Paradise. All Rights Reserved.</p>
    <p>Follow us on social media!</p>
    <img src={img2} alt="insta" height="30px" width="30px"/>
    <img src={img3} alt="facebook" height="28px" width="28px"/>
    <img src={img4} alt="twitter" height="28px" width="28px"/>
  </footer>
);

export default Footer;