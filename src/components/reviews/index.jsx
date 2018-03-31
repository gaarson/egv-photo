import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions';

import Review from './review';
import './style.css';

const mapStateToProps = ({ reviews }) => ({
  reviews,
});
const mapDispatchToProps = dispatch => ({
  getReviews: () => dispatch(actions.reviews.pending()),
  setEmptyReview: () => dispatch(actions.reviews.setEmpty()),
  setValue: ({ target }) => dispatch(actions.reviews.setValue()),
});

class Reviews extends React.Component {
  componentDidMount() {
    this.props.getReviews();
    window.scrollTo(0, 0);
  }

  render() {
    const { reviews, setEmptyReview, setValue } = this.props;
    return (
      <div className="blog-container">
        <div className="blog-row">
          {reviews.map(review => (
            <Review key={review.id} info={review} set={setValue} />
          ))}
        </div>
        <button className="add-review" onClick={setEmptyReview} />
      </div>
    );
  }
}

Review.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
