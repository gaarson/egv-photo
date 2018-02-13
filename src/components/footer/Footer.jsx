import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="socials">
      <a href="https://www.instagram.com/evg_zhukov/?hl=ru" className="socials-itm">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a href="/" className="socials-itm">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
      <a href="https://vk.com/id272427546" className="socials-itm">
        <i className="fa fa-vk" aria-hidden="true" />
      </a>
    </div>
    <p style={{ color: '#667a84' }}>+7 (906) 115-03-83 </p>
    <div className="copy">
      <span>&copy; 2017</span>
    </div>
  </footer>
);

export default Footer;
