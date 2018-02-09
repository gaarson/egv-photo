import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Photos from 'react-photo-gallery';
import './Article.css';

const mapStateToProps = ({ article }, { match }) => ({
  article,
  id: match && match.params.id,
});

const Article = ({ info, article, id }) => {
  const data = id ? article : info;
  const articleClass = id ? 'article-full' : 'article';

  return (
    <div className={articleClass}>
      <h3 className={`${articleClass}__title`}>
        <Link to={`/news/${data.id}`}>{data.title} ></Link>
      </h3>
      <p className={`${articleClass}__description`}>
        {!id ? data.description.substring(0, 120) : data.description}
        <Link to={`/news/${data.id}`}>...</Link>
      </p>
      <div className={`${articleClass}__photo-block`}>
        {id ? (
          <Photos photos={data.photos} />
        ) : (
          <Link to={`/news/${data.id}`}>
            <img
              src={data.photo.src}
              alt=""
              width={data.photo.width}
              height={data.photo.height}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.any),
  article: PropTypes.objectOf(PropTypes.any),
};

Article.defaultProps = {
  id: null,
  info: {},
  article: {},
};

export default connect(mapStateToProps)(Article);
