import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { reviews } from '../../../actions';

import './style.css';

const mapStateToProps = ({ editReview }, { match }) => ({
  id: match && match.params.id,
  edit: editReview,
});

const mapDispatchToProps = dispatch => ({
  set: ({ target }) => dispatch(reviews.set(target)),
  send: review => dispatch(reviews.upload(review)),
});

const Review = ({ info, edit, id, set, send }) => {
  const data = info;
  const articleClass = id ? 'article-full' : 'article';

  if (data.newReview) {
    return (
      <div className={articleClass}>
        <h3 className={`${articleClass}__title`}>
          <input
            onChange={set}
            value={edit.name}
            id="name"
            placeholder="Ваше имя"
          />
        </h3>
        <p className={`${articleClass}__description`}>
          <textarea
            placeholder="Отзыв..."
            value={edit.description}
            style={{ width: '200%', height: '150px' }}
            id="description"
            onChange={set}
          >
            {data.description}
          </textarea>
        </p>
        <div className={`review__photo-block`}>
          <Link to={`/reviews/${data.id}`}>
            <img src={data.src} alt="" width="250" height="250" />
          </Link>
        </div>
        <div className={`${articleClass}__upload-button`}>
          <div
            onClick={() => send(edit)}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <p className="btn-form">Отправить</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={articleClass}>
      <div className="review-head">
        <img
          className="download-photo"
          alt=""
          src={`http://ezhukov.ru${data.src}`}
        />
        <h3 className={`${articleClass}__title`}>
          <Link to={`/reviews/${data.id}`}>{data.name}</Link>
        </h3>
      </div>
      <p className={`${articleClass}__description`}>
        {data.description}
        {/* !id ? data.description.substring(0, 120) : data.description */}
        {/*<Link to={`/news/${data.id}`}>...</Link> */}
      </p>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.any),
  edit: PropTypes.objectOf(PropTypes.any).isRequired,
  set: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};

Review.defaultProps = {
  id: null,
  info: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
