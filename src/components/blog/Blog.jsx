import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from './article/Article';
import './Blog.css';

const mapStateToProps = ({ news }) => ({
  news,
});

class Blog extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { news } = this.props;
    return (
      <div className="blog-container">
        <div className="blog-row">
          {news.map(article => <Article key={article.id} info={article} />)}
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Blog);
