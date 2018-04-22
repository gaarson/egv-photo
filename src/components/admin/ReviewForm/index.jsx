import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reviews } from '../../../actions';

import './style.css';

const mapStateToProps = ({ reviews, editReview }) => ({
  reviews,
  editReview,
});

const mapDispatchToProps = dispatch => ({
  approve: status => dispatch(reviews.approve(status)),
  uploadPhoto: ({ target }) => dispatch(reviews.uploadImage(target)),
});

const ReviewForm = ({ reviews, editReview, approve, uploadPhoto }) => (
  <section className="download" style={{ overflow: 'auto' }}>
    <div className="download-form">
      <div className="reviews-admin">
        <div className="reviews-admin__head">
          <p style={{ fontWeight: 'bold' }}>Имя Автора</p>
          <p style={{ fontWeight: 'bold' }}>Отзыв</p>
          <p style={{ fontWeight: 'bold' }}>Cтатус</p>
        </div>
        <ul className="reviews-admin__list">
          {reviews.map(item => {
            return (
              <li key={item.id} className="reviews-admin__block">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div style={{ width: '15%' }}>
                  <button
                    onClick={() =>
                      approve({ id: item.id, status: item.is_valid ? 0 : 1 })
                    }
                    className={item.is_valid ? 'approved' : ''}
                  >
                    {!item.is_valid ? 'Одобрить' : 'Убрать'}
                  </button>
                  {/* <input type="file" className="review-input-file" /> */}
                  <label htmlFor="file" style={{ width: '100px' }}>
                    <span style={{ fontSize: '13px' }}>Загрузить фото:</span>
                  </label>
                  <input
                    type="file"
                    className="review-input-file"
                    id={item.id}
                    onChange={uploadPhoto}
                    value={item.src}
                    placeholder="Заголовок"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);

ReviewForm.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
  editReview: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
