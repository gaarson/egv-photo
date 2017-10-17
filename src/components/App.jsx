import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Section from './main_section/Section';

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Header} />
      <Route path="/" component={Section} />
      <Route exact path="/" component={Footer} />
    </div>
  </Router>
);

export default App;
