import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Gallery from './gallery/Gallery';
import Blog from './blog/Blog';
import Article from './blog/article/Article';
import Prices from './prices/Prices';
import Admin from './admin/Admin';

const routes = [
  {
    path: '/',
    exact: false,
    main: Header,
  },
  {
    path: '/',
    exact: true,
    main: Main,
  },
  {
    path: '/gallery',
    exact: true,
    main: Gallery,
  },
  {
    path: '/admin',
    exact: true,
    main: Admin,
  },
  {
    path: '/admin/:type',
    exact: true,
    main: Admin,
  },
  {
    path: '/prices',
    exact: true,
    main: Prices,
  },
  {
    path: '/news',
    exact: true,
    main: Blog,
  },
  {
    path: '/news/:id',
    exact: true,
    main: Article,
  },
  {
    path: '/',
    exact: false,
    main: Footer,
  },
];

const App = () => (
  <Router>
    <div className="container">
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </Router>
);

export default App;
