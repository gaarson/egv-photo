import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ location: { pathname } }) => (
  <nav id="nav" style={{ display: pathname.search('admin') !== -1 && 'none' }}>
    <ul className="navbar">
      <li className="navbar-itm">
        <Link to="#one" className="navbar-link">
          Чем я занимаюсь
        </Link>
      </li>
      <li className="navbar-itm">
        <Link to="#two" className="navbar-link">
          Обо мне
        </Link>
      </li>
      <li className="navbar-itm">
        <Link to="#three" className="navbar-link">
          Портфолио
        </Link>
      </li>
      <li className="navbar-itm">
        <Link to="#four" className="navbar-link">
          Обратаная связь
        </Link>
      </li>
      {
        // <li className="navbar-itm">
        // <Link to="/news" className="navbar-link">
        // Последние новости
        // </Link>
        // </li>
      }
      <li className="navbar-itm">
        <Link to="/prices" className="navbar-link">
          Прайс-лист
        </Link>
      </li>
    </ul>
    <h1 className="logo">
      <Link to="/">sdsadsadsa</Link>
    </h1>
  </nav>
);

export default Header;
