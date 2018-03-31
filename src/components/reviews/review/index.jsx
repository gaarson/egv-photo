import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Photos from 'react-photo-gallery';
import './style.css';

const mapStateToProps = ({ match }) => ({
  id: match && match.params.id,
});

const Article = ({ info, id, set }) => {
  const data = info;
  const articleClass = id ? 'article-full' : 'article';

  if (data.newReview) {
    return (
      <div className={articleClass}>
        <h3 className={`${articleClass}__title`}>
          <input onChannge={set} value={data.name} placeholder="Ваше имя" />
        </h3>
        <p className={`${articleClass}__description`}>
          <testarea>{data.description}</testarea>
        </p>
        <div className={`${articleClass}__photo-block`}>
          {id ? (
            <Photos photos={data.photos} />
          ) : (
            <Link to={`/reviews/${data.id}`}>
              <img src={data.src} alt="" width="250" height="250" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={articleClass}>
      <h3 className={`${articleClass}__title`}>
        <Link to={`/reviews/${data.id}`}>{data.name}</Link>
      </h3>
      <p className={`${articleClass}__description`}>
        {!id ? data.description.substring(0, 120) : data.description}
        <Link to={`/news/${data.id}`}>...</Link>
      </p>
      <div className={`${articleClass}__photo-block`}>
        {id ? (
          <Photos photos={data.photos} />
        ) : (
          <Link to={`/reviews/${data.id}`}>
            <img src={data.src} alt="" width="250" height="250" />
          </Link>
        )}
      </div>
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.any),
  set: PropTypes.function,
};

Article.defaultProps = {
  id: null,
  info: {},
};

export default connect(mapStateToProps)(Article);
