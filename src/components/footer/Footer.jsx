import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="socials">
      <a href="/" className="socials-itm">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a href="/" className="socials-itm">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
      <a href="/" className="socials-itm">
        <i className="fa fa-vk" aria-hidden="true" />
      </a>
    </div>
    <div className="copy">
      <span>&copy; 2017</span>
    </div>
  </footer>
);

export default Footer;
