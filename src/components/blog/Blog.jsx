import React from 'react';
import { connect } from 'react-redux';

import Article from './article/Article';

import './Blog.css';

class Blog extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="blog-container">
        <div className="blog-row">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    );
  }
}

export default connect()(Blog);
