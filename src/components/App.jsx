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
    id: 0,
    path: '/',
    exact: false,
    main: Header,
  },
  {
    id: 1,
    path: '/',
    exact: true,
    main: Main,
  },
  {
    id: 2,
    path: '/gallery',
    exact: true,
    main: Gallery,
  },
  {
    id: 3,
    path: '/admin',
    exact: true,
    main: Admin,
  },
  {
    id: 4,
    path: '/admin/:type',
    exact: true,
    main: Admin,
  },
  {
    id: 5,
    path: '/prices',
    exact: true,
    main: Prices,
  },
  {
    id: 6,
    path: '/news',
    exact: true,
    main: Blog,
  },
  {
    id: 7,
    path: '/news/:id',
    exact: true,
    main: Article,
  },
  {
    id: 8,
    path: '/',
    exact: false,
    main: Footer,
  },
];

const App = () => (
  <Router>
    <div className="container">
      {routes.map(route => (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </Router>
);

export default App;
