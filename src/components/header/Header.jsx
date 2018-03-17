import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';

const mapStateToProps = ({ galleryCategories }) => ({
  categories: galleryCategories,
});

const Header = ({ location: { pathname }, history: { push }, categories }) => (
  <nav id="nav" style={{ display: pathname.search('admin') !== -1 && 'none' }}>
    <ul className="navbar">
      <li className="navbar-itm">
        <Link to="/" className="navbar-link">
          Главная
        </Link>
      </li>
      {/* <li className="navbar-itm">
        <Link to="#two" className="navbar-link">
          Обо мне
        </Link>
      </li> */}
      <li className="navbar-itm">
        <a className="navbar-link arrowScroll portfolio">Портфолио</a>
        <div className="dropdown-content">
          {categories.map(cat => (
            <Link key={cat.id} to={`/gallery/${cat.id}`}>
              {cat.title}
            </Link>
          ))}
        </div>
      </li>
      <li className="navbar-itm">
        <Link
          to="#four"
          className="navbar-link arrowScroll"
          onClick={() => push('/')}
        >
          Обратная связь
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
        <div
          className="dropdown-content"
          style={{ right: '10px', textAlign: 'right' }}
        >
          {categories.map(cat => (
            <Link key={cat.id} to={`/prices/${cat.id}`}>
              {cat.title}
            </Link>
          ))}
        </div>
      </li>
    </ul>
    <h1 className="logo">
      <Link to="/">Фотограф Евгений Жуков</Link>

      <div className="socials-header">
        {/* <a
          href="https://www.instagram.com/evg_zhukov/?hl=ru"
          className="socials-itm-head"
        >
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="/" className="socials-itm-head">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="https://vk.com/id272427546" className="socials-itm-head">
          <i className="fa fa-vk" aria-hidden="true" />
        </a> */}
      </div>
    </h1>
  </nav>
);

export default connect(mapStateToProps)(Header);
