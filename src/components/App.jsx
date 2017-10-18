import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Gallery from './gallery/Gallery';

const App = () => (
  <Router>
    <div className="container">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/" component={Footer} />
    </div>
  </Router>
);

export default App;
